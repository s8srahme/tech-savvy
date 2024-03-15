import { RouteObject } from "react-router-dom";

import { AboutRoutePath, AboutRoutePathDynamicSegment } from "@/router/about/about.routes";
import type { AboutRouteMapping } from "@/router/about/about.types";
import { ArticlesRoutePath, ArticlesRoutePathDynamicSegment } from "@/router/articles/articles.routes";
import type { ArticlesRouteMapping } from "@/router/articles/articles.types";
import { AuthRoutePath, AuthRoutePathDynamicSegment } from "@/router/auth/auth.routes";
import type { AuthRouteMapping } from "@/router/auth/auth.types";
import { AuthorsRoutePath, AuthorsRoutePathDynamicSegment } from "@/router/authors/authors.routes";
import type { AuthorsRouteMapping } from "@/router/authors/authors.types";
import { HomeRoutePath, HomeRoutePathDynamicSegment } from "@/router/home/home.routes";
import type { HomeRouteMapping } from "@/router/home/home.types";
import { MeRoutePath, MeRoutePathDynamicSegment } from "@/router/me/me.routes";
import type { MeRouteMapping } from "@/router/me/me.types";
import { ApplicationModule } from "@/store/store.constants";

import { ApplicationPage } from "./router.config";

// Root-level route path types

export type RootRouteMapping =
	| AuthRouteMapping
	| HomeRouteMapping
	| MeRouteMapping
	| AuthorsRouteMapping
	| ArticlesRouteMapping
	| AboutRouteMapping;

export type RootRoutePathMapping = {
	[ApplicationModule.AUTH]: typeof AuthRoutePath;
	[ApplicationModule.HOME]: typeof HomeRoutePath;
	[ApplicationModule.ME]: typeof MeRoutePath;
	[ApplicationModule.AUTHORS]: typeof AuthorsRoutePath;
	[ApplicationModule.ARTICLES]: typeof ArticlesRoutePath;
	[ApplicationModule.ABOUT]: typeof AboutRoutePath;
};
export type RootRoutePathValue =
	| AuthRoutePath
	| HomeRoutePath
	| MeRoutePath
	| AuthorsRoutePath
	| ArticlesRoutePath
	| AboutRoutePath;
export type RootRoutePathKey =
	| keyof typeof AuthRoutePath
	| keyof typeof HomeRoutePath
	| keyof typeof MeRoutePath
	| keyof typeof AuthorsRoutePath
	| keyof typeof ArticlesRoutePath
	| keyof typeof AboutRoutePath;

export type RootRoutePathDynamicSegmentMapping = {
	// [ApplicationModule.AUTH]: typeof AuthRoutePathDynamicSegment;
	// [ApplicationModule.HOME]: typeof HomeRoutePathDynamicSegment;
	// [ApplicationModule.ME]: typeof MeRoutePathDynamicSegment;
	[ApplicationModule.AUTHORS]: typeof AuthorsRoutePathDynamicSegment;
	[ApplicationModule.ARTICLES]: typeof ArticlesRoutePathDynamicSegment;
	// [ApplicationModule.ABOUT]: typeof AboutRoutePathDynamicSegment;
};
export type RootRoutePathDynamicSegmentValue =
	| AuthRoutePathDynamicSegment
	| HomeRoutePathDynamicSegment
	| MeRoutePathDynamicSegment
	| AuthorsRoutePathDynamicSegment
	| ArticlesRoutePathDynamicSegment
	| AboutRoutePathDynamicSegment;
export type RootRoutePathDynamicSegmentKey =
	| keyof typeof AuthRoutePathDynamicSegment
	| keyof typeof HomeRoutePathDynamicSegment
	| keyof typeof MeRoutePathDynamicSegment
	| keyof typeof AuthorsRoutePathDynamicSegment
	| keyof typeof ArticlesRoutePathDynamicSegment
	| keyof typeof AboutRoutePathDynamicSegment;

// Route object types

export type RouteObjectType<P> = { path: P } & RouteObject;
export type RouteObjectWithLayout<P> = { children: RouteObjectType<P>[] } & RouteObject;

// Page config types

type CommonPageConfigKey = "LAYOUT";
type PageConfigKey<E extends RootRoutePathKey> = E | CommonPageConfigKey;
type PageConfigValue = { enabled: boolean };
type PageConfigMapping<E extends RootRoutePathKey = never> = Partial<Record<PageConfigKey<E>, PageConfigValue>>;

export type PageConfig = Partial<{
	[ApplicationModule.AUTH]: PageConfigMapping<keyof typeof AuthRoutePath>;
	[ApplicationModule.HOME]: PageConfigMapping<keyof typeof HomeRoutePath>;
	[ApplicationModule.ARTICLES]: PageConfigMapping<keyof typeof ArticlesRoutePath>;
	[ApplicationModule.AUTHORS]: PageConfigMapping<keyof typeof AuthorsRoutePath>;
	[ApplicationModule.ME]: PageConfigMapping<keyof typeof MeRoutePath>;
	[ApplicationModule.ABOUT]: PageConfigMapping<keyof typeof AboutRoutePath>;
	[ApplicationPage.ROOT_LAYOUT]: PageConfigMapping<never>;
}>;
