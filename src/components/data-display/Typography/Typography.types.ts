import type { TypographyProps as MuiTypographyProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

type CommonProps = { lineClamp?: number; variant: Variant };

export type TypographyProps = Omit<MuiTypographyProps, "variant"> & CommonProps & { loading?: boolean | undefined };

export type StyledTypographyProps = Omit<MuiTypographyProps, "variant"> & CommonProps;
