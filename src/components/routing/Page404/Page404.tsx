import { FC } from "react";

import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

import { ButtonLink } from "@/components/inputs";
import { RoutePathMapping } from "@/router/router.routes";

import { Page404Response } from "./Page404.constants";
import { Page404Props } from "./Page404.types";

export const Page404: FC<Page404Props> = ({ status }) => {
	const {
		message: { title, subtitle, description }
	} = Page404Response[status];
	return (
		<Grid container columnSpacing={5} sx={{ height: "100vh" }} flexDirection="row">
			<Grid item container alignItems="center" justifyContent="flex-end" xs={6}>
				<Box sx={{ width: 400 }}>
					<Typography variant="h1">{title}</Typography>
					<Typography variant="h5">{subtitle}</Typography>
					<Typography variant="body1" sx={{ mt: 2 }}>
						{description}
					</Typography>
					<ButtonLink sx={{ mt: 1.5 }} to={RoutePathMapping.home.HOME_ROOT} variant="contained">
						Take me home
					</ButtonLink>
				</Box>
			</Grid>
			<Grid item container alignItems="center" justifyContent="flex-start" xs={6}>
				<Stack
					divider={<Divider orientation="vertical" sx={{ borderRightWidth: 10, mr: 5 }} flexItem />}
					flexDirection="row"
					alignItems="center"
				>
					<Box />
					<Typography variant="h1">{status}</Typography>
				</Stack>
			</Grid>
		</Grid>
	);
};
