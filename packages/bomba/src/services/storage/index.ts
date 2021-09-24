import path from 'path';
import fs from 'fs';
import os from 'os';
import { BombaRequest } from "../../interfaces/bomba-request.interface";
import { BombaStorage, BombaStorageData, BombaSavedRequest } from "../../interfaces/storage.interface";

const CLEAN_STORAGE: BombaStorageData = {
	requests: []
};

export class Storage {
	static storagePath: string;
	static data: BombaStorageData;

	public static set(_data) {
		Storage.data = _data;
	}

	public static save() {
		fs.writeFileSync(
			Storage.storagePath,
			JSON.stringify(this.data)
		);
	}

	public static getRequests(): BombaSavedRequest[] {
		return Storage.data?.requests || [];
	}

	public static getRequest(namespace: string, name: string): BombaSavedRequest {
		return Storage.data?.requests?.find(r => r.name === name && r.namespace === namespace);
	}

	public static saveRequest(namespace: string, name: string, request: BombaRequest): void {
		if(Storage.getRequest(namespace, name))
			Storage.getRequest(namespace, name).request = request;
		else
			Storage.data.requests.push({
				namespace,
				name,
				request
			});
		Storage.save();
	}
}

export const getBombaStorage = () => {
	try {
		Storage.storagePath = path.resolve(os.homedir(), ".bomba.json");
		if(!fs.existsSync(Storage.storagePath)) {
			Storage.data = CLEAN_STORAGE;
			fs.writeFileSync(Storage.storagePath, Buffer.from(JSON.stringify(CLEAN_STORAGE), "utf-8"));
		} else {
			Storage.data = JSON.parse(fs.readFileSync(Storage.storagePath, "utf-8")) as BombaStorageData;
		}
	} catch(e) {
		new Error("Unable to read from bomba storage. Please clear your ~/.bomba.json and retry.")
	}
	return Storage;
};