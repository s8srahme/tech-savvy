import { FC } from "react";

import { StyledSkeleton } from "./Skeleton.styles";
import { SkeletonProps } from "./Skeleton.types";

export const Skeleton: FC<SkeletonProps> = (props) => {
	return <StyledSkeleton animation="wave" {...props} />;
};
