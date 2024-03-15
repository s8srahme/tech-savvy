/**
 * Store holds your entire application's state, which is simply a plain JavaScript object that contains key-value pairs
 * for any application module state that you would like to store.
 */

import { composeWithDevTools } from "@redux-devtools/extension";
import { Store, applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

import { initialRootState, rootReducer } from "./store.reducers";
import { RootAction, RootState } from "./store.types";

const middlewares = [thunk]; // Bootstrap required middlewares

export const store: Store<RootState, RootAction> = createStore<RootState, RootAction>(
	rootReducer, // Combined reducers
	initialRootState, // Initial state must be an object with the same shape as RootReducer keys
	composeWithDevTools(applyMiddleware(...middlewares)) // Store enhancer to add third-party capabilities, e.g. middlewares
);
