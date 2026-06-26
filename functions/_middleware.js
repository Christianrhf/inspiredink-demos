const demoRoots = {
  "falcettis.inspiredink.space": "/exteriorwash",
};

export function onRequest(context) {
  const url = new URL(context.request.url);
  const demoRoot = demoRoots[url.hostname.toLowerCase()];

  if (demoRoot && url.pathname === "/") {
    url.pathname = demoRoot;
    return Response.redirect(url.toString(), 302);
  }

  return context.next();
}
