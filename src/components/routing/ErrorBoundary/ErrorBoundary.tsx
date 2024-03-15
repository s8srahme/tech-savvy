/**
 * E R R O R  B O U N D A R Y
 *
 * Error boundaries are React components that catch runtime errors (like JS catch {} block but for components)
 * anywhere in their child component tree, log those errors and display a fallback UI instead of the component tree
 * that crashed.
 *
 *
 * U S A G E  I N  C L A S S  C O M P O N E N T S
 *
 * Error boundaries could catch errors during rendering, in lifecycle methods and in constructors of the whole tree
 * below them. They do not catch errors for:
 * 	- Event handlers
 * 	- Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
 * 	- Server side rendering
 * 	- Errors thrown in the error boundary itself (rather than its children)
 *
 * A class component becomes an error boundary if it defines either (or both) of the two lifecycle methods:
 * 	- static getDerivedStateFromError() to render a fallback UI after an error has been thrown
 * 	- componentDidCatch() to log error information
 * Since there are no direct equivalents for getSnapshotBeforeUpdate, componentDidCatch and getDerivedStateFromError
 * lifecycle methods in function components yet, you have to write error boundary with class components for this
 * approach to work.
 *
 *
 * U S A G E  I N  F U N C T I O N  C O M P O N E N T S
 *
 * Alternatively, you could use useRouteError hook of React Router to access the current error state of the router.
 * When exceptions are thrown in loaders, actions or component rendering, instead of the normal render path (i.e.
 * element) for your route objects, the error path will be rendered by errorElement and the error made available
 * with useRouteError hook. When a route does not have an errorElement, errors will bubble up through parent routes.
 * So you can put an errorElement at the top of your route tree and handle nearly every error in your app in one
 * place. Otherwise, errors will be handled by a default errorElement which will print the error message and stack
 * trace.
 *
 *
 * S T A C K  T R A C E
 *
 * Stack trace shows you the exact route your code traversed leading up to the point where your program printed an
 * exception. It represents a call stack (which is a collection of elements where each element represents a function
 * call in your code that contains logic) at a certain point in time.
 *
 * Whenever a certain function call throws an error, you will have a collection of function calls that lead up to the
 * call that caused the particular problem. This is due to the LIFO behavior of the collection that keeps track of
 * underlying, previous function calls. This also implies that a stack trace is printed top-down. The stack trace
 * first prints the function call that caused the error and then prints the previous underlying calls that led up
 * to the faulty call. Therefore, reading the first line of the stack trace shows you the exact function call that
 * threw an error.
 *
 *
 * R O U T E  A C T I O N S  &  L O A D E R S
 *
 * Each route (in React Router) can define a loader (reads) function for data fetching to provide data to the route
 * element before it renders. Route actions are the writes functions to perform data mutations whenever the app sends a
 * non-get submission (create, edit and delete) to your route.
 */

import { FC, useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Page404 } from "../Page404/Page404";
import { ClientErrorStatusValue } from "../Page404/Page404.types";

export const ErrorBoundary: FC = () => {
	const error = useRouteError();

	const getClientErrorResponseStatus = (): ClientErrorStatusValue => {
		/**
		 * Check if the given error is an ErrorResponse (usually generated from React Router action/loader's thrown
		 * response). If the user visits a route that does not match any defined routes in the app, React Router itself
		 * will throw a 404 response (Not Found).
		 */
		if (isRouteErrorResponse(error) && error.status === 404) return 404;

		/**
		 * For any other client errors (e.g. 400 Bad Request).
		 */
		return 400;
	};

	// You can also log the error to an error reporting service
	useEffect(() => {
		// logErrorToMyService(error);
	}, []);

	return <Page404 status={getClientErrorResponseStatus()} />;
};
