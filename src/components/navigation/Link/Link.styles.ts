import styled from "@emotion/styled";
import { Link } from "@mui/material";

import { StyledLinkProps } from "./Link.types";

export const StyledLink = styled(Link)<StyledLinkProps>(({ disabled, theme }) => ({
	fontWeight: theme.typography.fontWeightMedium,
	...(disabled && { color: theme.palette.text.disabled, cursor: "default" })
}));
