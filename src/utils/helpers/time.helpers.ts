import {
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInMonths,
	differenceInSeconds,
	differenceInYears
} from "date-fns";

import { TimeDifference, TimeUnit } from "../types/helpers.types";

export const getTimeElapsed = (startDate: Date): TimeDifference => {
	const endDate = new Date();
	let difference = 0;
	let unit: TimeUnit = "second";

	if (differenceInYears(endDate, startDate) > 0) {
		difference = differenceInYears(endDate, startDate);
		unit = "year";
	} else if (differenceInMonths(endDate, startDate) > 0) {
		difference = differenceInMonths(endDate, startDate);
		unit = "month";
	} else if (differenceInDays(endDate, startDate) > 0) {
		difference = differenceInDays(endDate, startDate);
		unit = "day";
	} else if (differenceInHours(endDate, startDate) > 0) {
		difference = differenceInHours(endDate, startDate);
		unit = "hour";
	} else if (differenceInMinutes(endDate, startDate) > 0) {
		difference = differenceInMinutes(endDate, startDate);
		unit = "minute";
	} else if (differenceInSeconds(endDate, startDate) > 0) {
		difference = differenceInSeconds(endDate, startDate);
		unit = difference >= 5 ? "second" : "now";
	}

	return { difference, unit };
};
