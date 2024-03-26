import { getEnumObjectWithInitialValue } from "utils/helpers";

import { LoadingActionType } from "./loading.constants";
import type { LoadingAction, LoadingReducer, LoadingState } from "./loading.types";

/**
 * exec() method of RegExp instances searches for a match between the regular expression and a specified string. Returns
 * null if the match fails or an array if the match succeeds. The returned array has the matched text (i.e. match for
 * the whole regexp) as the first item, then one item for each capturing group (i.e. part of a pattern enclosed in
 * parentheses) of the matched text and some additional properties.
 *
 * When global flag is set, JavaScript RegExp objects store a lastIndex from the previous match. Using this internally,
 * exec() can be used to iterate over multiple matches in a string of text (with capture groups, as opposed to getting
 * just the matching strings with match() method).
 */

export const initialLoadingState: LoadingState = getEnumObjectWithInitialValue(LoadingActionType, false);

export const loadingReducer: LoadingReducer = (state: LoadingState = initialLoadingState, action: LoadingAction) => {
	const { type } = action;
	const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

	// If not a *_REQUEST/*_SUCCESS/*_FAILURE action type, then you can ignore it
	if (!matches) return state;

	const [, requestName, requestState] = matches;
	return {
		...state,
		// Store whether a request is happening at the moment or not, i.e. it will be true when receiving
		// *_REQUEST action type and false when receiving *_SUCCESS/*_FAILURE action types (handling reset)
		[requestName]: requestState === "REQUEST"
	};
};
