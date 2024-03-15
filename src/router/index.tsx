/**
 * A routing layer is responsible for managing paths and rendering the appropriate page components. It allows you to
 * centralize most of the routing logic of your React app in just a couple of files. When a user clicks on a link or
 * enters a URL in the address bar, the routing layer intercepts the request and determines which component or view
 * should be rendered based on the current path.
 *
 * Browser router relies on the DOM History API to update the page URL and manage the browser's built-in history stack.
 *
 * History API provides access to the browser's session history through the history global object, i.e. it allows
 * manipulation of the browser session history (the pages visited in the tab or frame that the current page is loaded
 * in). It exposes useful methods and properties that let you navigate back and forth through the user's history and
 * manipulate the contents of the history stack.
 *
 * react-router is the core package for the router and react-router-dom contains the DOM bindings for React Router,
 * i.e. router components for websites.
 */

import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "@/components/routing";
import { RootLayout } from "@/pages/RootLayout";

import { ROUTE_MAPPINGS } from "./router.routes";

// Initialize a browser router
export const router = createBrowserRouter([
	{
		// Parent route component
		element: <RootLayout />,
		// Custom routing error component
		// errorElement: <Page404 />,
		errorElement: <ErrorBoundary />,
		// Routes defined in corresponding routing layer (child route
		// components to be mounted in the <Outlet /> section of <Layout>)
		children: ROUTE_MAPPINGS
	}
]);
