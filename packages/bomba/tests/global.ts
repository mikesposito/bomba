import { Application } from "express";
import bodyParser from "body-parser";
import { pickPort } from "./helpers/pick-port.helper";

export enum TestableServerMode {
	JSON = "json",
	URLENCODED = "urlencoded",
	RAW = "raw",
}

export const runTestableServer = (server: Application, mode: TestableServerMode = TestableServerMode.JSON) => {
	return new Promise<any>(async (resolve, reject) => {
			server.use(bodyParser.json())
			server.use(bodyParser.urlencoded({ extended: false }))
			server.use(bodyParser.text())
		const listener = server.listen(await pickPort(20000, 30000), () => {
			resolve(listener);
		});
	});
}

// export const stopTestableServer = (server: Application) => server.stop();