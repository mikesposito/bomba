import { BombaRequest } from "./interfaces/bomba-request.interface";
import { BombaResponse } from "./interfaces/bomba-response.interface";
import { BombaStorage, BombaStorageData, BombaSavedRequest } from "./interfaces/storage.interface";
import { get, post, put, patch, del, options, head } from "./modules/request";
import { Storage, getBombaStorage } from "./services/storage";
export { BombaRequest, BombaResponse, BombaStorage, BombaStorageData, BombaSavedRequest, Storage, get, post, put, patch, del, options, head, getBombaStorage };
