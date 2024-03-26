import { omit } from "ramda";

import type { PayloadType, ResponsePayload } from "@/api/axios/axios.types";
import { ApplicationModule } from "@/store/store.constants";
import type { RootActionType, RootDataState, RootState } from "@/store/store.types";

import { ViewState } from "../constants";
import type { SelectedState, SelectedStateData } from "../types";

export const createStateSelector = <D extends PayloadType<ResponsePayload>>(
	// Extract utility type constructs a type by extracting all union members (that are assignable) from given type
	applicationModule: Extract<ApplicationModule, "home" | "articles">,
	actionType: RootActionType,
	rootState: RootState
): SelectedState<D> => {
	const selectedDataState = rootState[applicationModule] as RootDataState;
	const selectedPayload = selectedDataState[actionType];
	const selectedData = selectedPayload ? omit(["status"], selectedPayload) : null;
	return {
		loading: rootState.loading[actionType],
		error: rootState.error[actionType],
		data: selectedData as SelectedStateData<D>
	};
};

export const getViewState = <D extends PayloadType<ResponsePayload>>({
	loading,
	error,
	data
}: SelectedState<D>): ViewState => {
	if (loading) return ViewState.LOADING;
	if (error) return ViewState.ERROR;
	if (Array.isArray(data?.data) && data.data.length === 0) return ViewState.EMPTY;
	return ViewState.DATA;
};
