/**
 * L I M I T I N G  T E X T  C O N T E N T
 *
 * text-overflow CSS property sets how hidden overflow content is signaled to users. It can be:
 * 	- clipped: truncates the text at the limit of the content area, such that the truncation can happen in the middle
 * 		of a character
 * 	- empty string: clips text at the transition between characters
 * 	- ellipsis: displays an ellipsis (...) to represent clipped text
 * 	- custom string: a custom string to represent clipped text
 *
 * text-overflow property only affects content that is overflowing a block container element in its inline progression
 * direction (not text overflowing at the bottom of a box). It does not force an overflow to occur on its own. To make
 * text overflow its container, you have to set other CSS properties:
 * 	overflow: hidden;
 * 	white-space: nowrap;
 *
 * ---
 *
 *
 */

import styled from "@emotion/styled";
import { Card, Typography, TypographyProps } from "@mui/material";

import { CARD_WIDTH } from "./Card.constants";
import { StyledCardProps } from "./Card.types";

export const StyledCard = styled(Card)<StyledCardProps>(({ theme }) => ({
	minWidth: CARD_WIDTH,
	// width: CARD_WIDTH,
	borderRadius: 2 * theme.shape.borderRadius
}));

export const StyledCardTypographyDivider = styled(Typography)<TypographyProps>`
	align-items: center;
	font-weight: ${({ theme }) => theme.typography.fontWeightBold};
	color: ${({ theme }) => theme.palette.grey[600]};
`;
