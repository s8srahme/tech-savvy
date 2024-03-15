import axios, { AxiosInstance } from "axios";

import { apiConfig } from "../api.config";

// Create a base instance of axios with a custom config
export const instance: AxiosInstance = axios.create({
	baseURL: apiConfig.baseUrl[process.env.NODE_ENV].href,
	headers: {
		// Authorization: `<Your Auth Token>`,
		"Content-Type": "application/json"
	},
	timeout: 10000
	// other options...
});
