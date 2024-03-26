/**
 * Redux works in a synchronous way, so each action gets triggered in a sequence. If you would like to run an
 * asynchronous task (e.g. fetching data from an API), you would need to use an additional library called
 * redux-thunk (fyi, thunk is a programming concept where a function is used to delay the evaluation/calculation of an
 * operation).
 *
 * This library allows you to process asynchronous code, such that every time an action gets triggered,
 * it goes through the redux-thunk middleware first and checks if the action is returning an object (actions) or a
 * function (action creators). If the action is returning a function (recognize that it is an asynchronous process),
 * it will insert a dispatch argument in your function, which you can use to dispatch regular synchronous actions
 * (i.e. a particular action type that was set in your reducer) inside the function's body once the asynchronous
 * operations have been completed.
 *
 * You might be wondering why there are so many dispatches and action types. It is pretty much a convention to do
 * three action types when you are doing an API call. The _REQUEST type is used to set the loader state to true. The
 * _SUCCESS type is used to update the state from the data received from the API. The _FAILURE type is used to indicate
 * that there was an error in the call.
 */

import { ResponseStatus } from "@/api/axios/axios.constants";
import { RequestParam } from "@/api/axios/axios.types";
import { ArticleRequestPayload, articleService } from "@/api/services";
// TODO: Refactor exports to avoid cyclic dependencies
import { getErrorMessage } from "@/utils/helpers";

import * as articleHelpers from "./articles.helpers";
import {
	CreateArticleAction,
	DeleteArticleAction,
	DeleteManyArticlesAction,
	RetrieveArticleAction,
	RetrieveManyArticlesAction,
	UpdateArticleAction
} from "./articles.types";
import { ActionCreatorType } from "../store.types";

export const createArticle: ActionCreatorType<CreateArticleAction> = (article: ArticleRequestPayload) => {
	// If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise
	return async (dispatch) => {
		/**
		 * The function returned by an asynchronous action creator with redux-thunk also
		 * receives the store's getState method, so that current store values can be read
		 */
		// console.log(getState());

		const { request, success, failure } = articleHelpers.createOne;
		// Dispatch method dispatches an action, consequently triggering a state change
		dispatch(request());
		try {
			const { data } = await articleService.createOne(article);
			// Handles server-side error
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) })); // Handles client-side error
		}
	};
};

export const retrieveArticles: ActionCreatorType<RetrieveManyArticlesAction> = (params: RequestParam) => {
	return async (dispatch) => {
		const { request, success, failure } = articleHelpers.retrieveMany;
		dispatch(request());
		try {
			const { data } = await articleService.retrieveMany(params);
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) }));
		}
	};
};

export const retrieveArticle: ActionCreatorType<RetrieveArticleAction> = (id: string) => {
	return async (dispatch) => {
		const { request, success, failure } = articleHelpers.retrieveOne;
		dispatch(request());
		try {
			const { data } = await articleService.retrieveOne(id);
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) }));
		}
	};
};

export const updateArticle: ActionCreatorType<UpdateArticleAction> = (id: string, article: ArticleRequestPayload) => {
	return async (dispatch) => {
		const { request, success, failure } = articleHelpers.updateOne;
		dispatch(request());
		try {
			const { data } = await articleService.updateOne(id, article);
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) }));
		}
	};
};

export const deleteArticle: ActionCreatorType<DeleteArticleAction> = (id: string) => {
	return async (dispatch) => {
		const { request, success, failure } = articleHelpers.deleteOne;
		dispatch(request());
		try {
			const { data } = await articleService.deleteOne(id);
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) }));
		}
	};
};

export const deleteArticles: ActionCreatorType<DeleteManyArticlesAction> = (ids: string[]) => {
	return async (dispatch) => {
		const { request, success, failure } = articleHelpers.deleteAll;
		dispatch(request());
		try {
			const { data } = await articleService.deleteAll(ids);
			dispatch(data.status === ResponseStatus.SUCCESS ? success(data) : failure(data));
		} catch (error) {
			dispatch(failure({ message: getErrorMessage(error) }));
		}
	};
};
