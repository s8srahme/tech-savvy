/**
 * Each module (feature) will contain corresponding code and assets necessary to implement a specific functionality
 * within the application, which includes components, services, utilities and any other files required for that feature.
 */

export enum ApplicationModule {
	AUTH = "auth",
	HOME = "home",
	ARTICLES = "articles",
	AUTHORS = "authors",
	ABOUT = "about",
	ME = "me"
}
export enum ApplicationStateExtension {
	ERROR = "error",
	LOADING = "loading"
}
