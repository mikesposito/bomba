import { BombaRequest } from "./bomba-request.interface";
export interface BombaStorage {
}
export interface BombaStorageData {
    requests: BombaSavedRequest[];
}
export interface BombaSavedRequest {
    name: string;
    namespace: string;
    request: BombaRequest;
}
