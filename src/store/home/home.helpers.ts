import { HomeActionStateType } from "./home.constants";
import {
	CreateTutorialFailureAction,
	CreateTutorialRequestAction,
	CreateTutorialSuccessAction,
	DeleteManyTutorialsFailureAction,
	DeleteManyTutorialsRequestAction,
	DeleteManyTutorialsSuccessAction,
	DeleteTutorialFailureAction,
	DeleteTutorialRequestAction,
	DeleteTutorialSuccessAction,
	RetrieveManyTutorialsFailureAction,
	RetrieveManyTutorialsRequestAction,
	RetrieveManyTutorialsSuccessAction,
	RetrieveTutorialFailureAction,
	RetrieveTutorialRequestAction,
	RetrieveTutorialSuccessAction,
	UpdateTutorialFailureAction,
	UpdateTutorialRequestAction,
	UpdateTutorialSuccessAction
} from "./home.types";
import { FailureActionError } from "../store.types";

export const createOne = {
	request: (): CreateTutorialRequestAction => ({
		// The value can only be set to one of the members of the enum
		type: HomeActionStateType.CREATE_TUTORIAL_REQUEST
	}),
	success: (data: POSTSuccessResponse): CreateTutorialSuccessAction => ({
		type: HomeActionStateType.CREATE_TUTORIAL_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): CreateTutorialFailureAction => ({
		type: HomeActionStateType.CREATE_TUTORIAL_FAILURE,
		payload: error
	})
};

export const retrieveOne = {
	request: (): RetrieveTutorialRequestAction => ({
		type: HomeActionStateType.RETRIEVE_TUTORIAL_REQUEST
	}),
	success: (data: GETSuccessResponse<UserResponsePayload>): RetrieveTutorialSuccessAction => ({
		type: HomeActionStateType.RETRIEVE_TUTORIAL_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): RetrieveTutorialFailureAction => ({
		type: HomeActionStateType.RETRIEVE_TUTORIAL_FAILURE,
		payload: error
	})
};

export const retrieveMany = {
	request: (): RetrieveManyTutorialsRequestAction => ({
		type: HomeActionStateType.RETRIEVE_MANY_TUTORIALS_REQUEST
	}),
	success: (data: GETManySuccessResponse<UserResponsePayload[]>): RetrieveManyTutorialsSuccessAction => ({
		type: HomeActionStateType.RETRIEVE_MANY_TUTORIALS_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): RetrieveManyTutorialsFailureAction => ({
		type: HomeActionStateType.RETRIEVE_MANY_TUTORIALS_FAILURE,
		payload: error
	})
};

export const updateOne = {
	request: (): UpdateTutorialRequestAction => ({
		type: HomeActionStateType.UPDATE_TUTORIAL_REQUEST
	}),
	success: (data: PATCHSuccessResponse<UserResponsePayload>): UpdateTutorialSuccessAction => ({
		type: HomeActionStateType.UPDATE_TUTORIAL_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): UpdateTutorialFailureAction => ({
		type: HomeActionStateType.UPDATE_TUTORIAL_FAILURE,
		payload: error
	})
};

export const deleteOne = {
	request: (): DeleteTutorialRequestAction => ({
		type: HomeActionStateType.DELETE_TUTORIAL_REQUEST
	}),
	success: (data: DELETESuccessResponse): DeleteTutorialSuccessAction => ({
		type: HomeActionStateType.DELETE_TUTORIAL_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): DeleteTutorialFailureAction => ({
		type: HomeActionStateType.DELETE_TUTORIAL_FAILURE,
		payload: error
	})
};

export const deleteAll = {
	request: (): DeleteManyTutorialsRequestAction => ({
		type: HomeActionStateType.DELETE_MANY_TUTORIALS_REQUEST
	}),
	success: (data: DELETESuccessResponse): DeleteManyTutorialsSuccessAction => ({
		type: HomeActionStateType.DELETE_MANY_TUTORIALS_SUCCESS,
		payload: data
	}),
	failure: (error: FailureActionError): DeleteManyTutorialsFailureAction => ({
		type: HomeActionStateType.DELETE_MANY_TUTORIALS_FAILURE,
		payload: error
	})
};
