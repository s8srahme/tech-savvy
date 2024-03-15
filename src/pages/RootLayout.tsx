/**
 * By default, react-router-dom re-renders the entire page when you click on a link. Ideally, it should only reload the
 * content area of the template. To achieve that, you can define a Layout component which is an UI (e.g. containing
 * header, footer, side menu) that is shared between multiple pages. On navigation, layouts preserve state, remain
 * interactive and do not re-render. Layouts can also be nested. The component should accept an <Outlet /> that will
 * be populated with a child page during rendering.
 *
 * Outlet allows a parent route element to render its child route elements, i.e. it will be replaced by child page
 * components.
 *
 * The top-most layout is called the Root Layout. This required layout is shared across all pages in your application.
 *
 *
 * F L U I D  C O N T A I N E R
 *
 * The container is a layout element that centers your content horizontally. A fluid container width is bounded by the
 * maxWidth prop value. As the screen grows, the container fluidly expands to fill the space but it will stop growing
 * at the specified maxWidth (e.g. xl breakpoint).
 */

import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Box, Container, Stack } from "@mui/material";

import { AppBar, Drawer, Footer } from "@/components/navigation";
import { DrawerWidth } from "@/components/navigation/Drawer/Drawer.constants";
import { StyledDrawerHeader } from "@/components/navigation/Drawer/Drawer.styles";
import { useLayout } from "@/utils/hooks";
import { LayoutProvider } from "@/utils/providers";

import { APP_BAR_LINK_MAPPINGS, DRAWER_LIST_MAPPINGS, FooterLinkMapping } from "./RootLayout.constants";

export const RootLayout: FC = () => {
	const { isDrawerOpen } = useLayout();
	return (
		<LayoutProvider>
			<Box sx={{ display: "flex" }}>
				<AppBar linkMappings={APP_BAR_LINK_MAPPINGS} />
				<Drawer listMappings={DRAWER_LIST_MAPPINGS} />
				<Stack
					component="main"
					flexGrow={1}
					minHeight="100vh"
					justifyContent="space-between"
					sx={{
						width: `calc(100% - ${isDrawerOpen ? DrawerWidth.EXPAND : DrawerWidth.COLLAPSE}px)`
					}}
				>
					<StyledDrawerHeader spacer />
					<Container maxWidth="xl" sx={{ flexGrow: 1, py: 3 }}>
						<Outlet />
					</Container>
					<Footer linkMapping={FooterLinkMapping} />
				</Stack>
			</Box>
		</LayoutProvider>
	);
};
