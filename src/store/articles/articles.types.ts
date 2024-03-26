import { Reducer } from "redux";

import {
	DELETESuccessResponse,
	GETManySuccessResponse,
	GETSuccessResponse,
	PATCHSuccessResponse,
	POSTSuccessResponse,
	SuccessResponse
} from "@/api/axios/axios.types";
import { Article } from "@/api/services";

import { ArticlesActionStateType as AAST, ArticlesActionType } from "./articles.constants";
import {
	DataField,
	ErrorField,
	FailureAction,
	FailureActionError,
	LoadingField,
	RequestAction,
	SuccessAction
} from "../store.types";

/**
 * Actions are payloads (objects) of information which send data to the store. An action must have a type key, which
 * indicates the type of action being performed and makes a particular action unique.
 */

// Articles-level reducer type

export type ArticlesReducer = Reducer<ArticlesDataState, ArticlesSuccessAction>;

// Articles-level state object types

export type ArticlesDataState = DataField<ArticlesActionType, SuccessResponse<Article | Article[]>>;
export type ArticlesLoadingState = LoadingField<ArticlesActionType>;
export type ArticlesErrorState = ErrorField<ArticlesActionType, FailureActionError>;

// Success action object types

/**
 * Setting the type to a specific enum member. In this case, the type can only be assigned to CREATE_ARTICLE_SUCCESS
 * member of the enum. Payload is the data you pass in order to change the state that resides in store.
 */
export type CreateArticleSuccessAction = SuccessAction<AAST.CREATE_ARTICLE_SUCCESS, POSTSuccessResponse>;
export type RetrieveArticleSuccessAction = SuccessAction<AAST.RETRIEVE_ARTICLE_SUCCESS, GETSuccessResponse<Article>>;
/* eslint-disable prettier/prettier */
export type RetrieveManyArticlesSuccessAction = SuccessAction<
	AAST.RETRIEVE_MANY_ARTICLES_SUCCESS,
	GETManySuccessResponse<Article[]>
>;
/* eslint-enable prettier/prettier */
export type UpdateArticleSuccessAction = SuccessAction<AAST.UPDATE_ARTICLE_SUCCESS, PATCHSuccessResponse<Article>>;
export type DeleteArticleSuccessAction = SuccessAction<AAST.DELETE_ARTICLE_SUCCESS, DELETESuccessResponse>;
export type DeleteManyArticlesSuccessAction = SuccessAction<AAST.DELETE_MANY_ARTICLES_SUCCESS, DELETESuccessResponse>;

// Request action object types

export type CreateArticleRequestAction = RequestAction<AAST.CREATE_ARTICLE_REQUEST>;
export type RetrieveArticleRequestAction = RequestAction<AAST.RETRIEVE_ARTICLE_REQUEST>;
export type RetrieveManyArticlesRequestAction = RequestAction<AAST.RETRIEVE_MANY_ARTICLES_REQUEST>;
export type UpdateArticleRequestAction = RequestAction<AAST.UPDATE_ARTICLE_REQUEST>;
export type DeleteArticleRequestAction = RequestAction<AAST.DELETE_ARTICLE_REQUEST>;
export type DeleteManyArticlesRequestAction = RequestAction<AAST.DELETE_MANY_ARTICLES_REQUEST>;

// Failure action object types

export type CreateArticleFailureAction = FailureAction<AAST.CREATE_ARTICLE_FAILURE>;
export type RetrieveArticleFailureAction = FailureAction<AAST.RETRIEVE_ARTICLE_FAILURE>;
export type RetrieveManyArticlesFailureAction = FailureAction<AAST.RETRIEVE_MANY_ARTICLES_FAILURE>;
export type UpdateArticleFailureAction = FailureAction<AAST.UPDATE_ARTICLE_FAILURE>;
export type DeleteArticleFailureAction = FailureAction<AAST.DELETE_ARTICLE_FAILURE>;
export type DeleteManyArticlesFailureAction = FailureAction<AAST.DELETE_MANY_ARTICLES_FAILURE>;

// Action object types (used for articles-level action creators)

export type CreateArticleAction = CreateArticleSuccessAction | CreateArticleRequestAction | CreateArticleFailureAction;
export type RetrieveArticleAction =
	| RetrieveArticleSuccessAction
	| RetrieveArticleRequestAction
	| RetrieveArticleFailureAction;
export type RetrieveManyArticlesAction =
	| RetrieveManyArticlesSuccessAction
	| RetrieveManyArticlesRequestAction
	| RetrieveManyArticlesFailureAction;
export type UpdateArticleAction = UpdateArticleSuccessAction | UpdateArticleRequestAction | UpdateArticleFailureAction;
export type DeleteArticleAction = DeleteArticleSuccessAction | DeleteArticleRequestAction | DeleteArticleFailureAction;
export type DeleteManyArticlesAction =
	| DeleteManyArticlesSuccessAction
	| DeleteManyArticlesRequestAction
	| DeleteManyArticlesFailureAction;

/**
 * Discriminated unions are basically union types with a tag, i.e. they are used to hold a value that could take on
 * different literal types. To make a discriminated union type, use a common property across each of your types. This
 * property's only job is to distinguish/discriminate between the types and will serve as an ID. Any time you create an
 * instance of an Action, you have to supply the single correct value for the type (do not worry about forgetting
 * because TypeScript will remind you).
 */

// Discriminating union type of all articles-level success actions (used for articles-level reducer)
export type ArticlesSuccessAction =
	| RetrieveManyArticlesSuccessAction
	| RetrieveArticleSuccessAction
	| CreateArticleSuccessAction
	| UpdateArticleSuccessAction
	| DeleteArticleSuccessAction
	| DeleteManyArticlesSuccessAction;

// Discriminating union type of all articles-level request actions (used for loading-level reducer)
export type ArticlesRequestAction =
	| CreateArticleRequestAction
	| UpdateArticleRequestAction
	| RetrieveArticleRequestAction
	| RetrieveManyArticlesRequestAction
	| DeleteArticleRequestAction
	| DeleteManyArticlesRequestAction;

// Discriminating union type of all articles-level failure actions (used for error-level reducer)
export type ArticlesFailureAction =
	| CreateArticleFailureAction
	| UpdateArticleFailureAction
	| RetrieveArticleFailureAction
	| RetrieveManyArticlesFailureAction
	| DeleteArticleFailureAction
	| DeleteManyArticlesFailureAction;

// Discriminating union type of all articles-level request, success and failure actions (used for root-level reducer)
export type ArticlesAction = ArticlesSuccessAction | ArticlesRequestAction | ArticlesFailureAction;
