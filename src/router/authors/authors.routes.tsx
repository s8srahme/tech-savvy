/**
 * In Route objects:
 * 	- path is the pattern to match against the URL to determine if this route matches a URL, link href or form action
 * 	- if a path segment starts with : then it becomes a dynamic segment. When the route matches the URL, the dynamic
 * 		segment will be parsed from the URL and provided as params to other router APIs, e.g. /:productSlug
 * 	- you can have multiple dynamic segments in one route path, e.g. /c/:categoryId/p/:productId
 * 	- a route segment becomes optional by adding a ? to the end of the segment
 * 	- if a route path pattern ends with /* then it will match any characters following the / (including other
 * 		/ characters); these are called splats (aka catchall/star segments)
 *
 * A feature's listing page displays a collection of items (could also be in a specific category) and a feature's
 * detail page provides in-depth information about one specific item from the list. When you click on an item from the
 * listing page, you are taken to the detail page, where you can learn everything you need to know about the item.
 */

// import { ProtectedRoute } from "@/components/routing";

import { AuthorsContainer } from "@/pages/Authors/(Index)/Authors.container";
import { AuthorContainer } from "@/pages/Authors/[authorId]/Author.container";
import { makeRoutesCaseSensitive } from "@/router/router.helpers";

import type { AuthorsRouteMapping, AuthorsRouteObject } from "./authors.types";

// Authors-level route object path dynamic segments

export enum AuthorsRoutePathDynamicSegment {
	AUTHORS_DETAIL = ":authorId"
}

// Authors-level route object paths

export enum AuthorsRoutePath {
	AUTHORS_ROOT = "/authors", // Listing page
	AUTHORS_DETAIL = `/authors/${AuthorsRoutePathDynamicSegment.AUTHORS_DETAIL}`
}

// Authors-level route array

export const AUTHORS_ROUTE_MAPPINGS: AuthorsRouteMapping[] = [
	{
		/* Using ProtectedRoute component as Layout component */
		// element: <ProtectedRoute isAllowed={false} />,
		/* Authors-level route components */
		children: makeRoutesCaseSensitive<AuthorsRouteObject>([
			{ path: AuthorsRoutePath.AUTHORS_ROOT, element: <AuthorsContainer /> },
			{ path: AuthorsRoutePath.AUTHORS_DETAIL, element: <AuthorContainer /> }
		])
	}
];
