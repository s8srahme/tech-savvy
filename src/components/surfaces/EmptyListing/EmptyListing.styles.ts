import { Stack, StackProps, styled } from "@mui/material";

export const StyledEmptyListing = styled(Stack)<StackProps>`
	width: 100%;
	border: ${({ theme }) => `1px solid ${theme.palette.divider}`};
	border-radius: ${({ theme }) => 3 * theme.shape.borderRadius}px;
`;
