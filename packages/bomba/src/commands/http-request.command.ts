import { get, post, put, patch, options, del, head } from 'bomba';
import 'colorts/lib/string';
import beautify from 'beautify';

export const exec = (params) => {
	let data, headers;
	if(params.options) {
		data = params.options.data;
		headers = params.options.headers;
	}
	const bombaRequestCommands = {
		get, post, put, patch, options, del, head
	};
	bombaRequestCommands[params.command](params.url, ...(params.command = "get" ? [headers] : [data, headers]))
		.then(response => {
			const color = response.statusCode > 299 ? "red" : "green";
			console.log(">"[color], "Status Code: "[color], String(response.statusCode)[color]);
			console.log(">".white, "Response Type: ".white, response.headers["content-type"]);
			console.log(">".green, "Response Body: ".gray, formatResponse(response));
		});
}

const formatResponse = (response) => {
	if(response.headers["content-type"].startsWith("application/json"))
		return beautify(response.data, { format: "json" });
	if(response.headers["content-type"].startsWith("text/html"))
		return beautify(response.data, { format: "html" });
	return response.data;
}