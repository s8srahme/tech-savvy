import type { RelativeURL, URLMapping } from "@/utils/types";

export const makeRoutesCaseSensitive = <T>(routeMappings: T[]): T[] =>
	routeMappings.map((route) => ({ ...route, caseSensitive: true })); // Instructs the route to match case or not

export const replaceDynamicSegmentPattern = (urlMapping: URLMapping<"relative", RelativeURL>) => {
	const { replacementId = "", dynamicSegmentPattern, pathPattern } = urlMapping.value;
	// You can also chain multiple replace calls to replace multiple dynamic segments
	return pathPattern.replace(dynamicSegmentPattern as string, replacementId);
};
