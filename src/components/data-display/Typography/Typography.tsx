import { FC } from "react";

import { Box, Typography as MuiTypography } from "@mui/material";

import { Skeleton } from "@/components/feedback";
import { mergeSxProps } from "@/theme/theme.helpers";
import { useTheme } from "@/utils/hooks";

import { useStyles } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

export const Typography: FC<TypographyProps> = ({ children, loading, variant, lineClamp = 1, noWrap, sx, ...rest }) => {
	const { theme } = useTheme();
	const styles = useStyles(theme, { variant, lineClamp, noWrap });
	const skeletonIds = Array.from({ length: lineClamp }, (_, index) => index.toString());

	if (!loading)
		return (
			<MuiTypography sx={mergeSxProps(styles.typography__root, sx)} variant={variant} {...rest}>
				{children}
			</MuiTypography>
		);
	return (
		<Box sx={sx}>
			{skeletonIds.map((skeletonId) => (
				<Skeleton key={skeletonId} variant="text" sx={styles.typography__skeleton} />
			))}
		</Box>
	);
};
