"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBombaStorage = exports.Storage = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const CLEAN_STORAGE = {
    requests: []
};
class Storage {
    static set(_data) {
        Storage.data = _data;
    }
    static save() {
        fs_1.default.writeFileSync(Storage.storagePath, JSON.stringify(this.data));
    }
    static getRequests() {
        var _a;
        return ((_a = Storage.data) === null || _a === void 0 ? void 0 : _a.requests) || [];
    }
    static getRequest(namespace, name) {
        var _a, _b;
        return (_b = (_a = Storage.data) === null || _a === void 0 ? void 0 : _a.requests) === null || _b === void 0 ? void 0 : _b.find(r => r.name === name && r.namespace === namespace);
    }
    static saveRequest(namespace, name, request) {
        if (Storage.getRequest(namespace, name))
            Storage.getRequest(namespace, name).request = request;
        else
            Storage.data.requests.push({
                namespace,
                name,
                request
            });
        Storage.save();
    }
}
exports.Storage = Storage;
const getBombaStorage = () => {
    try {
        Storage.storagePath = path_1.default.resolve(os_1.default.homedir(), ".bomba.json");
        if (!fs_1.default.existsSync(Storage.storagePath)) {
            Storage.data = CLEAN_STORAGE;
            fs_1.default.writeFileSync(Storage.storagePath, Buffer.from(JSON.stringify(CLEAN_STORAGE), "utf-8"));
        }
        else {
            Storage.data = JSON.parse(fs_1.default.readFileSync(Storage.storagePath, "utf-8"));
        }
    }
    catch (e) {
        new Error("Unable to read from bomba storage. Please clear your ~/.bomba.json and retry.");
    }
    return Storage;
};
exports.getBombaStorage = getBombaStorage;
