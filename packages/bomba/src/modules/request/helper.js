"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._buildHttpRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const _buildHttpRequest = (request, callback) => {
    const { method, url, data, headers } = request;
    (method === "get" ?
        axios_1.default.get(url, { headers })
        : axios_1.default[method](url, data, { headers }))
        .then((response) => {
        callback({
            statusCode: response.status,
            data: response.data,
            headers: response.headers
        });
    })
        .catch((error) => {
        var _a, _b, _c;
        callback({
            statusCode: ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || error.code,
            data: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message,
            headers: ((_c = error.response) === null || _c === void 0 ? void 0 : _c.headers) || {}
        });
    });
};
exports._buildHttpRequest = _buildHttpRequest;
