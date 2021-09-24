import express, {Application, RequestHandler, ResponseHandler} from "express";
import {runTestableServer, TestableServerMode} from "./global";
import {BombaResponse, del, get, head, options, patch, post, put} from "bomba";

describe("bomba.get()", () => {
	const testableServer: Application = express();
	let listener;

	beforeAll(async () => {
		listener = await runTestableServer(testableServer);
	});

	it("Should make a get request", () => {
		return new Promise<void>((resolve, reject) => {
			const expectedBody = {
				hello: "World"
			};
			testableServer.get("/_success", (req: RequestHandler, res: ResponseHandler) => {
				res.json(expectedBody);
			});
			get(`http://localhost:${listener.address().port}/_success`)
				.then((response: BombaResponse) => {
					expect(response.statusCode).toEqual(200);
					expect(response.data).toEqual(expectedBody);
					resolve();
				})
				.catch((e) => reject(e));
		});
	});

	it("Should return 404 if page doesn't exist", () => {
		return new Promise<void>((resolve, reject) => {
			testableServer.get("/_404", (req: RequestHandler, res: ResponseHandler) => {
				res.status(404).send();
			});
			get(`http://localhost:${listener.address().port}/_404`)
				.then((response: BombaResponse) => {
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

	it("Should make a post request with json data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer);
		testableServer.post("/_success", (req: RequestHandler, res: ResponseHandler) => {
			res.json(req.body);
		});
		const expectedBody = { hello: "World" };
		return new Promise<void>((resolve, reject) => {
			post(`http://localhost:${listener.address().port}/_success`, expectedBody)
				.then((response: BombaResponse) => {
					listener.close();
					expect(response.statusCode).toEqual(200);
					expect(response.data).toEqual(expectedBody);
					resolve();
				})
				.catch((e) => reject(e));
		});
	});

	it("Should make a post request with text data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer, TestableServerMode.RAW);
		testableServer.post("/_success", (req: RequestHandler, res: ResponseHandler) => {
			res.send(req.body);
		});
		const expectedBody = "Hello, World!";
		return new Promise<void>((resolve, reject) => {
			post(`http://localhost:${listener.address().port}/_success`, expectedBody, { "Content-Type": "text/plain" })
				.then((response: BombaResponse) => {
					listener.close();
					expect(response.statusCode).toEqual(200);
					expect(response.data).toEqual(expectedBody);
					resolve();
				})
				.catch((e) => reject(e));
		});
	});
});

describe("bomba.put()", () => {

	it("Should make a post request with json data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer);
		testableServer.put("/_success", (req: RequestHandler, res: ResponseHandler) => {
			res.json(req.body);
		});
		const expectedBody = { hello: "World" };
		return new Promise<void>((resolve, reject) => {
			put(`http://localhost:${listener.address().port}/_success`, expectedBody)
				.then((response: BombaResponse) => {
					listener.close();
					expect(response.statusCode).toEqual(200);
					expect(response.data).toEqual(expectedBody);
					resolve();
				})
				.catch((e) => reject(e));
		});
	});

	it("Should make a post request with text data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer, TestableServerMode.RAW);
		testableServer.post("/_success", (req: RequestHandler, res: ResponseHandler) => {
			res.send(req.body);
		});
		const expectedBody = "Hello, World!";
		return new Promise<void>((resolve, reject) => {
			post(`http://localhost:${listener.address().port}/_success`, expectedBody, { "Content-Type": "text/plain" })
				.then((response: BombaResponse) => {
					listener.close();
					expect(response.statusCode).toEqual(200);
					expect(response.data).toEqual(expectedBody);
					resolve();
				})
				.catch((e) => reject(e));
		});
	});
});

describe("bomba.patch()", () => {

	it("Should make a post request with json data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer);
		testableServer.patch("/_success", (req: RequestHandler, res: ResponseHandler) => {
			res.json(req.body);
		});
		const expectedBody = { hello: "World" };
		return new Promise<void>((resolve, reject) => {
			patch(`http://localhost:${listener.address().port}/_success`, expectedBody)
				.then((response: BombaResponse) => {
					listener.close();
					expect(response.statusCode).toEqual(200);
					expect(response.data).toEqual(expectedBody);
					resolve();
				})
				.catch((e) => reject(e));
		});
	});

	it("Should make a post request with text data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer, TestableServerMode.RAW);
		testableServer.post("/_success", (req: RequestHandler, res: ResponseHandler) => {
			res.send(req.body);
		});
		const expectedBody = "Hello, World!";
		return new Promise<void>((resolve, reject) => {
			post(`http://localhost:${listener.address().port}/_success`, expectedBody, { "Content-Type": "text/plain" })
				.then((response: BombaResponse) => {
					listener.close();
					expect(response.statusCode).toEqual(200);
					expect(response.data).toEqual(expectedBody);
					resolve();
				})
				.catch((e) => reject(e));
		});
	});
});

describe("bomba.options()", () => {

	it("Should make a post request with json data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer);
		const expectedBody = { hello: "World" };
		return new Promise<void>((resolve, reject) => {
			testableServer.options("/_success", (req: RequestHandler, res: ResponseHandler) => {
				expect(req.body).toEqual(expectedBody);
				res.json(req.body);
			});
			options(`http://localhost:${listener.address().port}/_success`, expectedBody)
				.then((response: BombaResponse) => {
					listener.close();
					resolve();
				})
				.catch((e) => reject(e));
		});
	});

	it("Should make a post request with text data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer, TestableServerMode.RAW);
		testableServer.post("/_success", (req: RequestHandler, res: ResponseHandler) => {
			res.send(req.body);
		});
		const expectedBody = "Hello, World!";
		return new Promise<void>((resolve, reject) => {
			post(`http://localhost:${listener.address().port}/_success`, expectedBody, { "Content-Type": "text/plain" })
				.then((response: BombaResponse) => {
					listener.close();
					expect(response.statusCode).toEqual(200);
					expect(response.data).toEqual(expectedBody);
					resolve();
				})
				.catch((e) => reject(e));
		});
	});
});

describe("bomba.del()", () => {

	it("Should make a delete request with json data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer);
		const expectedBody = { hello: "World" };
		return new Promise<void>((resolve, reject) => {
			testableServer.use("/_success", (req: RequestHandler, res: ResponseHandler) => {
				expect(req.body).toEqual(expectedBody);
				res.json(req.body);
			});
			del(`http://localhost:${listener.address().port}/_success`, expectedBody)
				.then((response: BombaResponse) => {
					listener.close();
					resolve();
				})
				.catch((e) => reject(e));
		});
	});

	it("Should make a post request with text data", async () => {
		const testableServer: Application = express();
		const listener = await runTestableServer(testableServer, TestableServerMode.RAW);
		const expectedBody = "Hello, World!";
		return new Promise<void>((resolve, reject) => {
			testableServer.delete("/_success", (req: RequestHandler, res: ResponseHandler) => {
				expect(req.body).toEqual(expectedBody);
				res.json(req.body);
			});
			del(`http://localhost:${listener.address().port}/_success`, expectedBody)
				.then((response: BombaResponse) => {
					listener.close();
					resolve();
				})
				.catch((e) => reject(e));
		});
	});
});