import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";

import { StyledSkeletonProps } from "./Skeleton.types";

export const StyledSkeleton = styled(Skeleton)<StyledSkeletonProps>({
	"&::after": {
		animationDuration: "1.5s",
		animationTimingFunction: "ease-in-out"
	}
});
