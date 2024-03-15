import { ABOUT_ROUTE_MAPPINGS, AboutRoutePath } from "@/router/about/about.routes";
import {
	ARTICLES_ROUTE_MAPPINGS,
	ArticlesRoutePath,
	ArticlesRoutePathDynamicSegment
} from "@/router/articles/articles.routes";
import { AUTH_ROUTE_MAPPINGS, AuthRoutePath } from "@/router/auth/auth.routes";
import {
	AUTHORS_ROUTE_MAPPINGS,
	AuthorsRoutePath,
	AuthorsRoutePathDynamicSegment
} from "@/router/authors/authors.routes";
import { HOME_ROUTE_MAPPINGS, HomeRoutePath } from "@/router/home/home.routes";
import { ME_ROUTE_MAPPINGS, MeRoutePath } from "@/router/me/me.routes";
import { ApplicationModule } from "@/store/store.constants";

import { RootRouteMapping, RootRoutePathDynamicSegmentMapping, RootRoutePathMapping } from "./router.types";

// Root-level route object path dynamic segments (segment patterns to create route object path patterns)

export const RoutePathDynamicSegmentMapping: RootRoutePathDynamicSegmentMapping = {
	// [ApplicationModule.AUTH]: AuthRoutePathDynamicSegment,
	// [ApplicationModule.HOME]: HomeRoutePathDynamicSegment,
	// [ApplicationModule.ME]: MeRoutePathDynamicSegment,
	[ApplicationModule.AUTHORS]: AuthorsRoutePathDynamicSegment,
	[ApplicationModule.ARTICLES]: ArticlesRoutePathDynamicSegment
	// [ApplicationModule.ABOUT]: AboutRoutePathDynamicSegment
};

// Root-level route object paths (path patterns to be used by To arguments of navigate function)

export const RoutePathMapping: RootRoutePathMapping = {
	[ApplicationModule.AUTH]: AuthRoutePath,
	[ApplicationModule.HOME]: HomeRoutePath,
	[ApplicationModule.ME]: MeRoutePath,
	[ApplicationModule.AUTHORS]: AuthorsRoutePath,
	[ApplicationModule.ARTICLES]: ArticlesRoutePath,
	[ApplicationModule.ABOUT]: AboutRoutePath
};

// Root-level route mappings array (to be used in router creation)

export const ROUTE_MAPPINGS: RootRouteMapping[] = [
	...AUTH_ROUTE_MAPPINGS,
	...HOME_ROUTE_MAPPINGS,
	...ME_ROUTE_MAPPINGS,
	...AUTHORS_ROUTE_MAPPINGS,
	...ARTICLES_ROUTE_MAPPINGS,
	...ABOUT_ROUTE_MAPPINGS
];
