"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestableServer = exports.TestableServerMode = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const pick_port_helper_1 = require("./helpers/pick-port.helper");
var TestableServerMode;
(function (TestableServerMode) {
    TestableServerMode["JSON"] = "json";
    TestableServerMode["URLENCODED"] = "urlencoded";
    TestableServerMode["RAW"] = "raw";
})(TestableServerMode = exports.TestableServerMode || (exports.TestableServerMode = {}));
const runTestableServer = (server, mode = TestableServerMode.JSON) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        server.use(body_parser_1.default.json());
        server.use(body_parser_1.default.urlencoded({ extended: false }));
        server.use(body_parser_1.default.text());
        const listener = server.listen(yield pick_port_helper_1.pickPort(20000, 30000), () => {
            resolve(listener);
        });
    }));
};
exports.runTestableServer = runTestableServer;
// export const stopTestableServer = (server: Application) => server.stop();
