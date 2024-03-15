import { getEnumObjectWithInitialValue } from "utils/helpers";

import { ErrorActionType } from "./error.constants";
import { ErrorAction, ErrorReducer, ErrorState } from "./error.types";

// TS infers (if not specified) generic types from function arguments to dynamically map the types to the actual
// function implementation
export const initialErrorState: ErrorState = getEnumObjectWithInitialValue(ErrorActionType, null);

export const errorReducer: ErrorReducer = (state: ErrorState = initialErrorState, action: ErrorAction) => {
	const { type, payload } = action;
	const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);
	// There is no need to match for *_SUCCESS action type as *_FAILURE action type will handle the reset

	// If not a *_REQUEST/*_FAILURE action type, then you can ignore it
	if (!matches) return state;

	const [, requestName, requestState] = matches;
	return {
		...state,
		// Store either error payload or nothing, i.e. it will store error object when receiving
		// *_FAILURE action type and clear error object by setting to null when receiving *_REQUEST
		[requestName]: requestState === "FAILURE" ? payload : null
	};
};
