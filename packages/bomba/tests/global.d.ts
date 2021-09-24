export declare enum TestableServerMode {
    JSON = "json",
    URLENCODED = "urlencoded",
    RAW = "raw"
}
export declare const runTestableServer: (server: any, mode?: TestableServerMode) => Promise<any>;
