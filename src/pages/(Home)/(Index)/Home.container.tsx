/**
 * Page container:
 * 	- is unique to a route
 * 	- is always the leaf of the route subtree
 *  - is a Client Component by default but can be set to a Server Component
 *	- requires a *.container.tsx file to make a route segment publicly accessible
 *  - can fetch data
 *	- can be placed with nested folders to define a route
 *
 * Containers are smart components connected to the Redux store, that extract necessary state from the Redux store,
 * receive application state updates and dispatch actions (e.g. for fetching data). They usually do not render DOM
 * elements directly, but rather delegate rendering to presentational child components (i.e. acts as a bridge between
 * application state managed by Redux and the page UI components).
 *
 * Containers lets you separate the logic that deals with state management from the logic that deals with rendering and
 * user interactions. This separation promotes code reusability, maintainability and scalability.
 */

import { FC, useEffect } from "react";

import { curry } from "ramda";

import { retrieveTutorials } from "@/store/home/home.actions";
import { HomeActionType } from "@/store/home/home.constants";
import { RetrieveManyTutorialsAction } from "@/store/home/home.types";
import { ApplicationModule } from "@/store/store.constants";
import { createStateSelector, getViewState } from "@/utils/helpers";
import { useDispatch, useSelector } from "@/utils/hooks";

import { Home } from "./Home.component";
// import { ViewState } from "@/utils/utils.types";

interface HomeContainerProps {}

export const HomeContainer: FC<HomeContainerProps> = () => {
	const tutorialsStateSelector = curry(createStateSelector<User[]>)(
		ApplicationModule.HOME,
		HomeActionType.RETRIEVE_MANY_TUTORIALS
	);
	const tutorialsState = useSelector((rootState) => tutorialsStateSelector(rootState));
	const tutorialsViewState = getViewState<User[]>(tutorialsState);
	const dispatch = useDispatch<RetrieveManyTutorialsAction>();

	useEffect(() => {
		dispatch(retrieveTutorials({}));
	}, []);

	switch (tutorialsViewState) {
		// case ViewState.LOADING:
		// 	return null;
		// case ViewState.ERROR:
		// 	return null;
		// case ViewState.EMPTY:
		// 	return null;
		// case ViewState.DATA:
		// 	return null;
		default:
			return <Home />;
	}
};
