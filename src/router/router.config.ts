import { ApplicationModule } from "@/store/store.constants";

import type { PageConfig } from "./router.types";

// Extension to ApplicationModule for page types
export enum ApplicationPage {
	ROOT_LAYOUT = "rootLayout"
}

export const pagesConfig: PageConfig = {
	[ApplicationModule.ABOUT]: {
		ABOUT_ROOT: { enabled: false }
	}
};
