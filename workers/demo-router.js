const falsettiHost = "falcettis.inspiredink.space";
const falsettiRoot = "/exteriorwash";
const falsettiServiceSlugs = new Set([
  "pressure-washing",
  "soft-washing",
  "house-washing",
  "roof-washing",
  "surface-cleaning",
  "replacement-windows",
]);

function requestWithPath(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

function redirectToPath(request, pathname, status = 301) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return Response.redirect(url.toString(), status);
}

function xmlResponse(body) {
  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

function falsettiSitemap() {
  const base = `https://${falsettiHost}`;
  const urls = ["/", ...Array.from(falsettiServiceSlugs).map((slug) => `/${slug}/`)];

  return xmlResponse(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${base}${url}</loc></url>`).join("\n")}
</urlset>`);
}

function falsettiRobots() {
  return new Response(`User-agent: *
Allow: /

Sitemap: https://${falsettiHost}/sitemap.xml
`, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

function notFound() {
  return new Response("Not found", {
    status: 404,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname.toLowerCase();
    const pathname = url.pathname;

    if (hostname === falsettiHost) {
      if (pathname === "/robots.txt") return falsettiRobots();
      if (pathname === "/sitemap.xml" || pathname === "/sitemap-index.xml") return falsettiSitemap();
      if (pathname.startsWith("/images/") || pathname.startsWith("/_astro/")) return env.ASSETS.fetch(request);

      if (pathname === "/" || pathname === "") {
        return env.ASSETS.fetch(requestWithPath(request, `${falsettiRoot}/`));
      }

      if (pathname === falsettiRoot || pathname === `${falsettiRoot}/`) {
        return redirectToPath(request, "/");
      }

      if (pathname.startsWith(`${falsettiRoot}/`)) {
        const cleanPath = pathname.slice(falsettiRoot.length) || "/";
        return redirectToPath(request, cleanPath);
      }

      const cleanSlug = pathname.replace(/^\/|\/$/g, "");
      if (falsettiServiceSlugs.has(cleanSlug)) {
        return env.ASSETS.fetch(requestWithPath(request, `${falsettiRoot}/${cleanSlug}/`));
      }

      return notFound();
    }

    return env.ASSETS.fetch(request);
  },
};
