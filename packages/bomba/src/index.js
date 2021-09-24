"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBombaStorage = exports.head = exports.options = exports.del = exports.patch = exports.put = exports.post = exports.get = exports.Storage = void 0;
const request_1 = require("./modules/request");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return request_1.get; } });
Object.defineProperty(exports, "post", { enumerable: true, get: function () { return request_1.post; } });
Object.defineProperty(exports, "put", { enumerable: true, get: function () { return request_1.put; } });
Object.defineProperty(exports, "patch", { enumerable: true, get: function () { return request_1.patch; } });
Object.defineProperty(exports, "del", { enumerable: true, get: function () { return request_1.del; } });
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return request_1.options; } });
Object.defineProperty(exports, "head", { enumerable: true, get: function () { return request_1.head; } });
const storage_1 = require("./services/storage");
Object.defineProperty(exports, "Storage", { enumerable: true, get: function () { return storage_1.Storage; } });
Object.defineProperty(exports, "getBombaStorage", { enumerable: true, get: function () { return storage_1.getBombaStorage; } });
