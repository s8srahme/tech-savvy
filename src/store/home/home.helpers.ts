import { GETManySuccessResponse } from "@/api/axios/axios.types";
import type { ArticleResponsePayload } from "@/api/services";

import { HomeActionStateType } from "./home.constants";
import type {
	RetrieveMostClappedArticlesFailureAction,
	RetrieveMostClappedArticlesRequestAction,
	RetrieveMostClappedArticlesSuccessAction,
	RetrieveRecentlyReleasedArticlesFailureAction,
	RetrieveRecentlyReleasedArticlesRequestAction,
	RetrieveRecentlyReleasedArticlesSuccessAction,
	RetrieveTrendingArticlesFailureAction,
	RetrieveTrendingArticlesRequestAction,
	RetrieveTrendingArticlesSuccessAction
} from "./home.types";
import type { FailureActionError } from "../store.types";

export const retrieveTrending = {
	request: (): RetrieveTrendingArticlesRequestAction => ({
		type: HomeActionStateType.RETRIEVE_TRENDING_ARTICLES_REQUEST
	}),
	success: (data: GETManySuccessResponse<ArticleResponsePayload[]>): RetrieveTrendingArticlesSuccessAction => ({
		type: HomeActionStateType.RETRIEVE_TRENDING_ARTICLES_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): RetrieveTrendingArticlesFailureAction => ({
		type: HomeActionStateType.RETRIEVE_TRENDING_ARTICLES_FAILURE,
		payload: error
	})
};

export const retrieveRecentlyReleased = {
	request: (): RetrieveRecentlyReleasedArticlesRequestAction => ({
		type: HomeActionStateType.RETRIEVE_RECENTLY_RELEASED_ARTICLES_REQUEST
	}),
	success: (data: GETManySuccessResponse<ArticleResponsePayload[]>): RetrieveRecentlyReleasedArticlesSuccessAction => ({
		type: HomeActionStateType.RETRIEVE_RECENTLY_RELEASED_ARTICLES_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): RetrieveRecentlyReleasedArticlesFailureAction => ({
		type: HomeActionStateType.RETRIEVE_RECENTLY_RELEASED_ARTICLES_FAILURE,
		payload: error
	})
};

export const retrieveMostClapped = {
	request: (): RetrieveMostClappedArticlesRequestAction => ({
		type: HomeActionStateType.RETRIEVE_MOST_CLAPPED_ARTICLES_REQUEST
	}),
	success: (data: GETManySuccessResponse<ArticleResponsePayload[]>): RetrieveMostClappedArticlesSuccessAction => ({
		type: HomeActionStateType.RETRIEVE_MOST_CLAPPED_ARTICLES_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): RetrieveMostClappedArticlesFailureAction => ({
		type: HomeActionStateType.RETRIEVE_MOST_CLAPPED_ARTICLES_FAILURE,
		payload: error
	})
};
