import { ClientErrorResponse, ClientErrorStatusValue } from "./Page404.types";

const NotFoundResponse: ClientErrorResponse = {
	status: {
		value: 404,
		text: "Not found"
	},
	message: {
		title: "Yikes!",
		subtitle: "It seems like you are lost.",
		description: "The page you are looking for does not exist. How you got here remains a mystery."
	}
};
const BadRequestResponse: ClientErrorResponse = {
	status: {
		value: 400,
		text: "Bad request"
	},
	message: {
		title: "Uh-oh.",
		subtitle: "It seems like we encountered some tangles.",
		description: "An unexpected error has occurred. Return to the home page and remember: you have not seen anything."
	}
};
export const Page404Response: Record<ClientErrorStatusValue, ClientErrorResponse> = {
	400: BadRequestResponse,
	404: NotFoundResponse
};
