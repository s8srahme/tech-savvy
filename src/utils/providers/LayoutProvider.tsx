import { Dispatch, FC, PropsWithChildren, createContext, useMemo, useState } from "react";

export interface LayoutContextState {
	isDrawerOpen: boolean;
	setIsDrawerOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutContext = createContext<LayoutContextState>({} as LayoutContextState);

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const contextValue: LayoutContextState = useMemo(
		() => ({
			isDrawerOpen,
			setIsDrawerOpen
		}),
		[isDrawerOpen]
	);
	return <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>;
};
