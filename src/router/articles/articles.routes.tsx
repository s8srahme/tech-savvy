/**
 * ID is a unique identifier assigned to a resource, e.g. database record, URL parameter. They are often generated
 * automatically by the database when a new record is inserted and they are typically numeric/alphanumeric (less
 * user-friendly and memorable).
 *
 * Slug is the last part of the URL that serves as a unique identifier of a resource (human-readable version of an ID).
 * It is often derived from the title of a resource and used in URLs to make them more descriptive, memorable and
 * SEO-friendly.
 *
 * The best practice is to use hyphens to separate words in URL slug (as search engines may not correctly interpret
 * other separators), to use lowercase characters (to avoid duplicate content issues that can happen if a specific URL
 * is created both in uppercase and lowercase) and to avoid special characters (non-ASCII characters).
 */

// import { ProtectedRoute } from "@/components/routing";

import { ArticlesContainer } from "@/pages/Articles/(Index)/Articles.container";
import { ArticleContainer } from "@/pages/Articles/[articleSlug]/Article.container";
import { makeRoutesCaseSensitive } from "@/router/router.helpers";

import type { ArticlesRouteMapping, ArticlesRouteObject } from "./articles.types";

// Articles-level route object path dynamic segments

export enum ArticlesRoutePathDynamicSegment {
	ARTICLES_DETAIL = ":articleSlug"
}

// Articles-level route object paths

export enum ArticlesRoutePath {
	ARTICLES_ROOT = "/articles",
	ARTICLES_DETAIL = `/articles/${ArticlesRoutePathDynamicSegment.ARTICLES_DETAIL}`
}

// Articles-level route array

export const ARTICLES_ROUTE_MAPPINGS: ArticlesRouteMapping[] = [
	{
		// Using ProtectedRoute component as Layout component
		// element: <ProtectedRoute isAllowed={false} />,
		// Articles-level route components
		children: makeRoutesCaseSensitive<ArticlesRouteObject>([
			{ path: ArticlesRoutePath.ARTICLES_ROOT, element: <ArticlesContainer /> },
			{ path: ArticlesRoutePath.ARTICLES_DETAIL, element: <ArticleContainer /> }
		])
	}
];
