import { BombaRequest } from "../../interfaces/bomba-request.interface";
import { BombaStorageData, BombaSavedRequest } from "../../interfaces/storage.interface";
export declare class Storage {
    static storagePath: string;
    static data: BombaStorageData;
    static set(_data: any): void;
    static save(): void;
    static getRequests(): BombaSavedRequest[];
    static getRequest(namespace: string, name: string): BombaSavedRequest;
    static saveRequest(namespace: string, name: string, request: BombaRequest): void;
}
export declare const getBombaStorage: () => typeof Storage;
