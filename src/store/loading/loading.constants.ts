import { ArticlesActionType } from "store/articles/articles.constants";
import { HomeActionType } from "store/home/home.constants";

/* Loading-level action types */

// Use spread syntax to merge string enums into an object
export const LoadingActionType = { ...HomeActionType, ...ArticlesActionType };
