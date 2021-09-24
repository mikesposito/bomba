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
const express_1 = __importDefault(require("express"));
const global_1 = require("./global");
const bomba_1 = require("bomba");
describe("bomba.get()", () => {
    const testableServer = express_1.default();
    let listener;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        listener = yield global_1.runTestableServer(testableServer);
    }));
    it("Should make a get request", () => {
        return new Promise((resolve, reject) => {
            const expectedBody = {
                hello: "World"
            };
            testableServer.get("/_success", (req, res) => {
                res.json(expectedBody);
            });
            bomba_1.get(`http://localhost:${listener.address().port}/_success`)
                .then((response) => {
                expect(response.statusCode).toEqual(200);
                expect(response.data).toEqual(expectedBody);
                resolve();
            })
                .catch((e) => reject(e));
        });
    });
    it("Should return 404 if page doesn't exist", () => {
        return new Promise((resolve, reject) => {
            testableServer.get("/_404", (req, res) => {
                res.status(404).send();
            });
            bomba_1.get(`http://localhost:${listener.address().port}/_404`)
                .then((response) => {
                expect(response.statusCode).toEqual(404);
                resolve();
            })
                .catch((e) => reject(e));
        });
    });
    afterAll((done) => {
        listener.close();
        done();
    });
});
describe("bomba.post()", () => {
    it("Should make a post request with json data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer);
        testableServer.post("/_success", (req, res) => {
            res.json(req.body);
        });
        const expectedBody = { hello: "World" };
        return new Promise((resolve, reject) => {
            bomba_1.post(`http://localhost:${listener.address().port}/_success`, expectedBody)
                .then((response) => {
                listener.close();
                expect(response.statusCode).toEqual(200);
                expect(response.data).toEqual(expectedBody);
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
    it("Should make a post request with text data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer, global_1.TestableServerMode.RAW);
        testableServer.post("/_success", (req, res) => {
            res.send(req.body);
        });
        const expectedBody = "Hello, World!";
        return new Promise((resolve, reject) => {
            bomba_1.post(`http://localhost:${listener.address().port}/_success`, expectedBody, { "Content-Type": "text/plain" })
                .then((response) => {
                listener.close();
                expect(response.statusCode).toEqual(200);
                expect(response.data).toEqual(expectedBody);
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
});
describe("bomba.put()", () => {
    it("Should make a post request with json data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer);
        testableServer.put("/_success", (req, res) => {
            res.json(req.body);
        });
        const expectedBody = { hello: "World" };
        return new Promise((resolve, reject) => {
            bomba_1.put(`http://localhost:${listener.address().port}/_success`, expectedBody)
                .then((response) => {
                listener.close();
                expect(response.statusCode).toEqual(200);
                expect(response.data).toEqual(expectedBody);
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
    it("Should make a post request with text data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer, global_1.TestableServerMode.RAW);
        testableServer.post("/_success", (req, res) => {
            res.send(req.body);
        });
        const expectedBody = "Hello, World!";
        return new Promise((resolve, reject) => {
            bomba_1.post(`http://localhost:${listener.address().port}/_success`, expectedBody, { "Content-Type": "text/plain" })
                .then((response) => {
                listener.close();
                expect(response.statusCode).toEqual(200);
                expect(response.data).toEqual(expectedBody);
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
});
describe("bomba.patch()", () => {
    it("Should make a post request with json data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer);
        testableServer.patch("/_success", (req, res) => {
            res.json(req.body);
        });
        const expectedBody = { hello: "World" };
        return new Promise((resolve, reject) => {
            bomba_1.patch(`http://localhost:${listener.address().port}/_success`, expectedBody)
                .then((response) => {
                listener.close();
                expect(response.statusCode).toEqual(200);
                expect(response.data).toEqual(expectedBody);
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
    it("Should make a post request with text data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer, global_1.TestableServerMode.RAW);
        testableServer.post("/_success", (req, res) => {
            res.send(req.body);
        });
        const expectedBody = "Hello, World!";
        return new Promise((resolve, reject) => {
            bomba_1.post(`http://localhost:${listener.address().port}/_success`, expectedBody, { "Content-Type": "text/plain" })
                .then((response) => {
                listener.close();
                expect(response.statusCode).toEqual(200);
                expect(response.data).toEqual(expectedBody);
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
});
describe("bomba.options()", () => {
    it("Should make a post request with json data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer);
        const expectedBody = { hello: "World" };
        return new Promise((resolve, reject) => {
            testableServer.options("/_success", (req, res) => {
                expect(req.body).toEqual(expectedBody);
                res.json(req.body);
            });
            bomba_1.options(`http://localhost:${listener.address().port}/_success`, expectedBody)
                .then((response) => {
                listener.close();
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
    it("Should make a post request with text data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer, global_1.TestableServerMode.RAW);
        testableServer.post("/_success", (req, res) => {
            res.send(req.body);
        });
        const expectedBody = "Hello, World!";
        return new Promise((resolve, reject) => {
            bomba_1.post(`http://localhost:${listener.address().port}/_success`, expectedBody, { "Content-Type": "text/plain" })
                .then((response) => {
                listener.close();
                expect(response.statusCode).toEqual(200);
                expect(response.data).toEqual(expectedBody);
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
});
describe("bomba.del()", () => {
    it("Should make a delete request with json data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer);
        const expectedBody = { hello: "World" };
        return new Promise((resolve, reject) => {
            testableServer.use("/_success", (req, res) => {
                expect(req.body).toEqual(expectedBody);
                res.json(req.body);
            });
            bomba_1.del(`http://localhost:${listener.address().port}/_success`, expectedBody)
                .then((response) => {
                listener.close();
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
    it("Should make a post request with text data", () => __awaiter(void 0, void 0, void 0, function* () {
        const testableServer = express_1.default();
        const listener = yield global_1.runTestableServer(testableServer, global_1.TestableServerMode.RAW);
        const expectedBody = "Hello, World!";
        return new Promise((resolve, reject) => {
            testableServer.delete("/_success", (req, res) => {
                expect(req.body).toEqual(expectedBody);
                res.json(req.body);
            });
            bomba_1.del(`http://localhost:${listener.address().port}/_success`, expectedBody)
                .then((response) => {
                listener.close();
                resolve();
            })
                .catch((e) => reject(e));
        });
    }));
});
