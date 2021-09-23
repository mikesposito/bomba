import { BombaResponse } from "../../index";
import { _buildHttpRequest } from "./helper";

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