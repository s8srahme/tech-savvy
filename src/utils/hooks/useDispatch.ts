/**
 * useDispatch Hook enables you to dispatch any action to the store by adding the action (via calling action creator)
 * as an argument to the returned dispatch function
 */

import { useDispatch as _useDispatch } from "react-redux";

import { RootAction, ThunkDispatchType } from "@/store/store.types";

// If you import useDispatch directly from react-redux, there's no way to have any restriction on what type of actions
// are sent. In order to enforce proper action types in the dispatch calls, you have to introduce custom useDispatch
// hook in the store:
export const useDispatch = <A extends RootAction>() => _useDispatch<ThunkDispatchType<A>>();
