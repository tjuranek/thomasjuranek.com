const account = process.env.CLOUDFLARE_ACCOUNT_ID;
const r = await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/pages/projects/thomasjuranek/upload-token`, { headers: { authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}` } });
const text = await r.text();
console.log("upload-token", r.status, r.headers.get("content-type"), "bytes", text.length);
const jwt = JSON.parse(text).result?.jwt ?? "";
const parts = jwt.split(".");
console.log("jwt parts", parts.length, "lengths", parts.map((p) => p.length).join(","), "chars ok", /^[A-Za-z0-9._-]+$/.test(jwt));
try { console.log("claims", Buffer.from(parts[1], "base64url").toString().slice(0, 400)); } catch (e) { console.log("claims unreadable", String(e)); }
const c = await fetch("https://api.cloudflare.com/client/v4/pages/assets/check-missing", { method: "POST", headers: { authorization: `Bearer ${jwt}`, "content-type": "application/json" }, body: JSON.stringify({ hashes: ["0123456789abcdef0123456789abcdef"] }) });
console.log("check-missing", c.status, (await c.text()).slice(0, 300));
