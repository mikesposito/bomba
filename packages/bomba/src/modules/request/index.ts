import { BombaResponse } from "../../index";
import { _buildHttpRequest } from "./helper";

/**
 * GET
 * @param endpoint
 * @param headers
 */
export const get = (
	endpoint: string,
	headers: any = {}
): Promise<BombaResponse> => {
	return new Promise<BombaResponse>((resolve, reject) => {
		try {
			_buildHttpRequest({
				url: endpoint,
				method: "get",
				headers,
			}, resolve);
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * POST
 * @param endpoint
 * @param data
 * @param headers
 */
export const post = (
	endpoint: string,
	data: any = {},
	headers: any = {}
): Promise<BombaResponse> => {
	return new Promise<BombaResponse>((resolve, reject) => {
		try {
			_buildHttpRequest({
				url: endpoint,
				method: "post",
				headers,
				data
			}, resolve);
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * PUT
 * @param endpoint
 * @param data
 * @param headers
 */
export const put = (
	endpoint: string,
	data: any = {},
	headers: any = {}
): Promise<BombaResponse> => {
	return new Promise<BombaResponse>((resolve, reject) => {
		try {
			_buildHttpRequest({
				url: endpoint,
				method: "put",
				headers,
				data
			}, resolve);
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * PATCH
 * @param endpoint
 * @param data
 * @param headers
 */
export const patch = (
	endpoint: string,
	data: any = {},
	headers: any = {}
): Promise<BombaResponse> => {
	return new Promise<BombaResponse>((resolve, reject) => {
		try {
			_buildHttpRequest({
				url: endpoint,
				method: "patch",
				headers,
				data
			}, resolve);
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * OPTIONS
 * @param endpoint
 * @param headers
 * @param data
 */
export const options = (
	endpoint: string,
	headers: any = {},
	data: any = {}
): Promise<BombaResponse> => {
	return new Promise<BombaResponse>((resolve, reject) => {
		try {
			_buildHttpRequest({
				url: endpoint,
				method: "options",
				data,
				headers
			}, resolve);
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * HEAD
 * @param endpoint
 * @param headers
 * @param data
 */
export const head = (
	endpoint: string,
	headers: any = {},
	data: any = {}
): Promise<BombaResponse> => {
	return new Promise<BombaResponse>((resolve, reject) => {
		try {
			_buildHttpRequest({
				url: endpoint,
				method: "head",
				data,
				headers
			}, resolve);
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * DEL
 * @param endpoint
 * @param headers
 * @param data
 */
export const del = (
	endpoint: string,
	headers: any = {},
	data: any = {}
): Promise<BombaResponse> => {
	return new Promise<BombaResponse>((resolve, reject) => {
		try {
			_buildHttpRequest({
				url: endpoint,
				method: "delete",
				data,
				headers
			}, resolve);
		} catch (e) {
			reject(e);
		}
	});
}