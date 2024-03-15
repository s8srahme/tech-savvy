/**
 * Page components:
 * 	- are dumb (presentational) components responsible for rendering a view
 * 	- have no dependencies on Redux store
 * 	- do not specify how the data is loaded or mutated
 * 	- receive data and callbacks exclusively via props from parent container components
 * 	- rarely have their own state (only UI state rather than data)
 */

import { FC } from "react";

import { Stack } from "@mui/material";

import { Carousel, HorizontalCardGrid } from "@/components/surfaces";
import { CAROUSEL_CARDS } from "@/components/surfaces/Carousel/Carousel.constants";
import { CARDS } from "@/components/surfaces/HorizontalCardGrid/HorizontalCardGrid.constants";

export const Home: FC = () => {
	// throw new Error("muhahaha...");
	return (
		<Stack spacing={3} sx={{ width: "100%" }}>
			<Carousel
				slides={CAROUSEL_CARDS}
				header={{ title: "Trending" }}
				emptyListing={{
					title: "Nothing's trending yet!",
					description: "It looks like nothing is trending at this moment. Please check back at a later time."
				}}
			/>
			<HorizontalCardGrid
				cards={CARDS}
				header={{ title: "Recent Releases" }}
				emptyListing={{
					title: "Nothing's trending yet!",
					description: "It looks like nothing is trending at this moment. Please check back at a later time."
				}}
			/>
			<HorizontalCardGrid
				cards={CARDS.toReversed()}
				header={{ title: "Most Clapped" }}
				emptyListing={{
					title: "No claps yet!",
					description: "It looks like there are no claps at this moment. Please check back at a later time."
				}}
			/>
		</Stack>
	);
};
