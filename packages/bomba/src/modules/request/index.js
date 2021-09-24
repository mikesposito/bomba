"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.head = exports.options = exports.patch = exports.put = exports.post = exports.get = void 0;
const helper_1 = require("./helper");
/**
 * GET
 * @param endpoint
 * @param headers
 */
const get = (endpoint, headers = {}) => {
    return new Promise((resolve, reject) => {
        try {
            helper_1._buildHttpRequest({
                url: endpoint,
                method: "get",
                headers,
            }, resolve);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.get = get;
/**
 * POST
 * @param endpoint
 * @param data
 * @param headers
 */
const post = (endpoint, data = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        try {
            helper_1._buildHttpRequest({
                url: endpoint,
                method: "post",
                headers,
                data
            }, resolve);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.post = post;
/**
 * PUT
 * @param endpoint
 * @param data
 * @param headers
 */
const put = (endpoint, data = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        try {
            helper_1._buildHttpRequest({
                url: endpoint,
                method: "put",
                headers,
                data
            }, resolve);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.put = put;
/**
 * PATCH
 * @param endpoint
 * @param data
 * @param headers
 */
const patch = (endpoint, data = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        try {
            helper_1._buildHttpRequest({
                url: endpoint,
                method: "patch",
                headers,
                data
            }, resolve);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.patch = patch;
/**
 * OPTIONS
 * @param endpoint
 * @param headers
 * @param data
 */
const options = (endpoint, headers = {}, data = {}) => {
    return new Promise((resolve, reject) => {
        try {
            helper_1._buildHttpRequest({
                url: endpoint,
                method: "options",
                data,
                headers
            }, resolve);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.options = options;
/**
 * HEAD
 * @param endpoint
 * @param headers
 * @param data
 */
const head = (endpoint, headers = {}, data = {}) => {
    return new Promise((resolve, reject) => {
        try {
            helper_1._buildHttpRequest({
                url: endpoint,
                method: "head",
                data,
                headers
            }, resolve);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.head = head;
/**
 * DEL
 * @param endpoint
 * @param headers
 * @param data
 */
const del = (endpoint, headers = {}, data = {}) => {
    return new Promise((resolve, reject) => {
        try {
            helper_1._buildHttpRequest({
                url: endpoint,
                method: "delete",
                data,
                headers
            }, resolve);
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.del = del;
