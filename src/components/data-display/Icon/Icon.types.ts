import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

export type IconSize = "x-small" | "small" | "medium" | "large" | "x-large";
export type IconProps = Omit<SvgIconProps, "fontSize"> & { IconComponent: SvgIconComponent; size?: IconSize };
