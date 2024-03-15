import { Reducer } from "redux";

import { HomeLoadingState, HomeRequestAction } from "@/store/home/home.types";

// Loading-level reducer type

export type LoadingReducer = Reducer<LoadingState, LoadingAction>;

// Loading-level state object type

export type LoadingState = HomeLoadingState;

// Loading-level action object type

export type LoadingAction = HomeRequestAction;
