import { omit } from "ramda";

import { ApplicationModule } from "@/store/store.constants";
import { RootActionType, RootState } from "@/store/store.types";

import { ViewState } from "../constants";
import { SelectedState, SelectedStateData } from "../types";

// Extract utility type constructs a type by extracting all union members (that are assignable) from given type
export const createStateSelector = <D extends PayloadType<ResponsePayload>>(
	applicationModule: Extract<ApplicationModule, "home">,
	actionType: RootActionType,
	rootState: RootState
): SelectedState<D> => {
	const selectedStateDataPayload = rootState[applicationModule][actionType];
	const selectedStateData = selectedStateDataPayload ? omit(["status"], selectedStateDataPayload) : null;
	const selectedState: SelectedState<D> = {
		loading: rootState.loading[actionType],
		error: rootState.error[actionType],
		data: selectedStateData as SelectedStateData<D>
	};
	return selectedState;
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
