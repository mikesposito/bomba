import { BombaResponse } from "../../index";
/**
 * GET
 * @param endpoint
 * @param headers
 */
export declare const get: (endpoint: string, headers?: any) => Promise<BombaResponse>;
/**
 * POST
 * @param endpoint
 * @param data
 * @param headers
 */
export declare const post: (endpoint: string, data?: any, headers?: any) => Promise<BombaResponse>;
/**
 * PUT
 * @param endpoint
 * @param data
 * @param headers
 */
export declare const put: (endpoint: string, data?: any, headers?: any) => Promise<BombaResponse>;
/**
 * PATCH
 * @param endpoint
 * @param data
 * @param headers
 */
export declare const patch: (endpoint: string, data?: any, headers?: any) => Promise<BombaResponse>;
/**
 * OPTIONS
 * @param endpoint
 * @param headers
 * @param data
 */
export declare const options: (endpoint: string, headers?: any, data?: any) => Promise<BombaResponse>;
/**
 * HEAD
 * @param endpoint
 * @param headers
 * @param data
 */
export declare const head: (endpoint: string, headers?: any, data?: any) => Promise<BombaResponse>;
/**
 * DEL
 * @param endpoint
 * @param headers
 * @param data
 */
export declare const del: (endpoint: string, headers?: any, data?: any) => Promise<BombaResponse>;
