import { PropsWithChildren } from "react";

import { RootRoutePathValue } from "@/router/router.types";

export interface ProtectedRouteProps extends PropsWithChildren {
	isAllowed: boolean;
	redirectPath?: RootRoutePathValue;
}
