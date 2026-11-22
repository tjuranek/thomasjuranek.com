export default {
	on: { push: ["master"] },
	steps: [
		{
			name: "deploy",
			run: "WRANGLER_LOG=debug bunx wrangler@4 pages deploy public --project-name=thomasjuranek --branch=master",
		},
	],
};
