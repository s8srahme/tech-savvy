/**
 * C O N F I G U R A T I O N  &  S E C R E T  M A N A G E M E N T
 *
 * Secrets management is the practice of securely storing sensitive information that, if leaked, could give malicious
 * or unauthorized parties access to application infrastructure. Secrets are values used as credentials that the
 * non-human components of any application need to authenticate to each other in order for the application to work
 * securely. These components can include API connections, containers, microservices, scripts and automation tools. To
 * authenticate, they use secrets (credentials) which may include encryption keys, API keys, SSH keys, tokens,
 * passwords or certificates. These should be protected and never be stored as plain text sitting in your repositories
 * along with the rest of your code.
 *
 * Configuration management is essential for every application that will be deployed into multiple environments, which
 * is pretty much the case with majority of applications and APIs.
 *
 *
 * C O N F I G U R A T I O N  T Y P E S
 *
 * There are different types of configurations in a React application:
 * 	- Environment dependent configurations: These configurations change from one environment to the other, e.g. domain
 * 		names. You can manage these configurations through a separate .env file for each environment:
 * 			- .env for your local dev environment
 * 			- .env.test for test environment
 * 			- .env.production for production
 * 		When the application is packaged for each environment by webpack, the right configuration file will be picked
 * 		up. The content of such file is key-value pairs and key names need to start with REACT_APP_ for them to be
 * 		accessible in your code. You should have the same set of keys in each .env file with different values specific
 * 		to that environment. It is considered best practice to exclude the content of .env files in any environment
 * 		from your git repository, so that there should not be any risk in exposing them to public.
 * 	- Static configurations: These values do not change from one environment to the other, e.g. URLs, telephone
 * 		numbers, company names, titles, descriptions, etc. As they might be subject to change from time to time, simply
 * 		storing these values separated from your code makes it easier to find and change them. JSON files could enable
 * 		you to store these values in a specific hierarchy which makes it easier to manage. Other alternative to manage
 * 		static values is through typed objects and arrays in regular .ts/.tsx files.
 *
 *
 * A P P L I C A T I O N  P R O G R A M M I N G  I N T E R F A C E
 *
 * API (a type of software interface) is a set of defined rules that enable different applications to communicate (i.e.
 * share its data) with each other. API URL is an address that allows you to access an API and its various resources,
 * which comes in two parts:
 * 	- Base URL is defined by schemes (aka transfer protocols), host that serves the API and basePath (e.g. /api/v2).
 * 		The endpoint paths are appended to it.
 * 	- Endpoint path in a URL provides the location of a specific resource on the server (e.g. /facts)
 *
 * Requests to API endpoints must include:
 * 	- HTTP method maps to a specific operation, such as creating, reading, updating or deleting a resource
 * 	- Parameters are variables that provide specific instructions for the API to process (e.g. /articles endpoint might
 * 		accept a category parameter, which it would use to retrieve articles of the specified category)
 * 	- Headers are key-value pairs that provide additional information about the request (e.g. Accept header specifies
 * 		the media types that the client can accept, Authorization header is used to send tokens and API keys to
 * 		authenticate the client, etc.)
 * 	- Body includes the actual data that is required to create, update or delete a resource
 *
 * Response to the client typically includes a status code (which indicates the result of the request) and a body
 * (which contains the actual data if the request was successfully executed).
 */

const basePath: BasePath = {
	production: "/api/v2",
	development: "/api/v2",
	test: "/api/v2"
};
const baseUrl: BaseURL = {
	production: new URL(basePath.production, "https://example.com"),
	development: new URL(basePath.development, "https://localhost:3000"),
	test: new URL(basePath.test, "https://localhost:3000")
};
enum EndpointPath {
	AUTH = "/auth",
	ARTICLES = "/articles",
	AUTHORS = "/authors"
}

export const apiConfig = { baseUrl, endpointPath: EndpointPath };
