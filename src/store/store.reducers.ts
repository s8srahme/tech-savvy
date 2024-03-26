/**
 * Because there is only a single store in a Redux application, you use reducer composition instead of many stores to
 * split data handling logic. Whenever an action is dispatched, Redux will update each top-level state object
 * property using the reducer with the matching name. It is important that the names match exactly so that the reducer
 * can act on the corresponding RootState type property.
 */

import { Reducer, combineReducers } from "redux";

import { articlesReducer, initialArticlesState } from "./articles/articles.reducers";
import { errorReducer, initialErrorState } from "./error/error.reducers";
import { homeReducer, initialHomeState } from "./home/home.reducers";
import { initialLoadingState, loadingReducer } from "./loading/loading.reducers";
import { RootAction, RootReducer, RootState } from "./store.types";

export const initialRootState: RootState = {
	loading: initialLoadingState,
	error: initialErrorState,
	home: initialHomeState,
	articles: initialArticlesState
};

// Make an object whose values correspond to different reducer functions that need to be combined into one
const reducers: RootReducer = {
	home: homeReducer,
	loading: loadingReducer,
	error: errorReducer,
	articles: articlesReducer
};

/**
 * Create a single reducer function that invokes every reducer inside the passed object and builds a single state
 * object with the same shape. {} is the type of state (PreloadedState) consumed by this reducer the first time it
 * is called.
 */
export const rootReducer: Reducer<RootState, RootAction, {}> = combineReducers<RootReducer>(reducers);
