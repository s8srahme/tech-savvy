import { getEnumObjectWithInitialValue } from "@/utils/helpers";

import { HomeActionStateType, HomeActionType } from "./home.constants";
import type { HomeDataState, HomeReducer, HomeSuccessAction } from "./home.types";

export const initialHomeState = getEnumObjectWithInitialValue(HomeActionType, null) as HomeDataState;

export const homeReducer: HomeReducer = (state: HomeDataState = initialHomeState, action: HomeSuccessAction) => {
	const { type, payload } = action;
	let stateMapping: Partial<HomeDataState> = {};

	switch (type) {
		case HomeActionStateType.RETRIEVE_MOST_CLAPPED_ARTICLES_SUCCESS:
			stateMapping = { [HomeActionType.RETRIEVE_MOST_CLAPPED_ARTICLES]: payload };
			return { ...state, ...stateMapping };
		case HomeActionStateType.RETRIEVE_RECENTLY_RELEASED_ARTICLES_SUCCESS:
			stateMapping = { [HomeActionType.RETRIEVE_RECENTLY_RELEASED_ARTICLES]: payload };
			return { ...state, ...stateMapping };
		case HomeActionStateType.RETRIEVE_TRENDING_ARTICLES_SUCCESS:
			stateMapping = { [HomeActionType.RETRIEVE_TRENDING_ARTICLES]: payload };
			return { ...state, ...stateMapping };
		default:
			return state;
	}
};
