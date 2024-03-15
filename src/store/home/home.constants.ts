// Action types (corresponding to CRUD operations)

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

// Home-level action type (used for loading-level reducer)

export enum HomeActionType {
	CREATE_TUTORIAL = "CREATE_TUTORIAL",
	RETRIEVE_TUTORIAL = "RETRIEVE_TUTORIAL",
	RETRIEVE_MANY_TUTORIALS = "RETRIEVE_MANY_TUTORIALS",
	UPDATE_TUTORIAL = "UPDATE_TUTORIAL",
	DELETE_TUTORIAL = "DELETE_TUTORIAL",
	DELETE_MANY_TUTORIALS = "DELETE_MANY_TUTORIALS"
}

// Home-level action state type (used for home-level reducer and actions)

export enum HomeActionStateType {
	CREATE_TUTORIAL_REQUEST = "CREATE_TUTORIAL_REQUEST",
	CREATE_TUTORIAL_SUCCESS = "CREATE_TUTORIAL_SUCCESS",
	CREATE_TUTORIAL_FAILURE = "CREATE_TUTORIAL_FAILURE",
	RETRIEVE_TUTORIAL_REQUEST = "RETRIEVE_TUTORIAL_REQUEST",
	RETRIEVE_TUTORIAL_SUCCESS = "RETRIEVE_TUTORIAL_SUCCESS",
	RETRIEVE_TUTORIAL_FAILURE = "RETRIEVE_TUTORIAL_FAILURE",
	RETRIEVE_MANY_TUTORIALS_REQUEST = "RETRIEVE_MANY_TUTORIALS_REQUEST",
	RETRIEVE_MANY_TUTORIALS_SUCCESS = "RETRIEVE_MANY_TUTORIALS_SUCCESS",
	RETRIEVE_MANY_TUTORIALS_FAILURE = "RETRIEVE_MANY_TUTORIALS_FAILURE",
	UPDATE_TUTORIAL_REQUEST = "UPDATE_TUTORIAL_REQUEST",
	UPDATE_TUTORIAL_SUCCESS = "UPDATE_TUTORIAL_SUCCESS",
	UPDATE_TUTORIAL_FAILURE = "UPDATE_TUTORIAL_FAILURE",
	DELETE_TUTORIAL_REQUEST = "DELETE_TUTORIAL_REQUEST",
	DELETE_TUTORIAL_SUCCESS = "DELETE_TUTORIAL_SUCCESS",
	DELETE_TUTORIAL_FAILURE = "DELETE_TUTORIAL_FAILURE",
	DELETE_MANY_TUTORIALS_REQUEST = "DELETE_MANY_TUTORIALS_REQUEST",
	DELETE_MANY_TUTORIALS_SUCCESS = "DELETE_MANY_TUTORIALS_SUCCESS",
	DELETE_MANY_TUTORIALS_FAILURE = "DELETE_MANY_TUTORIALS_FAILURE"
}
