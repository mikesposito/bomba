"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickPort = void 0;
const portastic_1 = __importDefault(require("portastic"));
const pickPort = (min, max) => {
    return new Promise((resolve, reject) => {
        const randomlyPicked = Math.floor(Math.random() * (max - min) + min);
        portastic_1.default
            .test(Math.floor(randomlyPicked))
            .then(isOpen => resolve(isOpen ? randomlyPicked : exports.pickPort(min, max)))
            .catch(e => reject(e));
    });
};
exports.pickPort = pickPort;
