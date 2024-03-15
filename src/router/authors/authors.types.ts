import type { RouteObjectType, RouteObjectWithLayout } from "@/router/router.types";

import { AuthorsRoutePath } from "./authors.routes";

// Authors-level route object types

export type AuthorsRouteMapping = RouteObjectWithLayout<AuthorsRoutePath>;
export type AuthorsRouteObject = RouteObjectType<AuthorsRoutePath>;
