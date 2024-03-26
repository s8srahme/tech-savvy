import {
	DELETESuccessResponse,
	GETManySuccessResponse,
	GETSuccessResponse,
	PATCHSuccessResponse,
	POSTSuccessResponse
} from "@/api/axios/axios.types";
import type { ArticleResponsePayload } from "@/api/services";

import { ArticlesActionStateType } from "./articles.constants";
import type {
	CreateArticleFailureAction,
	CreateArticleRequestAction,
	CreateArticleSuccessAction,
	DeleteArticleFailureAction,
	DeleteArticleRequestAction,
	DeleteArticleSuccessAction,
	DeleteManyArticlesFailureAction,
	DeleteManyArticlesRequestAction,
	DeleteManyArticlesSuccessAction,
	RetrieveArticleFailureAction,
	RetrieveArticleRequestAction,
	RetrieveArticleSuccessAction,
	RetrieveManyArticlesFailureAction,
	RetrieveManyArticlesRequestAction,
	RetrieveManyArticlesSuccessAction,
	UpdateArticleFailureAction,
	UpdateArticleRequestAction,
	UpdateArticleSuccessAction
} from "./articles.types";
import type { FailureActionError } from "../store.types";

export const createOne = {
	request: (): CreateArticleRequestAction => ({
		// The value can only be set to one of the members of the enum
		type: ArticlesActionStateType.CREATE_ARTICLE_REQUEST
	}),
	success: (data: POSTSuccessResponse): CreateArticleSuccessAction => ({
		type: ArticlesActionStateType.CREATE_ARTICLE_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): CreateArticleFailureAction => ({
		type: ArticlesActionStateType.CREATE_ARTICLE_FAILURE,
		payload: error
	})
};

export const retrieveOne = {
	request: (): RetrieveArticleRequestAction => ({
		type: ArticlesActionStateType.RETRIEVE_ARTICLE_REQUEST
	}),
	success: (data: GETSuccessResponse<ArticleResponsePayload>): RetrieveArticleSuccessAction => ({
		type: ArticlesActionStateType.RETRIEVE_ARTICLE_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): RetrieveArticleFailureAction => ({
		type: ArticlesActionStateType.RETRIEVE_ARTICLE_FAILURE,
		payload: error
	})
};

export const retrieveMany = {
	request: (): RetrieveManyArticlesRequestAction => ({
		type: ArticlesActionStateType.RETRIEVE_MANY_ARTICLES_REQUEST
	}),
	success: (data: GETManySuccessResponse<ArticleResponsePayload[]>): RetrieveManyArticlesSuccessAction => ({
		type: ArticlesActionStateType.RETRIEVE_MANY_ARTICLES_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): RetrieveManyArticlesFailureAction => ({
		type: ArticlesActionStateType.RETRIEVE_MANY_ARTICLES_FAILURE,
		payload: error
	})
};

export const updateOne = {
	request: (): UpdateArticleRequestAction => ({
		type: ArticlesActionStateType.UPDATE_ARTICLE_REQUEST
	}),
	success: (data: PATCHSuccessResponse<ArticleResponsePayload>): UpdateArticleSuccessAction => ({
		type: ArticlesActionStateType.UPDATE_ARTICLE_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): UpdateArticleFailureAction => ({
		type: ArticlesActionStateType.UPDATE_ARTICLE_FAILURE,
		payload: error
	})
};

export const deleteOne = {
	request: (): DeleteArticleRequestAction => ({
		type: ArticlesActionStateType.DELETE_ARTICLE_REQUEST
	}),
	success: (data: DELETESuccessResponse): DeleteArticleSuccessAction => ({
		type: ArticlesActionStateType.DELETE_ARTICLE_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): DeleteArticleFailureAction => ({
		type: ArticlesActionStateType.DELETE_ARTICLE_FAILURE,
		payload: error
	})
};

export const deleteAll = {
	request: (): DeleteManyArticlesRequestAction => ({
		type: ArticlesActionStateType.DELETE_MANY_ARTICLES_REQUEST
	}),
	success: (data: DELETESuccessResponse): DeleteManyArticlesSuccessAction => ({
		type: ArticlesActionStateType.DELETE_MANY_ARTICLES_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): DeleteManyArticlesFailureAction => ({
		type: ArticlesActionStateType.DELETE_MANY_ARTICLES_FAILURE,
		payload: error
	})
};
