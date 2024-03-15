import { useContext } from "react";

import { AuthContext, AuthContextState } from "../providers/AuthProvider";

export const useAuth = (): AuthContextState => useContext(AuthContext);
