const demoRoots = {
  "falcettis.inspiredink.space": "/exteriorwash",
};

function requestWithPath(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    const demoRoot = demoRoots[url.hostname.toLowerCase()];

    if (demoRoot && (url.pathname === "/" || url.pathname === "")) {
      return env.ASSETS.fetch(requestWithPath(request, `${demoRoot}/`));
    }

    return env.ASSETS.fetch(request);
  },
};
