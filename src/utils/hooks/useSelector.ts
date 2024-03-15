/**
 * useSelector Hook takes in a function argument that takes the Redux store state as argument,
 * returns the required data (part of the state that you want) and stores the returned value as a single variable. It
 * subscribes to the Redux store, runs your provided function after each dispatch and rerenders the component based
 * on updates to the state.
 *
 * useDispatch Hook enables you to dispatch any action to the store by adding the action (via calling action creator)
 * as an argument to the returned dispatch function.
 */

import { useSelector as _useSelector } from "react-redux";

import { RootState } from "@/store/store.types";

export const useSelector = <T = unknown>(selectorFn: (rootState: RootState) => T): T => {
	// To add types to useSelector Hook, pass it a generic type of your entire state object and the expected returned
	// value type. Since you do not know what type comes out from the selectorFn callback, you add store root type to _
	// useSelector Hook's return type and forward the store state as selected state.
	return selectorFn(_useSelector<RootState, RootState>((s) => s));
};
