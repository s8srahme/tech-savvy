import { useContext } from "react";

import { ThemeContext, ThemeContextState } from "../providers/ThemeProvider";

export const useTheme = (): ThemeContextState => useContext(ThemeContext);
