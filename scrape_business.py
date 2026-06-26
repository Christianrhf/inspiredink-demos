import argparse
import json
import os
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperGraph


def safe_slug(value: str) -> str:
    cleaned = "".join(char.lower() if char.isalnum() else "-" for char in value)
    return "-".join(part for part in cleaned.split("-") if part)[:80] or "business"


def build_prompt(extra_context: str | None = None) -> str:
    base_prompt = """
Eres un estratega web senior preparando un rediseño de sitio web para un negocio.
Extrae información útil del sitio y devuélvela como JSON válido con estas claves:

{
  "business_name": "",
  "industry": "",
  "location": "",
  "contact": {
    "phone": "",
    "email": "",
    "address": "",
    "social_links": []
  },
  "services": [],
  "target_customers": [],
  "value_proposition": "",
  "trust_signals": [],
  "current_site_observations": {
    "strengths": [],
    "weaknesses": [],
    "missing_sections": [],
    "conversion_issues": []
  },
  "redesign_opportunities": [],
  "recommended_homepage_sections": [],
  "copy_angles": [],
  "questions_for_client": []
}

Prioriza datos visibles en la página. Si algo no aparece, usa null o lista vacía. No inventes datos.
""".strip()
    if extra_context:
        return f"{base_prompt}\n\nContexto adicional del usuario: {extra_context}"
    return base_prompt


def main() -> None:
    parser = argparse.ArgumentParser(description="Scrapea un sitio de negocio y genera insumos para rediseño web.")
    parser.add_argument("url", help="URL del sitio web del negocio. Ej: https://example.com")
    parser.add_argument("--context", help="Contexto adicional sobre el negocio o el rediseño", default=None)
    parser.add_argument("--model", help="Modelo OpenAI", default="openai/gpt-4o-mini")
    parser.add_argument("--output-dir", help="Carpeta de salida", default="scrape-results")
    args = parser.parse_args()

    load_dotenv()
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise SystemExit("Falta OPENAI_API_KEY en .env")

    graph_config = {
        "llm": {
            "api_key": api_key,
            "model": args.model,
        },
        "verbose": True,
        "headless": True,
    }

    graph = SmartScraperGraph(
        prompt=build_prompt(args.context),
        source=args.url,
        config=graph_config,
    )

    result = graph.run()

    output_dir = Path(args.output_dir)
    output_dir.mkdir(exist_ok=True)
    parsed = urlparse(args.url)
    slug = safe_slug(parsed.netloc or args.url)
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    json_path = output_dir / f"{timestamp}-{slug}.json"
    md_path = output_dir / f"{timestamp}-{slug}.md"

    json_path.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")

    markdown = [
        f"# Scraping para rediseño: {args.url}",
        "",
        f"Fecha: {datetime.now().isoformat(timespec='seconds')}",
        "",
        "## Resultado estructurado",
        "",
        "```json",
        json.dumps(result, indent=2, ensure_ascii=False),
        "```",
        "",
        "## Próximo uso",
        "",
        "Usa este material para definir arquitectura, copy, secciones, propuesta de valor y oportunidades de rediseño.",
    ]
    md_path.write_text("\n".join(markdown), encoding="utf-8")

    print(f"OK: {json_path}")
    print(f"OK: {md_path}")


if __name__ == "__main__":
    main()
