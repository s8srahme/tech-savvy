import { useEffect, useState } from "react";

import { HorizontalScrollDisabler } from "../types";

export const useElementHorizontalScroll = (element: HTMLElement | null) => {
	const [hasReachedEdge, setHasReachedEdge] = useState<HorizontalScrollDisabler>({ right: false, left: true });
	const [canBeScrolled, setCanBeScrolled] = useState<HorizontalScrollDisabler>({ right: false, left: false });

	const isScrolledToRightEdge = () => {
		if (element) {
			/**
			 * scrollLeft is a non-rounded number, while scrollWidth and clientWidth are rounded - so the only way to
			 * determine if the scroll area is scrolled to the right edge is by seeing if the scroll amount is close
			 * enough to some threshold (i.e. 1).
			 */
			return Math.abs(element.scrollWidth - element.offsetWidth - element.scrollLeft) <= 1;
		}
		return false;
	};
	const isScrolledToLeftEdge = () => {
		if (element) return element.scrollLeft <= 0;
		return true;
	};
	const handleElementScroll = () => {
		setHasReachedEdge({ right: isScrolledToRightEdge(), left: isScrolledToLeftEdge() });
	};
	const enableScroll = () => {
		setCanBeScrolled({ right: !isScrolledToRightEdge(), left: !isScrolledToLeftEdge() });
	};
	const disableScroll = () => {
		setCanBeScrolled({ right: false, left: false });
	};

	useEffect(() => {
		handleElementScroll();
		enableScroll();

		if (element) element.addEventListener("scroll", handleElementScroll);
		return () => {
			if (element) element.removeEventListener("scroll", handleElementScroll);
		};
	}, [element]);

	return { canBeScrolled, hasReachedEdge, disableScroll, enableScroll };
};
