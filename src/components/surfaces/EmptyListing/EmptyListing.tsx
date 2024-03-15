import { FC } from "react";

import { Stack, Typography } from "@mui/material";

import { Icon } from "@/components/data-display";
import { ButtonLink } from "@/components/inputs";
import { replaceDynamicSegmentPattern } from "@/router/router.helpers";

import { StyledEmptyListing } from "./EmptyListing.styles";
import { EmptyListingProps } from "./EmptyListing.types";

export const EmptyListing: FC<EmptyListingProps> = ({ title, description, IconComponent, buttonProps, height }) => {
	return (
		<StyledEmptyListing alignItems="center" justifyContent="center" sx={{ minHeight: height }}>
			<Stack alignItems="center">
				<Icon size="large" IconComponent={IconComponent} />
				<Stack sx={{ maxWidth: 400, mt: 2 }}>
					<Typography textAlign="center" variant="h5">
						{title}
					</Typography>
					<Typography textAlign="center" variant="body1" sx={{ mt: 1 }}>
						{description}
					</Typography>
				</Stack>
				{buttonProps && (
					<ButtonLink
						sx={{ mt: 2, alignSelf: "center" }}
						to={replaceDynamicSegmentPattern(buttonProps.urlMapping)}
						variant="contained"
					>
						{buttonProps.label}
					</ButtonLink>
				)}
			</Stack>
		</StyledEmptyListing>
	);
};
