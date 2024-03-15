/**
 * This protecting route component acts as abstraction layer for the authorization mechanism to protect certain pages
 * from unauthorized access. It can be used to compose other component(s) into it, e.g.:
 * 	- as a layout component by using React Router's Outlet (which works for protecting all nested routes with same
 * 		authorization level)
 * 	- as a wrapping component by using React's children prop
 *
 * useNavigate Hook returns a function that lets you navigate programmatically. You can either pass a To value (same
 * type as <Link to>) with an optional options argument, where:
 * 	- replace option will cause the navigation to replace the current entry in the history stack instead of adding
 * 		a new one
 * 	- state option could store value in history state, which you can then access on the destination route via
 * 		useLocation Hook
 * or pass -1 (which is equivalent to hitting the back button)
 */

import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { RoutePathMapping } from "@/router/router.routes";

import { ProtectedRouteProps } from "./ProtectedRoute.types";

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
	isAllowed, // Condition which acts as an abstract guard for rendering the protected component
	redirectPath = RoutePathMapping.auth.AUTH_ROOT,
	children
}) => {
	const navigate = useNavigate();
	if (!isAllowed) {
		// User will experience a redirect from the protected page
		navigate(redirectPath, { replace: true });
		return null;
	}
	return children || <Outlet />;
};
