const account = process.env.CLOUDFLARE_ACCOUNT_ID;
const h = { authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}` };
for (const path of [`/accounts/${account}/tokens/permission_groups`, `/user/tokens/permission_groups`]) {
	const r = await fetch(`https://api.cloudflare.com/client/v4${path}`, { headers: h });
	const body = await r.json().catch(() => ({}));
	const pages = (body.result ?? []).filter((g) => /pages/i.test(g.name)).map((g) => `${g.name} [${(g.scopes ?? []).join(",")}]`);
	console.log("GROUPS", path.startsWith("/user") ? "user" : "account", r.status, pages.join(" ; ") || JSON.stringify(body.errors ?? []).slice(0, 200));
}
const v = await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/tokens/verify`, { headers: h });
console.log("VERIFY", v.status);
