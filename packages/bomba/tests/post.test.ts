import express, {Application, RequestHandler, ResponseHandler} from "express";
import {runTestableServer, TestableServerMode} from "./global";
import {BombaResponse, post} from "bomba";

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