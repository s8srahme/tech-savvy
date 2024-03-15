import path from "path";

export default {
	webpack: {
		// Import declarations must be using the same alias defined in webpack configuration
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},
	babel: {
		presets: [
			[
				"@babel/preset-react",
				{
					runtime: "automatic"
				}
			]
		]
	}
};
