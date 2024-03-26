/**
 * R E D U X  R E D U C E R
 *
 * A reducer is a pure function that receives the current state of the store and an action object as parameters when
 * an action gets triggered or dispatched, and then returns the updated state. It acts as a switch mechanism to
 * facilitate which action you would like to see occur and how to change the state based upon the action type.
 *
 *
 * P U R E  F U N C T I O N
 *
 * A pure function:
 * 	- always returns the same value for the same argument, i.e. for any given input, it must return exactly one
 * 		possible output
 *  - has no side effects, i.e. no mutation of external state (attributes of the program not contained within the
 * 		function, e.g. non-local variables, mutable reference arguments, input/output streams) through its evaluation
 *	- is conceptually similar to mathematical functions
 *	- makes it easier to do formal verifications, aka testing
 *
 *
 * S H A L L O W  &  D E E P  C O P I E S
 *
 * In JavaScript, arrays are not primitives but are instead Array objects and all standard built-in copy operations
 * with any objects create shallow copies, rather than deep copies. A deep copy of an object is a copy whose properties
 * do not share the same references (point to the same underlying values) as those of the source object from which the
 * copy was made. As a result, when you change either the source or the copy, you can be assured you are not causing the
 * other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested
 * properties in the source or the copy may cause the other object to change too.
 *
 * One way to make a deep copy of a JavaScript object (if it can be serialized) is to use JSON.stringify() to convert
 * the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript
 * object.
 *
 *
 * A R R A Y  O P E R A T I O N S
 *
 * Some array methods do not mutate the existing array that the method was called on, but instead return a new array
 * (the copy always happens shallowly). Other methods mutate the array that the method was called on, in which case
 * their return value differs depending on the method. Useful array operations:
 * 	- Array() constructor creates Array objects, initialized with the given element(s) as parameters (except for a
 * 		single integer argument). If the only argument passed to the Array constructor is an integer, this returns a
 * 		new array with its length property set to that number (implies an array of specified length, containing empty
 * 		slots with undefined values).
 * 	- Array.isArray() static method determines whether the passed value is an Array
 * 	- includes() method of Array instances determines whether an array includes a certain value among its entries,
 * 		returning true or false as appropriate. Accepts optional fromIndex parameter, which is a zero-based index at
 * 		which to start searching.
 * 	- some() method of Array instances tests whether at least one element in the array passes the test implemented by
 * 		the provided function. It returns true if it finds an element for which the provided function returns true;
 * 		otherwise returns false. It does not modify the array.
 * 	- every() method of Array instances tests whether all elements in the array pass the test implemented by the
 * 		provided function. It returns a Boolean value.
 * 	- slice() method of Array instances returns a shallow copy of a portion of an array into a new array object
 * 		selected from start to end indices (end not included and negative index counts back from end of array) of the
 * 		original array (which will not be modified).
 *  - structuredClone() method creates a deep clone of a given value (any structured-cloneable type, e.g. array, object
 * 		and more) using the structured clone algorithm. Transferable objects (only) can be transferred rather than
 * 		duplicated in the cloned object, using the transfer property of the options parameter (makes the original object
 * 		unusable). There are few things that do not work with structured clone (e.g. function objects, DOM nodes,
 * 		certain object properties).
 * 	- flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively
 * 	  up to the specified depth. Depth level specifies how deep a nested array structure should be flattened.
 * 	- toReversed() method of Array instances returns a new array with the elements in reversed order
 * 	- toSorted() method of Array instances returns a new array with the elements sorted in ascending order. Optional
 * 		compareFn parameter specifies a function that defines the sort order. If omitted, the array elements are
 * 		converted to strings, then sorted according to each character's Unicode code point value.
 * 	- join() method of Array instances creates and returns a new string by concatenating all of the elements in the
 * 		array, separated by commas or a specified separator string. If the array has only one item, then that item will
 * 		be returned without using the separator. If separator is omitted, the array elements are separated with a comma.
 * 	- push() method of Array instances adds the specified element(s) to the end of an array and returns the new
 * 		length of the array.
 * 	- pop() method of Array instances removes the last element from an array and returns that element.
 * 	- shift() method of Array instances removes the first element from an array and returns that removed element.
 * 	- unshift() method of Array instances adds the specified element(s) to the beginning of an array and returns the
 * 		new length of the array.
 * 	- Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
 * 		An array-like object has indexed access to the elements, a non-negative length property for the number
 * 		of elements in it and lacks built-in methods of arrays. It accepts optional function parameter such that, every
 * 		value to be added to the array is first passed through this function and its return value is added to the array
 * 		instead.
 *
 * for...of statement executes a loop that operates on a sequence of values sourced from an iterable object, i.e.
 * instances of built-ins (such as Array, String, TypedArray, Map, Set, NodeList).
 *
 * spread (...) syntax allows an iterable (e.g. array, string) to be expanded in places where zero or more arguments
 * should be applied one-by-one in a function call's arguments list, or all/some elements from an object or array need
 * to be included in a new array or object. Spread syntax expands an array into its elements, while rest syntax collects
 * multiple elements (condenses) them into a single element. You can use this syntax to:
 * 	- make a shallow copy of an array
 * 	- concatenate an array to the start/end of an existing array
 * 	- override object properties (when properties with identical names are encountered, the property takes the last
 * 		value assigned while remaining in the position it was originally set)
 * 	- conditionally adding values to an array/object literal
 *
 * rest (...) syntax allows you to end a destructuring pattern, which will store all remaining properties of the
 * object or array into a new object or array (must be the last in the pattern and must not have a trailing comma).
 * This syntax also allows a function to accept an indefinite number of arguments as an array.
 *
 * Destructuring assignment syntax is an expression that unpacks values from arrays or properties from objects into
 * distinct variables, such that:
 * 	- each destructured property can have a default value (used when the property is not present or has value
 * 		undefined)
 * 	- you can ignore some/all return values if needed
 * 	- a property can be unpacked from an object and assigned to a variable with a different name than the original
 * 		object property
 * 	- objects passed into function parameters can be unpacked into variables (which may then be accessed within the
 * 		function body)
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm} for further
 * information.
 *
 *
 * J S D o c
 *
 * JSDoc is an API documentation generator for JavaScript:
 * 	- VSCode supports JSDoc tags, so you can add documentation comments directly to your source code, right alongside
 * 		the code itself
 * 	- see tag allows you to refer to another symbol/resource (like modules, namespaces, classes, methods, method
 * 		method parameters, etc.) that may be related to the one being documented. You can provide either a symbol's
 * 		namepath or free-form text description. If you provide a namepath, it is automatically converted to a link.
 * 	- link inline tag creates a link to the namepath or URL that you specify, where you can also provide link text. If
 * 		you do not provide any link text, the namepath or URL is used as the link text.
 *
 *
 * S E R I A L I Z A T I O N
 *
 * Serialization is the process whereby an object or data structure is translated into a format suitable for transfer
 * over a network, or storage (e.g. in an array buffer or file format). You can serialize an object to a JSON string
 * by calling the function JSON.stringify(), which optionally accepts a replacer function to replace values or a
 * replacer array to include only the specified properties, and a space parameter to control spacing in the final
 * string.
 *
 * Many JavaScript objects are not serializable at all, e.g. functions (with closures), Symbols, etc. Calling
 * JSON.stringify() to serialize the objects in those cases will fail. So there is no way to make deep copies of such
 * objects.
 *
 * JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the
 * string. An optional reviver function can be provided to perform a transformation on the resulting object before it
 * is returned. Returns Object, Array, string, number, boolean or null value corresponding to the given JSON text.
 *
 * Date objects are not allowed in JSON. If you need to include a date, write it as a string in your JSON string and
 * convert it back into a date object later. Alternatively, you can use the second parameter of the JSON.parse()
 * function called reviver which checks each property before returning the value.
 */

