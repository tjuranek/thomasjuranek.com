const APEX = "thomasjuranek.com";

function incomingHost(request) {
  const header = request.headers.get("Host");
  const host = (header || new URL(request.url).host).split(":")[0];
  return host.toLowerCase();
}

export default {
  async fetch(request, env) {
    if (incomingHost(request) === `www.${APEX}`) {
      const url = new URL(request.url);
      return Response.redirect(`https://${APEX}${url.pathname}${url.search}`, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
