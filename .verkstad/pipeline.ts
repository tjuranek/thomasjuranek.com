export default {
	on: { push: ["master"] },
	steps: [
		{
			name: "check token",
			run: 'node -e \'const v=process.env.CLOUDFLARE_API_TOKEN||""; console.log("token length", v.length, "account set", Boolean(process.env.CLOUDFLARE_ACCOUNT_ID))\'',
		},
		{
			name: "deploy",
			needs: ["check token"],
			run: "bunx wrangler@4 pages deploy public --project-name=thomasjuranek --branch=master",
		},
	],
};
