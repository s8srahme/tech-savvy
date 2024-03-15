import type { RootRoutePathDynamicSegmentValue, RootRoutePathValue } from "@/router/router.types";
import type { FailureActionError } from "@/store/store.types";

/*  S E L E C T O R  */

// Omit<Type, Keys> type creates a new type by picking all the properties from Type (either type or interface) and
// excluding Keys (either single or multiple key strings separated by pipe operator, i.e. union type).
export type SelectedStateData<D extends PayloadType<ResponsePayload>> = Omit<SuccessResponse<D>, "status"> | null;
export type SelectedState<D extends PayloadType<ResponsePayload>> = {
	loading: boolean;
	error: FailureActionError;
	data: SelectedStateData<D>;
};

/*  U R L  */

export type RelativeURL<
	P extends RootRoutePathValue = RootRoutePathValue,
	S extends RootRoutePathDynamicSegmentValue = RootRoutePathDynamicSegmentValue
> = {
	replacementId?: string;
	pathPattern: P;
	dynamicSegmentPattern?: S;
};

export type URLType = "absolute" | "relative" | "mailto";
export type URLValue = RelativeURL | URL;
export type URLMapping<T extends URLType, V extends URLValue> = { type: T; value: V };

export type RootURLMapping<
	P extends RootRoutePathValue = RootRoutePathValue,
	S extends RootRoutePathDynamicSegmentValue = RootRoutePathDynamicSegmentValue
> = URLMapping<"absolute", URL> | URLMapping<"relative", RelativeURL<P, S>> | URLMapping<"mailto", URL>;

/*  T I M E  */

export type TimeUnit = "now" | "second" | "minute" | "hour" | "day" | "month" | "year";
export type TimeDifference = { difference: number; unit: TimeUnit };
