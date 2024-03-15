import { useContext } from "react";

import { LayoutContext, LayoutContextState } from "../providers/LayoutProvider";

export const useLayout = (): LayoutContextState => useContext(LayoutContext);
