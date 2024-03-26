import { Reducer } from "redux";

import type { ArticlesLoadingState, ArticlesRequestAction } from "@/store/articles/articles.types";
import type { HomeLoadingState, HomeRequestAction } from "@/store/home/home.types";

// Loading-level reducer type

export type LoadingReducer = Reducer<LoadingState, LoadingAction>;

// Loading-level state object type

export type LoadingState = HomeLoadingState & ArticlesLoadingState;

// Loading-level action object type

export type LoadingAction = HomeRequestAction | ArticlesRequestAction;
