import { FC } from "react";

import { useStyles } from "./Icon.styles";
import { IconProps } from "./Icon.types";

export const Icon: FC<IconProps> = ({ IconComponent, size = "small", ...rest }) => {
	const styles = useStyles(size);
	return <IconComponent sx={styles} {...rest} />;
};
