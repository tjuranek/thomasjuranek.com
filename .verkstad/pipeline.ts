export default {
	on: { push: ["master"] },
	steps: [
		{
			name: "check token",
			run: 'node -e \'const v=process.env.CLOUDFLARE_API_TOKEN||""; console.log(JSON.stringify({length:v.length, prefix:v.slice(0,5), placeholder:v.startsWith("verkstad-"), whitespace:/\\s/.test(v), quotes:/["\\x27]/.test(v), braces:/[{}]/.test(v), other:/[^A-Za-z0-9_-]/.test(v)}))\'',
			secrets: ["CLOUDFLARE_API_TOKEN"],
		},
		{
			name: "deploy",
			needs: ["check token"],
			run: "bunx wrangler@4 pages deploy public --project-name=thomasjuranek --branch=master",
			secrets: ["CLOUDFLARE_API_TOKEN"],
		},
	],
};
