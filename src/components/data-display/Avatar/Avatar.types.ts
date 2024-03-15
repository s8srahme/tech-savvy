import { AvatarProps as MuiAvatarProps } from "@mui/material";

export type AvatarSize = "small" | "large" | "medium";
export type AvatarProps = {
	src?: string | undefined;
	fullName: string;
	size: AvatarSize;
	loading?: boolean | undefined;
};

export type StyledAvatarProps = Omit<MuiAvatarProps, "size"> & { bgColor: string; size: AvatarSize };
