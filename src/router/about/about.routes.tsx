import { AboutContainer } from "@/pages/About/(Index)/About.container";

import type { AboutRouteMapping, AboutRouteObject } from "./about.types";
import { makeRoutesCaseSensitive } from "../router.helpers";

// About-level route object path dynamic segments

export enum AboutRoutePathDynamicSegment {}

// About-level route object paths

export enum AboutRoutePath {
	ABOUT_ROOT = "/about",
	ABOUT_CONTACT = "/about/contact",
	ABOUT_PRIVACY_POLICY = "/about/privacy-policy",
	ABOUT_TERMS_OF_SERVICE = "/about/terms-of-service"
}

// About-level route array

export const ABOUT_ROUTE_MAPPINGS: AboutRouteMapping[] = makeRoutesCaseSensitive<AboutRouteObject>([
	{ path: AboutRoutePath.ABOUT_ROOT, element: <AboutContainer /> },
	{ path: AboutRoutePath.ABOUT_CONTACT, element: <AboutContainer /> },
	{ path: AboutRoutePath.ABOUT_PRIVACY_POLICY, element: <AboutContainer /> },
	{ path: AboutRoutePath.ABOUT_TERMS_OF_SERVICE, element: <AboutContainer /> }
]);
