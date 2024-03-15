import type { RouteObjectType, RouteObjectWithLayout } from "@/router/router.types";

import { ArticlesRoutePath } from "./articles.routes";

// Articles-level route object types

export type ArticlesRouteMapping = RouteObjectWithLayout<ArticlesRoutePath>;
export type ArticlesRouteObject = RouteObjectType<ArticlesRoutePath>;
