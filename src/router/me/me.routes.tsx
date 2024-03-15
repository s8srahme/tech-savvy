// import { ProtectedRoute } from "@/components/routing";

// import { ProtectedRoute } from "@/components/routing";
import { MeContainer } from "@/pages/Me/(Index)/Me.container";
import { makeRoutesCaseSensitive } from "@/router/router.helpers";

import type { MeRouteMapping, MeRouteObject } from "./me.types";

// Me-level route object path dynamic segments

export enum MeRoutePathDynamicSegment {}

// Me-level route object paths

export enum MeRoutePath {
	ME_ROOT = "/me",
	ME_BOOKMARKS = "/me/bookmarks",
	ME_SETTINGS = "/me/settings"
}

// Me-level route array

export const ME_ROUTE_MAPPINGS: MeRouteMapping[] = [
	{
		/* Using ProtectedRoute component as Layout component */
		// element: <ProtectedRoute isAllowed={false} />,
		/* Me-level route components */
		children: makeRoutesCaseSensitive<MeRouteObject>([
			{ path: MeRoutePath.ME_ROOT, element: <MeContainer /> },
			{ path: MeRoutePath.ME_BOOKMARKS, element: <MeContainer /> },
			{ path: MeRoutePath.ME_SETTINGS, element: <MeContainer /> }
		])
	}
];
