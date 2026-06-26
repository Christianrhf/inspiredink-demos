import argparse
import json
import os
import re
from collections import deque
from datetime import datetime
from pathlib import Path
from urllib.parse import urldefrag, urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from openai import OpenAI


def normalize_url(url: str) -> str:
    url, _fragment = urldefrag(url)
    parsed = urlparse(url)
    normalized = parsed._replace(query="").geturl().rstrip("/")
    return normalized or url


def same_domain(url: str, base_domain: str) -> bool:
    host = urlparse(url).netloc.lower().removeprefix("www.")
    return host == base_domain


def clean_text(value: str) -> str:
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def extract_page(url: str, timeout: int = 20) -> dict:
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; RedesignResearchBot/1.0; +local-project)"
    }
    response = requests.get(url, headers=headers, timeout=timeout)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

    for tag in soup(["script", "style", "noscript", "svg"]):
        tag.decompose()

    title = clean_text(soup.title.get_text(" ")) if soup.title else ""
    meta_description_tag = soup.find("meta", attrs={"name": "description"})
    meta_description = meta_description_tag.get("content", "") if meta_description_tag else ""
    headings = [clean_text(h.get_text(" ")) for h in soup.find_all(["h1", "h2", "h3"])]
    headings = [h for h in headings if h]
    text = clean_text(soup.get_text(" "))

    links = []
    for anchor in soup.find_all("a", href=True):
        href = anchor.get("href")
        absolute = normalize_url(urljoin(url, href))
        links.append(absolute)

    return {
        "url": url,
        "title": title,
        "meta_description": clean_text(meta_description),
        "headings": headings[:40],
        "text": text[:12000],
        "links": links,
    }


def crawl(start_url: str, max_pages: int) -> list[dict]:
    start_url = normalize_url(start_url)
    base_domain = urlparse(start_url).netloc.lower().removeprefix("www.")
    queue = deque([start_url])
    seen = set()
    pages = []

    while queue and len(pages) < max_pages:
        url = queue.popleft()
        if url in seen or not same_domain(url, base_domain):
            continue
        seen.add(url)
        try:
            page = extract_page(url)
        except Exception as error:
            pages.append({"url": url, "error": str(error)})
            continue
        pages.append(page)
        for link in page.get("links", []):
            parsed = urlparse(link)
            if parsed.scheme in {"http", "https"} and same_domain(link, base_domain) and link not in seen:
                queue.append(link)

    return pages


def analyze_with_openai(pages: list[dict], model: str) -> dict:
    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
    compact_pages = []
    for page in pages:
        compact_pages.append({
            "url": page.get("url"),
            "title": page.get("title"),
            "meta_description": page.get("meta_description"),
            "headings": page.get("headings", [])[:25],
            "text_excerpt": page.get("text", "")[:5000],
            "error": page.get("error"),
        })

    prompt = """
Analiza estas páginas de un negocio para preparar un rediseño de sitio web.
Devuelve JSON válido, sin markdown, con estas claves:
- business_snapshot: nombre, industria, ubicación, contacto, servicios, mercado objetivo probable.
- current_site_audit: fortalezas, debilidades, fricción de conversión, contenido faltante, señales de confianza.
- redesign_strategy: posicionamiento recomendado, estructura de homepage, CTAs, mensajes clave, secciones prioritarias.
- lead_generation: formulario recomendado, oferta/lead magnet si aplica, preguntas para cotización.
- sales_copy: hero headline, subheadline, bullets de valor, CTA principal, CTA secundario.
- client_questions: preguntas que faltan para cerrar el rediseño.
No inventes datos factuales. Si infieres algo, márcalo como inferencia.
""".strip()

    response = client.responses.create(
        model=model,
        input=[
            {"role": "system", "content": "Eres un estratega senior de rediseño web y CRO para negocios locales."},
            {"role": "user", "content": prompt + "\n\nPáginas scrapeadas:\n" + json.dumps(compact_pages, ensure_ascii=False)},
        ],
    )
    text = response.output_text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return {"raw_analysis": text}


def main() -> None:
    parser = argparse.ArgumentParser(description="Crawlea un negocio y genera análisis de rediseño.")
    parser.add_argument("url")
    parser.add_argument("--max-pages", type=int, default=8)
    parser.add_argument("--model", default="gpt-4o-mini")
    parser.add_argument("--output-dir", default="scrape-results")
    args = parser.parse_args()

    load_dotenv()
    if not os.getenv("OPENAI_API_KEY"):
        raise SystemExit("Falta OPENAI_API_KEY en .env")

    pages = crawl(args.url, args.max_pages)
    analysis = analyze_with_openai(pages, args.model)

    output_dir = Path(args.output_dir)
    output_dir.mkdir(exist_ok=True)
    domain = urlparse(args.url).netloc.lower().removeprefix("www.").replace(".", "-")
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    json_path = output_dir / f"{timestamp}-{domain}-deep.json"
    md_path = output_dir / f"{timestamp}-{domain}-deep.md"

    payload = {"source_url": args.url, "pages_scraped": pages, "analysis": analysis}
    json_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")

    md_path.write_text(
        "\n".join([
            f"# Deep Scrape para rediseño: {args.url}",
            "",
            f"Fecha: {datetime.now().isoformat(timespec='seconds')}",
            f"Páginas scrapeadas: {len(pages)}",
            "",
            "## Páginas",
            "",
            *[f"- {page.get('url')}" + (f" — ERROR: {page.get('error')}" if page.get('error') else "") for page in pages],
            "",
            "## Análisis",
            "",
            "```json",
            json.dumps(analysis, indent=2, ensure_ascii=False),
            "```",
            "",
        ]),
        encoding="utf-8",
    )

    print(f"OK: {json_path}")
    print(f"OK: {md_path}")


if __name__ == "__main__":
    main()
