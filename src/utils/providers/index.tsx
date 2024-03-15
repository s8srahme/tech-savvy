import { FC } from "react";

import { AuthProvider } from "./AuthProvider";
import { RouterProvider } from "./RouterProvider";
import { StoreProvider } from "./StoreProvider";
import { ThemeProvider } from "./ThemeProvider";

export const RootProvider: FC = () => (
	<StoreProvider>
		<ThemeProvider>
			<AuthProvider>
				<RouterProvider />
			</AuthProvider>
		</ThemeProvider>
	</StoreProvider>
);
export { LayoutProvider } from "./LayoutProvider";
