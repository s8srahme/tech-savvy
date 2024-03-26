import { Reducer } from "redux";

import { ArticlesErrorState, ArticlesFailureAction } from "@/store/articles/articles.types";
import { HomeErrorState, HomeFailureAction } from "@/store/home/home.types";

// Error-level reducer type

export type ErrorReducer = Reducer<ErrorState, ErrorAction>;

// Error-level state object type

export type ErrorState = HomeErrorState & ArticlesErrorState;

// Error-level action object type

export type ErrorAction = HomeFailureAction | ArticlesFailureAction;
