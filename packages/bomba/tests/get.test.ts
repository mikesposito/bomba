import express, {Application, RequestHandler, response, ResponseHandler} from "express";
import {runTestableServer} from "./global";
import {get, BombaResponse} from "bomba";

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