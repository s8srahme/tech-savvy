import type { RouteObjectType, RouteObjectWithLayout } from "@/router/router.types";

import { MeRoutePath } from "./me.routes";

// Me-level route object types

export type MeRouteMapping = RouteObjectWithLayout<MeRoutePath>;
export type MeRouteObject = RouteObjectType<MeRoutePath>;
