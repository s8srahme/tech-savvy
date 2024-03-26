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

import type { HomeProps } from "./Home.types";

export const Home: FC<HomeProps> = ({ trendingProps, recentlyReleasedProps, mostClappedProps }) => {
	// TODO: Handle error via implementing ErrorBoundary. Try `throw new Error("muhahaha...");` for testing.
	return (
		<Stack spacing={3} sx={{ width: "100%" }}>
			<Carousel {...trendingProps} />
			<HorizontalCardGrid {...recentlyReleasedProps} />
			<HorizontalCardGrid {...mostClappedProps} />
		</Stack>
	);
};
