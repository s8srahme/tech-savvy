import { FC } from "react";

import { Avatar as MuiAvatar, Typography } from "@mui/material";

import { Skeleton } from "@/components/feedback";
import { fullNameToInitials, textToHexadecimalColor } from "@/utils/helpers";
import { useTheme } from "@/utils/hooks";

import { useStyles } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

export const Avatar: FC<AvatarProps> = ({ loading, fullName, src, size = "large" }) => {
	const { theme } = useTheme();
	const styles = useStyles(theme, { bgColor: textToHexadecimalColor(fullName), size });

	/**
	 * If there is an error loading the avatar image, the component falls back to the provided children.
	 */
	if (!loading)
		return (
			<MuiAvatar sx={styles.avatar__root} alt={fullName} src={src}>
				<Typography sx={styles.avatar__typography} component="div" variant={size === "small" ? "body2" : "h6"}>
					{fullNameToInitials(fullName)}
				</Typography>
			</MuiAvatar>
		);
	return <Skeleton variant="circular" sx={styles.avatar__skeleton} />;
};
