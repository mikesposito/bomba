import { BombaRequest, BombaResponse } from "../../index";
import axios, {AxiosError, AxiosResponse} from 'axios';

export const _buildHttpRequest = (request: BombaRequest, callback) => {
	const { method, url, data, headers } = request;
	(method === "get" ?
		axios.get(url, { headers })
	: axios[method](url, data, { headers }))
		.then((response: AxiosResponse) => {
			callback({
				statusCode: response.status,
				data: response.data,
				headers: response.headers
			} as BombaResponse);
		})
		.catch((error: AxiosError) => {
			callback({
				statusCode: error.response?.status || error.code,
				data: error.response?.data || error.message,
				headers: error.response?.headers || {}
			});
		});
}