import { getEnumObjectWithInitialValue } from "@/utils/helpers";

import { ArticlesActionStateType, ArticlesActionType } from "./articles.constants";
import type { ArticlesDataState, ArticlesReducer, ArticlesSuccessAction } from "./articles.types";

export const initialArticlesState = getEnumObjectWithInitialValue(ArticlesActionType, null) as ArticlesDataState;

export const articlesReducer: ArticlesReducer = (
	state: ArticlesDataState = initialArticlesState,
	action: ArticlesSuccessAction
) => {
	const { type, payload } = action;
	let stateMapping: Partial<ArticlesDataState> = {};

	switch (type) {
		/**
		 * NOTE: You could use {} block to create block scope with case, such that
		 * 			 you limit the scope of a variable to your current case.
		 * */
		case ArticlesActionStateType.CREATE_ARTICLE_SUCCESS: {
			// Wrap the keys in enum to evaluate their value before using them as keys in an object
			stateMapping = { [ArticlesActionType.CREATE_ARTICLE]: payload };
			return { ...state, ...stateMapping };
		}
		case ArticlesActionStateType.RETRIEVE_MANY_ARTICLES_SUCCESS:
			stateMapping = { [ArticlesActionType.RETRIEVE_MANY_ARTICLES]: payload };
			return { ...state, ...stateMapping };
		case ArticlesActionStateType.RETRIEVE_ARTICLE_SUCCESS:
			stateMapping = { [ArticlesActionType.RETRIEVE_ARTICLE]: payload };
			return { ...state, ...stateMapping };
		case ArticlesActionStateType.UPDATE_ARTICLE_SUCCESS:
			stateMapping = { [ArticlesActionType.UPDATE_ARTICLE]: payload };
			return { ...state, ...stateMapping };
		case ArticlesActionStateType.DELETE_ARTICLE_SUCCESS:
			stateMapping = { [ArticlesActionType.DELETE_ARTICLE]: payload };
			return { ...state, ...stateMapping };
		case ArticlesActionStateType.DELETE_MANY_ARTICLES_SUCCESS:
			stateMapping = { [ArticlesActionType.DELETE_MANY_ARTICLES]: payload };
			return { ...state, ...stateMapping };
		default:
			return state;
	}
};
