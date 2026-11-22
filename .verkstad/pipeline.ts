export default {
	on: { push: ["master"] },
	steps: [{ name: "probe", run: "bun .verkstad/probe.mjs" }],
};
