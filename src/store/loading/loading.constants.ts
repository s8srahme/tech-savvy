import { HomeActionType } from "store/home/home.constants";

// Loading-level action types

export const LoadingActionType = { ...HomeActionType }; // Use spread syntax to merge string enums into an object
