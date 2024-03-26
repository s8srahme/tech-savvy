import { Action, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { ErrorResponse, PayloadType, ResponsePayload, SuccessResponse } from "@/api/axios/axios.types";

import { ArticlesActionStateType, ArticlesActionType } from "./articles/articles.constants";
import type { ArticlesAction, ArticlesDataState, ArticlesReducer } from "./articles/articles.types";
import type { ErrorReducer, ErrorState } from "./error/error.types";
import { HomeActionStateType, HomeActionType } from "./home/home.constants";
import type { HomeAction, HomeDataState, HomeReducer } from "./home/home.types";
import type { LoadingReducer, LoadingState } from "./loading/loading.types";
import { ApplicationModule, ApplicationStateExtension } from "./store.constants";

/*  A P P L I C A T I O N  S T A T E  T Y P E  */

export type ApplicationStateKey = `${ApplicationModule}` | `${ApplicationStateExtension}`;

/*  R O O T  A C T I O N  T Y P E S  */

export type RootActionType = HomeActionType | ArticlesActionType;
export type RootActionStateType = HomeActionStateType | ArticlesActionStateType;
export type RootDataState = HomeDataState & ArticlesDataState;
export type RootAction = HomeAction | ArticlesAction;

export type ActionCreatorType<A extends Action> = ActionCreator<ThunkAction<Promise<void>, RootState, unknown, A>>;
export type ThunkDispatchType<A extends Action> = ThunkDispatch<RootState, unknown, A>;

export type SuccessAction<
	T extends string & RootActionStateType,
	P extends SuccessResponse<PayloadType<ResponsePayload>>
> = Action<T> & {
	payload: P;
};
export type RequestAction<T extends string & RootActionStateType> = Action<T>;
export type FailureActionError = { message: string } | ErrorResponse | null;
export type FailureAction<T extends string & RootActionStateType> = Action<T> & {
	payload: FailureActionError;
};

// Create mapped types with generics (you can only use mapped properties with a type, not with an interface)
export type LoadingField<T extends string> = {
	[K in T]: boolean;
};
export type ErrorField<T extends string, E> = {
	[K in T]: E;
};
export type DataField<T extends string, R> = {
	[K in T]: R | null;
};

/*  R O O T  R E D U C E R  T Y P E S  */

export type RootReducer = {
	[ApplicationModule.HOME]: HomeReducer;
	[ApplicationModule.ARTICLES]: ArticlesReducer;
	// [ApplicationModule.AUTH]: (state: undefined, action: Action) => ({}),
	// [ApplicationModule.AUTHORS]: (state: undefined, action: Action) => ({}),
	// [ApplicationModule.ME]: (state: undefined, action: Action) => ({}),
	// [ApplicationModule.ABOUT]: (state: undefined, action: Action) => ({}),
	[ApplicationStateExtension.LOADING]: LoadingReducer;
	[ApplicationStateExtension.ERROR]: ErrorReducer;
};
export type RootState = {
	[ApplicationModule.HOME]: HomeDataState;
	[ApplicationModule.ARTICLES]: ArticlesDataState;
	// [ApplicationModule.AUTH]: {},
	// [ApplicationModule.AUTHORS]: {},
	// [ApplicationModule.ME]: {},
	// [ApplicationModule.ABOUT]: {},
	[ApplicationStateExtension.LOADING]: LoadingState;
	[ApplicationStateExtension.ERROR]: ErrorState;
};
