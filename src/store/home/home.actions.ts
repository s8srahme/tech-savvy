import { ResponseStatus } from "@/api/axios/axios.constants";
import { RequestParam } from "@/api/axios/axios.types";
import { articleService } from "@/api/services";
// TODO: Refactor exports to avoid cyclic dependencies
import { getErrorMessage } from "@/utils/helpers";

import * as homeHelpers from "./home.helpers";
import type {
	RetrieveMostClappedArticlesAction,
	RetrieveRecentlyReleasedArticlesAction,
	RetrieveTrendingArticlesAction
} from "./home.types";
import type { ActionCreatorType } from "../store.types";

export const retrieveTrendingArticles: ActionCreatorType<RetrieveTrendingArticlesAction> = (params: RequestParam) => {
	return async (dispatch) => {
		const { request, success, failure } = homeHelpers.retrieveTrending;
		dispatch(request());
		try {
			const { data } = await articleService.retrieveMany(params);
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) }));
		}
	};
};

export const retrieveMostClappedArticles: ActionCreatorType<RetrieveMostClappedArticlesAction> = (
	params: RequestParam
) => {
	return async (dispatch) => {
		const { request, success, failure } = homeHelpers.retrieveMostClapped;
		dispatch(request());
		try {
			const { data } = await articleService.retrieveMany(params);
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) }));
		}
	};
};

export const retrieveRecentlyReleasedArticles: ActionCreatorType<RetrieveRecentlyReleasedArticlesAction> = (
	params: RequestParam
) => {
	return async (dispatch) => {
		const { request, success, failure } = homeHelpers.retrieveRecentlyReleased;
		dispatch(request());
		try {
			const { data } = await articleService.retrieveMany(params);
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) }));
		}
	};
};
