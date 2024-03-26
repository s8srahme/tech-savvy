import { ArticlesActionType } from "@/store/articles/articles.constants";
import { HomeActionType } from "@/store/home/home.constants";

// Error-level action types

export const ErrorActionType = { ...HomeActionType, ...ArticlesActionType };
