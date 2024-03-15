import { BoxProps } from "@mui/material";

import { ButtonClickHandler } from "@/components/inputs";
import type { HorizontalScrollDirection } from "@/utils/types";

import { CardProps } from "../Card/Card.types";

export type HorizontalCardGridProps = {
	header: { title: string };
	cards: CardProps[];
	emptyListing: { title: string; description: string };
};

export type HorizontalCardGridHeaderButtonProps = {
	[K in HorizontalScrollDirection]: { onClick: ButtonClickHandler; disabled: boolean };
};
export type HorizontalCardGridHeaderProps = {
	buttonProps: HorizontalCardGridHeaderButtonProps;
	title: string;
};

// Styled types
export type StyledHorizontalCardGridScrollShadowProps = BoxProps & { start: boolean; end: boolean };
