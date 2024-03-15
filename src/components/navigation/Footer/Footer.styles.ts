import { Stack, StackProps, styled } from "@mui/material";

export const StyledFooter = styled(Stack)<StackProps>`
	align-items: center;
	width: 100%;
	padding: ${({ theme }) => theme.spacing(3)};
	background-color: ${({ theme }) => theme.palette.background.paper};
	border-top: ${({ theme }) => `1px solid ${theme.palette.divider}`};
`;
