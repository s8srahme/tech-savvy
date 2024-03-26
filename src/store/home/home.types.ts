import { Reducer } from "redux";

import type { GETManySuccessResponse, SuccessResponse } from "@/api/axios/axios.types";
import { Article } from "@/api/services";

import { HomeActionStateType as HAST, HomeActionType } from "./home.constants";
import {
	DataField,
	ErrorField,
	FailureAction,
	FailureActionError,
	LoadingField,
	RequestAction,
	SuccessAction
} from "../store.types";

/* Home-level reducer type */

export type HomeReducer = Reducer<HomeDataState, HomeSuccessAction>;

/* Home-level state object types */

export type HomeDataState = DataField<HomeActionType, SuccessResponse<Article | Article[]>>;
export type HomeLoadingState = LoadingField<HomeActionType>;
export type HomeErrorState = ErrorField<HomeActionType, FailureActionError>;

/* Success action object types */

/* eslint-disable prettier/prettier */
export type RetrieveTrendingArticlesSuccessAction = SuccessAction<
	HAST.RETRIEVE_TRENDING_ARTICLES_SUCCESS,
	GETManySuccessResponse<Article[]>
>;
export type RetrieveMostClappedArticlesSuccessAction = SuccessAction<
	HAST.RETRIEVE_MOST_CLAPPED_ARTICLES_SUCCESS,
	GETManySuccessResponse<Article[]>
>;
export type RetrieveRecentlyReleasedArticlesSuccessAction = SuccessAction<
	HAST.RETRIEVE_RECENTLY_RELEASED_ARTICLES_SUCCESS,
	GETManySuccessResponse<Article[]>
>;
/* eslint-enable prettier/prettier */

// Discriminating union type of all home-level success actions (used for home-level reducer)
export type HomeSuccessAction =
	| RetrieveTrendingArticlesSuccessAction
	| RetrieveMostClappedArticlesSuccessAction
	| RetrieveRecentlyReleasedArticlesSuccessAction;

/* Request action object types */

export type RetrieveTrendingArticlesRequestAction = RequestAction<HAST.RETRIEVE_TRENDING_ARTICLES_REQUEST>;
export type RetrieveMostClappedArticlesRequestAction = RequestAction<HAST.RETRIEVE_MOST_CLAPPED_ARTICLES_REQUEST>;
export type RetrieveRecentlyReleasedArticlesRequestAction =
	RequestAction<HAST.RETRIEVE_RECENTLY_RELEASED_ARTICLES_REQUEST>;

// Discriminating union type of all home-level request actions (used for loading-level reducer)
export type HomeRequestAction =
	| RetrieveTrendingArticlesRequestAction
	| RetrieveMostClappedArticlesRequestAction
	| RetrieveRecentlyReleasedArticlesRequestAction;

/* Failure action object types */

export type RetrieveTrendingArticlesFailureAction = FailureAction<HAST.RETRIEVE_TRENDING_ARTICLES_FAILURE>;
export type RetrieveMostClappedArticlesFailureAction = FailureAction<HAST.RETRIEVE_MOST_CLAPPED_ARTICLES_FAILURE>;
export type RetrieveRecentlyReleasedArticlesFailureAction =
	FailureAction<HAST.RETRIEVE_RECENTLY_RELEASED_ARTICLES_FAILURE>;

// Discriminating union type of all home-level failure actions (used for error-level reducer)
export type HomeFailureAction =
	| RetrieveTrendingArticlesFailureAction
	| RetrieveMostClappedArticlesFailureAction
	| RetrieveRecentlyReleasedArticlesFailureAction;

/* Action object types (used for home-level action creators) */

export type RetrieveTrendingArticlesAction =
	| RetrieveTrendingArticlesSuccessAction
	| RetrieveTrendingArticlesRequestAction
	| RetrieveTrendingArticlesFailureAction;
export type RetrieveMostClappedArticlesAction =
	| RetrieveMostClappedArticlesSuccessAction
	| RetrieveMostClappedArticlesRequestAction
	| RetrieveMostClappedArticlesFailureAction;
export type RetrieveRecentlyReleasedArticlesAction =
	| RetrieveRecentlyReleasedArticlesSuccessAction
	| RetrieveRecentlyReleasedArticlesRequestAction
	| RetrieveRecentlyReleasedArticlesFailureAction;

// Discriminating union type of all home-level request, success and failure actions (used for root-level reducer)
export type HomeAction = HomeSuccessAction | HomeRequestAction | HomeFailureAction;
