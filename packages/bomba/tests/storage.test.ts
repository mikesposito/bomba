import {
	BombaRequest,
	getBombaStorage,
	Storage
} from "bomba";

describe("bomba.Storage", () => {

	it("Should return a BombaStorage", () => {
		expect(getBombaStorage().data).toHaveProperty("requests");
	});

	it("Should save a request and then return with a get", () => {
		const newRequest: BombaRequest = {
			headers: {},
			method: "get",
			url: "http://localhost"
		}
		Storage.saveRequest("test", "my-request", newRequest);
		expect(Storage.getRequest("test", "my-request").request.url).toEqual(newRequest.url);
	});

});