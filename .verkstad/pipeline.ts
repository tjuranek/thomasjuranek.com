export default {
	on: { push: ["master"] },
	steps: [
		{
			name: "deploy",
			run: "bunx wrangler@4 pages deploy public --project-name=thomasjuranek --branch=master",
			secrets: ["CLOUDFLARE_API_TOKEN"],
			env: { CLOUDFLARE_ACCOUNT_ID: "29c5317bd80c73f5faa2d9decc341fa3" },
		},
	],
};
