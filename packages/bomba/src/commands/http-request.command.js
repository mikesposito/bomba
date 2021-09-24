"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const index_1 = require("../index");
require("colorts/lib/string");
const beautify_1 = __importDefault(require("beautify"));
const jsonpath_1 = __importDefault(require("jsonpath"));
const exec = (params) => {
    let data, headers, namespace, name, filter;
    if (params.options) {
        data = params.options.data;
        headers = params.options.headers;
        filter = params.options.filter;
        [namespace, name] = params.options.name.includes(":") ? params.options.name.split(":") : ["default", params.options.name];
    }
    const bombaRequestCommands = {
        get: index_1.get, post: index_1.post, put: index_1.put, patch: index_1.patch, options: index_1.options, del: index_1.del, head: index_1.head
    };
    if (name) {
        index_1.getBombaStorage()
            .saveRequest(namespace, name, {
            url: params.url,
            method: params.method,
            data,
            headers
        });
    }
    let savedRequest;
    if (!params.url.startsWith("http") && params.url.includes(":")) {
        const [savedNamespace, savedName] = params.url.includes(":") ? params.url.split(":") : ["default", params.url];
        if (index_1.Storage.getRequest(params.url.split(":")[0], params.url.split(":")[1])) {
            savedRequest = index_1.Storage.getRequest(savedNamespace, savedName).request;
            headers = savedRequest.headers;
            data = savedRequest.data;
        }
    }
    console.log("SAVED REQUEST:", savedRequest);
    bombaRequestCommands[params.command === "req" ? savedRequest.method : params.command]((savedRequest === null || savedRequest === void 0 ? void 0 : savedRequest.url) || params.url, ...(params.command = "get" ? [headers] : [data, headers]))
        .then(response => {
        const color = response.statusCode > 299 ? "red" : "green";
        console.log(">"[color], "Status Code: "[color], String(response.statusCode)[color]);
        console.log(">".white, "Response Type: ".gray, (response.headers["content-type"] || "Error").gray);
        if (filter) {
            console.log(">".green, "Selected: ".white, filterResponse(formatResponse(response), filter));
        }
        else
            console.log(">".green, "Response Body: ".white, formatResponse(response));
    });
};
exports.exec = exec;
const filterResponse = (data, filter) => {
    if (typeof data === "object")
        return jsonpath_1.default.query(data, filter);
    return data;
};
const formatResponse = (response) => {
    if (response.headers && response.headers["content-type"]) {
        if (response.headers["content-type"].startsWith("text/html"))
            return beautify_1.default(response.data, { format: "html" });
    }
    return response.data;
};
