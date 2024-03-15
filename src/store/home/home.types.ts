import { Reducer } from "redux";

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

/**
 * Actions are payloads (objects) of information which send data to the store. An action must have a type key, which
 * indicates the type of action being performed and makes a particular action unique.
 */

// Home-level reducer type

export type HomeReducer = Reducer<HomeDataState, HomeSuccessAction>;

// Home-level state object types

export type HomeDataState = DataField<HomeActionType, SuccessResponse<User | User[]>>;
export type HomeLoadingState = LoadingField<HomeActionType>;
export type HomeErrorState = ErrorField<HomeActionType, FailureActionError>;

// Success action object types

// Setting the type to a specific enum member. In this case, the type can only be assigned to CREATE_TUTORIAL_SUCCESS
// member of the enum. Payload is the data you pass in order to change the state that resides in store.
export type CreateTutorialSuccessAction = SuccessAction<HAST.CREATE_TUTORIAL_SUCCESS, POSTSuccessResponse>;
export type RetrieveTutorialSuccessAction = SuccessAction<HAST.RETRIEVE_TUTORIAL_SUCCESS, GETSuccessResponse<User>>;
/* eslint-disable prettier/prettier */
export type RetrieveManyTutorialsSuccessAction = SuccessAction<
	HAST.RETRIEVE_MANY_TUTORIALS_SUCCESS,
	GETManySuccessResponse<User[]>
>;
/* eslint-enable prettier/prettier */
export type UpdateTutorialSuccessAction = SuccessAction<HAST.UPDATE_TUTORIAL_SUCCESS, PATCHSuccessResponse<User>>;
export type DeleteTutorialSuccessAction = SuccessAction<HAST.DELETE_TUTORIAL_SUCCESS, DELETESuccessResponse>;
export type DeleteManyTutorialsSuccessAction = SuccessAction<HAST.DELETE_MANY_TUTORIALS_SUCCESS, DELETESuccessResponse>;

// Request action object types

export type CreateTutorialRequestAction = RequestAction<HAST.CREATE_TUTORIAL_REQUEST>;
export type RetrieveTutorialRequestAction = RequestAction<HAST.RETRIEVE_TUTORIAL_REQUEST>;
export type RetrieveManyTutorialsRequestAction = RequestAction<HAST.RETRIEVE_MANY_TUTORIALS_REQUEST>;
export type UpdateTutorialRequestAction = RequestAction<HAST.UPDATE_TUTORIAL_REQUEST>;
export type DeleteTutorialRequestAction = RequestAction<HAST.DELETE_TUTORIAL_REQUEST>;
export type DeleteManyTutorialsRequestAction = RequestAction<HAST.DELETE_MANY_TUTORIALS_REQUEST>;

// Failure action object types

export type CreateTutorialFailureAction = FailureAction<HAST.CREATE_TUTORIAL_FAILURE>;
export type RetrieveTutorialFailureAction = FailureAction<HAST.RETRIEVE_TUTORIAL_FAILURE>;
export type RetrieveManyTutorialsFailureAction = FailureAction<HAST.RETRIEVE_MANY_TUTORIALS_FAILURE>;
export type UpdateTutorialFailureAction = FailureAction<HAST.UPDATE_TUTORIAL_FAILURE>;
export type DeleteTutorialFailureAction = FailureAction<HAST.DELETE_TUTORIAL_FAILURE>;
export type DeleteManyTutorialsFailureAction = FailureAction<HAST.DELETE_MANY_TUTORIALS_FAILURE>;

// Action object types (used for home-level action creators)

export type CreateTutorialAction =
	| CreateTutorialSuccessAction
	| CreateTutorialRequestAction
	| CreateTutorialFailureAction;
export type RetrieveTutorialAction =
	| RetrieveTutorialSuccessAction
	| RetrieveTutorialRequestAction
	| RetrieveTutorialFailureAction;
export type RetrieveManyTutorialsAction =
	| RetrieveManyTutorialsSuccessAction
	| RetrieveManyTutorialsRequestAction
	| RetrieveManyTutorialsFailureAction;
export type UpdateTutorialAction =
	| UpdateTutorialSuccessAction
	| UpdateTutorialRequestAction
	| UpdateTutorialFailureAction;
export type DeleteTutorialAction =
	| DeleteTutorialSuccessAction
	| DeleteTutorialRequestAction
	| DeleteTutorialFailureAction;
export type DeleteManyTutorialsAction =
	| DeleteManyTutorialsSuccessAction
	| DeleteManyTutorialsRequestAction
	| DeleteManyTutorialsFailureAction;

/**
 * Discriminated unions are basically union types with a tag, i.e. they are used to hold a value that could take on
 * different literal types. To make a discriminated union type, use a common property across each of your types. This
 * property's only job is to distinguish/discriminate between the types and will serve as an ID. Any time you create an
 * instance of an Action, you have to supply the single correct value for the type (do not worry about forgetting
 * because TypeScript will remind you).
 */

// Discriminating union type of all home-level success actions (used for home-level reducer)
export type HomeSuccessAction =
	| RetrieveManyTutorialsSuccessAction
	| RetrieveTutorialSuccessAction
	| CreateTutorialSuccessAction
	| UpdateTutorialSuccessAction
	| DeleteTutorialSuccessAction
	| DeleteManyTutorialsSuccessAction;

// Discriminating union type of all home-level request actions (used for loading-level reducer)
export type HomeRequestAction =
	| CreateTutorialRequestAction
	| UpdateTutorialRequestAction
	| RetrieveTutorialRequestAction
	| RetrieveManyTutorialsRequestAction
	| DeleteTutorialRequestAction
	| DeleteManyTutorialsRequestAction;

// Discriminating union type of all home-level failure actions (used for error-level reducer)
export type HomeFailureAction =
	| CreateTutorialFailureAction
	| UpdateTutorialFailureAction
	| RetrieveTutorialFailureAction
	| RetrieveManyTutorialsFailureAction
	| DeleteTutorialFailureAction
	| DeleteManyTutorialsFailureAction;

// Discriminating union type of all home-level request, success and failure actions (used for root-level reducer)
export type HomeAction = HomeSuccessAction | HomeRequestAction | HomeFailureAction;
