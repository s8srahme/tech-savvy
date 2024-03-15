import { AuthContainer } from "@/pages/Auth/(Index)/Auth.container";
import { makeRoutesCaseSensitive } from "@/router/router.helpers";

import type { AuthRouteMapping, AuthRouteObject } from "./auth.types";

// Auth-level route object path dynamic segments

export enum AuthRoutePathDynamicSegment {}

// Auth-level route object paths

export enum AuthRoutePath {
	AUTH_ROOT = "/login"
}

// Auth-level route array

export const AUTH_ROUTE_MAPPINGS: AuthRouteMapping[] = makeRoutesCaseSensitive<AuthRouteObject>([
	{ path: AuthRoutePath.AUTH_ROOT, element: <AuthContainer /> }
]);
