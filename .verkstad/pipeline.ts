export default {
	on: { push: ["master"] },
	steps: [
		{
			name: "deploy",
			run: "bunx wrangler@4 pages deploy public --project-name=thomasjuranek --branch=master",
			secrets: ["CLOUDFLARE_API_TOKEN"],
		},
	],
};
