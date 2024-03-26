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

import type { Article } from "@/api/services";
import {
	retrieveMostClappedArticles,
	retrieveRecentlyReleasedArticles,
	retrieveTrendingArticles
} from "@/store/home/home.actions";
import { HomeActionType } from "@/store/home/home.constants";
import {
	RetrieveMostClappedArticlesAction,
	RetrieveRecentlyReleasedArticlesAction,
	RetrieveTrendingArticlesAction
} from "@/store/home/home.types";
import { ApplicationModule } from "@/store/store.constants";
import { createStateSelector, getViewState } from "@/utils/helpers";
import { useDispatch, useSelector } from "@/utils/hooks";

import { Home } from "./Home.component";
import { toMostClappedProps, toRecentlyReleasedProps, toTrendingProps } from "./Home.helpers";
import { HomeProps } from "./Home.types";

interface HomeContainerProps {}

export const HomeContainer: FC<HomeContainerProps> = () => {
	// S E L E C T O R S

	const trendingArticlesStateSelector = curry(createStateSelector<Article[]>)(
		ApplicationModule.HOME,
		HomeActionType.RETRIEVE_TRENDING_ARTICLES
	);
	const trendingArticlesState = useSelector((rootState) => trendingArticlesStateSelector(rootState));
	const trendingArticlesViewState = getViewState<Article[]>(trendingArticlesState);

	const recentlyReleasedArticlesStateSelector = curry(createStateSelector<Article[]>)(
		ApplicationModule.HOME,
		HomeActionType.RETRIEVE_RECENTLY_RELEASED_ARTICLES
	);
	const recentlyReleasedArticlesState = useSelector((rootState) => recentlyReleasedArticlesStateSelector(rootState));
	const recentlyReleasedArticlesViewState = getViewState<Article[]>(recentlyReleasedArticlesState);

	const mostClappedArticlesStateSelector = curry(createStateSelector<Article[]>)(
		ApplicationModule.HOME,
		HomeActionType.RETRIEVE_MOST_CLAPPED_ARTICLES
	);
	const mostClappedArticlesState = useSelector((rootState) => mostClappedArticlesStateSelector(rootState));
	const mostClappedArticlesViewState = getViewState<Article[]>(mostClappedArticlesState);

	// D I S P A T C H E S

	const dispatchRecentlyReleasedArticles = useDispatch<RetrieveRecentlyReleasedArticlesAction>();
	const dispatchMostClappedArticles = useDispatch<RetrieveMostClappedArticlesAction>();
	const dispatchTrendingArticles = useDispatch<RetrieveTrendingArticlesAction>();

	useEffect(() => {
		dispatchRecentlyReleasedArticles(retrieveRecentlyReleasedArticles({ sort: "createdAt:desc", limit: 12, page: 1 }));
		dispatchMostClappedArticles(retrieveMostClappedArticles({ sort: "claps:desc", limit: 12, page: 1 }));
		dispatchTrendingArticles(retrieveTrendingArticles({ "claps[gte]": 2, "claps[lte]": 10, limit: 12, page: 1 }));
	}, []);

	// C H I L D R E N  P R O P S

	const homeProps: HomeProps = {
		recentlyReleasedProps: toRecentlyReleasedProps(recentlyReleasedArticlesState, recentlyReleasedArticlesViewState),
		mostClappedProps: toMostClappedProps(mostClappedArticlesState, mostClappedArticlesViewState),
		trendingProps: toTrendingProps(trendingArticlesState, trendingArticlesViewState)
	};

	// R E N D E R I N G

	return <Home {...homeProps} />;
};
