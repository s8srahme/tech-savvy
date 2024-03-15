/**
 * In the pages directory, nested folder hierarchy defines route structure and each folder represents a route segment
 * that is mapped to a corresponding segment in a URL path. However, you can mark a folder as a Route Group (by
 * wrapping a folder's name in parenthesis) to indicate that the folder is only for organizational purposes (i.e. to
 * organize related routes and project files into logical groups, aka colocation) and should not be included in the
 * route's URL path.
 *
 * Colocation is the principle by which related pieces of code (things that change together) are located as closely
 * as possible within your project's directory structure. Benefits of this practice include:
 * 	- Focus on features, not technology: By organizing your codebase into feature-specific directories, you can
 * 		concentrate on the functionality you are building without being preoccupied with the underlying technology or
 * 		framework.
 * 	- Ease of changing specific features: When a change is needed for a specific feature, you can locate all the
 * 		relevant files within the corresponding directory. This proximity of related files simplifies the modification
 * 		and testing of specific features without affecting unrelated parts of the project, making it easier to maintain
 * 		and update individual components.
 * 	- Team scalability: As your team expands, the feature-based structure helps a lot with the onboarding of new team
 * 		members.
 * 	- Flexible grouping of features: If you find that your project has numerous feature directories and needs further
 * 		organization, you can always group multiple features under another directory. This hierarchy allows for logical
 * 		categorization, making it easier to manage and navigate a large number of feature directories.
 * 	- Effortless addition of new features: When you need to add new features to your project, you can just create a new
 * 		directory with the feature's name and place all the relevant building blocks within that directory. This modular
 * 		approach ensures that new features are neatly organized and isolated from existing code, simplifying the
 * 		development and maintenance of the project as it grows.
 */

/**
 * Routes are objects passed to the router creation functions. They couple URL segments (path) to page
 * components (element), data loading before rendering (loader), data mutations when data is submitted to it (action)
 * and error component when no path matches the specified URL (errorElement). Through route nesting (via children),
 * complex application layouts and data dependencies become simple and declarative.
 *
 * You can also declare your routes with JSX style, where the props to the element are identical to the properties of
 * the route objects.
 */

// client route paths

// https://mashable.com/
// https://www.makeuseof.com/page/trending/

// https://mashable.com/category/digital-culture

// https://mashable.com/search?query=hello%20world

// https://mashable.com/articles/ces-2024-best-laptops

// https://read.write.as/writers
// https://mashable.com/authors/christianna-silva

// https://mashable.com/about/contact-us
// https://mashable.com/about
// http://domain.com/about/team
// https://write.as/about/privacy

// https://medium.com/me/notifications
// https://medium.com/me/bookmarks
// https://medium.com/me/settings

// https://medium.com/new-story

// https://write.as/login

// server route paths

// /articles
// /auth
// /users
// /about

/*
 * JSX.Element is:
 *	- a data type used to render JSX elements (a coded representation of a DOM element) at runtime
 * 	- for creating a component without props (implicit return type if you do not declare it)
 *
 * JSX.Element + props interface (to write components):
 *	- just regular function typing for arguments and return types
 *	- does not have an implicit children prop (you need to declare it explicitly)
 *	- does not have default support for static properties (e.g. propTypes, displayName, default props)
 *	- can be used with generics
 *	- JSX.Element return type may not be enough if your component returns null or string (you need to add other return
 * 		types if needed)
 */

// import { ProtectedRoute } from "@/components/routing";
import { HomeContainer } from "@/pages/(Home)/(Index)/Home.container";

import type { HomeRouteMapping, HomeRouteObject } from "./home.types";
import { makeRoutesCaseSensitive } from "../router.helpers";

// Home-level route object path dynamic segments (Home subsection segment patterns to create route object path patterns)

export enum HomeRoutePathDynamicSegment {}

// Home-level route object paths (Home subsection path patterns to create route objects)

export enum HomeRoutePath {
	// These strings must follow the route naming convention defined by react-router-dom
	HOME_ROOT = "/",
	HOME_RECENT_RELEASES = "/recent-releases",
	HOME_MOST_CLAPPED = "/most-clapped",
	HOME_TOP_AUTHORS = "/top-authors"
}

// Home-level route array (mappings between Home route strings and page components, i.e. route objects)

export const HOME_ROUTE_MAPPINGS: HomeRouteMapping[] = makeRoutesCaseSensitive<HomeRouteObject>([
	{
		// When the URL matches this path pattern,
		path: HomeRoutePath.HOME_ROOT,
		// render this child route component
		element: <HomeContainer />
	},
	{ path: HomeRoutePath.HOME_RECENT_RELEASES, element: <HomeContainer /> },
	{
		path: HomeRoutePath.HOME_MOST_CLAPPED,
		element: (
			/* Use ProtectedRoute as wrapping component */
			// <ProtectedRoute isAllowed={false}>
			<HomeContainer />
			// </ProtectedRoute>
		)
	},
	{ path: HomeRoutePath.HOME_TOP_AUTHORS, element: <HomeContainer /> }
]);
