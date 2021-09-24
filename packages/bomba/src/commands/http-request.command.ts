import { get, post, put, patch, options, del, head, getBombaStorage } from '../index';
import 'colorts/lib/string';
import beautify from 'beautify';
import jsonpath from 'jsonpath';

export const exec = (params) => {
	let data, headers, namespace, name, filter;

	if(params.options) {
		data = params.options.data;
		headers = params.options.headers;
		filter = params.options.filter;
		[namespace, name] = params.options.name?.includes(":") ? params.options.name?.split(":") : ["default", params.options.name];
	}

	const bombaRequestCommands = {
		get, post, put, patch, options, del, head
	};

	if(name) {
		getBombaStorage()
			.saveRequest(namespace, name, {
				url: params.url,
				method: params.command,
				data,
				headers
			});
	}

	let savedRequest;
	if(!params.url.startsWith("http") && params.url.includes(":")) {
		const [savedNamespace, savedName] = params.url.includes(":") ? params.url.split(":") : ["default", params.url];
		savedRequest = getBombaStorage().getRequest(savedNamespace, savedName).request;
		if(savedRequest) {
			headers = savedRequest.headers;
			data = savedRequest.data;
		}
	}

	bombaRequestCommands[(params.command === "req" && savedRequest) ? savedRequest.method : params.command](savedRequest?.url || params.url, ...(params.command = "get" ? [headers] : [data, headers]))
		.then(response => {
			const color = response.statusCode > 299 ? "red" : "green";
			console.log(">"[color], "Status Code: "[color], String(response.statusCode)[color]);
			console.log(">".white, "Response Type: ".gray, (response.headers["content-type"] || "Error").gray);
			if(filter) {
				console.log(">".green, "Selected: ".white, filterResponse(formatResponse(response), filter));
			} else
				console.log(">".green, "Response Body: ".white, formatResponse(response));
		});
}

const filterResponse = (data, filter) => {
	if(typeof data === "object")
		return jsonpath.query(data, filter);
	return data;
}

const formatResponse = (response) => {
	if(response.headers && response.headers["content-type"]) {
		if(response.headers["content-type"].startsWith("text/html"))
			return beautify(response.data, { format: "html" });
	}
	return response.data;
}