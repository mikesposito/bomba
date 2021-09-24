#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_line_args_1 = __importDefault(require("command-line-args"));
const bomba_cli_input_1 = require("./bomba-cli.input");
const http_request_command_1 = require("../commands/http-request.command");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const mainArg = command_line_args_1.default(bomba_cli_input_1.bombaCliInputArgs.command, { stopAtFirstUnknown: true });
    // Requests
    if (["get", "post", "put", "patch", "options", "delete", "head", "req"].includes(mainArg.command)) {
        const requestUrlArg = command_line_args_1.default(bomba_cli_input_1.bombaCliInputArgs.requestArgs.url, {
            argv: mainArg._unknown || [],
            stopAtFirstUnknown: true
        });
        const optionArgs = command_line_args_1.default(bomba_cli_input_1.bombaCliInputArgs.requestArgs.options, {
            argv: requestUrlArg._unknown || []
        });
        console.log(mainArg.command, requestUrlArg.url, optionArgs);
        http_request_command_1.exec({
            command: mainArg.command,
            url: requestUrlArg.url,
            options: optionArgs,
        });
    }
}))();
