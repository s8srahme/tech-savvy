/**
 * Enums let you define a type with finite amount of values, such that:
 * 	- enum is for logical grouping of your constants, e.g. to use different colors, you make Color enum consist of all
 * 		color values defined
 * 	- entries are called the members of the enum
 *  - each enum member has a name and a value
 *  - part of a member definition that starts with an equals sign and specifies a value is called an initializer
 *	- by default, enums will initialize the first value to 0 and add 1 to each additional value
 *  - trailing commas are allowed and ignored
 *	- values are not likely to change
 *	- only numbers and strings are supported as enum member values
 *	- enums themselves effectively become a union of their member values (resulting an enum type), so TS knows the
 *		exact set of values that exist in the enum itself, i.e. enums can be used to define collections of constants and
 *		have their member values referenced as types as well
 */

/* Articles-level action types (corresponding to CRUD operations) */

// Articles-level action type (used for loading-level reducer)

export enum ArticlesActionType {
	CREATE_ARTICLE = "CREATE_ARTICLE",
	RETRIEVE_ARTICLE = "RETRIEVE_ARTICLE",
	RETRIEVE_MANY_ARTICLES = "RETRIEVE_MANY_ARTICLES",
	UPDATE_ARTICLE = "UPDATE_ARTICLE",
	DELETE_ARTICLE = "DELETE_ARTICLE",
	DELETE_MANY_ARTICLES = "DELETE_MANY_ARTICLES"
}

// Articles-level action state type (used for articles-level reducer and actions)

export enum ArticlesActionStateType {
	CREATE_ARTICLE_REQUEST = "CREATE_ARTICLE_REQUEST",
	CREATE_ARTICLE_SUCCESS = "CREATE_ARTICLE_SUCCESS",
	CREATE_ARTICLE_FAILURE = "CREATE_ARTICLE_FAILURE",
	RETRIEVE_ARTICLE_REQUEST = "RETRIEVE_ARTICLE_REQUEST",
	RETRIEVE_ARTICLE_SUCCESS = "RETRIEVE_ARTICLE_SUCCESS",
	RETRIEVE_ARTICLE_FAILURE = "RETRIEVE_ARTICLE_FAILURE",
	RETRIEVE_MANY_ARTICLES_REQUEST = "RETRIEVE_MANY_ARTICLES_REQUEST",
	RETRIEVE_MANY_ARTICLES_SUCCESS = "RETRIEVE_MANY_ARTICLES_SUCCESS",
	RETRIEVE_MANY_ARTICLES_FAILURE = "RETRIEVE_MANY_ARTICLES_FAILURE",
	UPDATE_ARTICLE_REQUEST = "UPDATE_ARTICLE_REQUEST",
	UPDATE_ARTICLE_SUCCESS = "UPDATE_ARTICLE_SUCCESS",
	UPDATE_ARTICLE_FAILURE = "UPDATE_ARTICLE_FAILURE",
	DELETE_ARTICLE_REQUEST = "DELETE_ARTICLE_REQUEST",
	DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS",
	DELETE_ARTICLE_FAILURE = "DELETE_ARTICLE_FAILURE",
	DELETE_MANY_ARTICLES_REQUEST = "DELETE_MANY_ARTICLES_REQUEST",
	DELETE_MANY_ARTICLES_SUCCESS = "DELETE_MANY_ARTICLES_SUCCESS",
	DELETE_MANY_ARTICLES_FAILURE = "DELETE_MANY_ARTICLES_FAILURE"
}
