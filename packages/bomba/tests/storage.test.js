"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bomba_1 = require("bomba");
describe("bomba.Storage", () => {
    it("Should return a BombaStorage", () => {
        expect(bomba_1.getBombaStorage().data).toHaveProperty("requests");
    });
    it("Should save a request and then return with a get", () => {
        const newRequest = {
            headers: {},
            method: "get",
            url: "http://localhost"
        };
        bomba_1.Storage.saveRequest("test", "my-request", newRequest);
        expect(bomba_1.Storage.getRequest("test", "my-request").request.url).toEqual(newRequest.url);
    });
});
