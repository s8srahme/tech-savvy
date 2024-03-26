import { Article } from "@/api/services";
import { CarouselProps, HorizontalCardGridProps } from "@/components/surfaces";
import { ViewState } from "@/utils/constants";
import { SelectedState } from "@/utils/types";

export const toRecentlyReleasedProps = (
	recentlyReleasedArticlesState: SelectedState<Article[]>,
	recentlyReleasedArticlesViewState: ViewState
): HorizontalCardGridProps => {
	const { error, data } = recentlyReleasedArticlesState;
	const recentlyReleasedProps: HorizontalCardGridProps = {
		cards: [],
		header: { title: "Recently Released" },
		emptyListing: {
			title: "Nothing's trending yet!",
			description: "It looks like nothing is trending at this moment. Please check back at a later time."
		}
	};

	switch (recentlyReleasedArticlesViewState) {
		case ViewState.ERROR:
			recentlyReleasedProps.cards = [];
			if (error)
				recentlyReleasedProps.emptyListing = {
					title: "Something went wrong.",
					description: error?.message
				};
			break;
		case ViewState.EMPTY:
			// Case already covered by initial value
			break;
		case ViewState.DATA:
			if (data?.data) recentlyReleasedProps.cards = data.data;
			break;
		case ViewState.LOADING:
		default:
			recentlyReleasedProps.cards = Array.from(Array(10), () => ({ loading: true }));
	}

	return recentlyReleasedProps;
};

export const toMostClappedProps = (
	mostClappedArticlesState: SelectedState<Article[]>,
	mostClappedArticlesViewState: ViewState
): HorizontalCardGridProps => {
	const { error, data } = mostClappedArticlesState;
	const mostClappedProps: HorizontalCardGridProps = {
		cards: [],
		header: { title: "Most Clapped" },
		emptyListing: {
			title: "No claps yet!",
			description: "It looks like there are no claps at this moment. Please check back at a later time."
		}
	};

	switch (mostClappedArticlesViewState) {
		case ViewState.ERROR:
			mostClappedProps.cards = [];
			if (error)
				mostClappedProps.emptyListing = {
					title: "Something went wrong.",
					description: error?.message
				};
			break;
		case ViewState.EMPTY:
			// Case already covered by initial value
			break;
		case ViewState.DATA:
			if (data?.data) mostClappedProps.cards = data.data;
			break;
		case ViewState.LOADING:
		default:
			mostClappedProps.cards = Array.from(Array(10), () => ({ loading: true }));
	}

	return mostClappedProps;
};

export const toTrendingProps = (
	trendingArticlesState: SelectedState<Article[]>,
	trendingArticlesViewState: ViewState
): CarouselProps => {
	const { error, data, loading } = trendingArticlesState;
	const trendingProps: CarouselProps = {
		loading,
		slides: [],
		header: { title: "Trending" },
		emptyListing: {
			title: "Nothing's trending yet!",
			description: "It looks like nothing is trending at this moment. Please check back at a later time."
		}
	};

	switch (trendingArticlesViewState) {
		case ViewState.ERROR:
			trendingProps.slides = [];
			if (error)
				trendingProps.emptyListing = {
					title: "Something went wrong.",
					description: error?.message
				};
			break;
		case ViewState.EMPTY:
			// Case already covered by initial value
			break;
		case ViewState.DATA:
			if (data?.data) trendingProps.slides = data.data;
			break;
		case ViewState.LOADING:
		default:
			trendingProps.slides = Array.from(Array(10), () => ({ loading: true }));
	}

	return trendingProps;
};
