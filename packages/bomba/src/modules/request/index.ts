import {IRequest, RequestMethod} from "../../interfaces/request.interface";

export const get = (
	url: string,
	headers: any = {}
) => {
	const request: IRequest = {
		method: RequestMethod.GET,
		url,
		headers
	};

}