#!/usr/bin/env node
import CommandLineArgs from 'command-line-args';
import { bombaCliInputArgs } from "./bomba-cli.input";
import { exec as execHttpRequest } from "../commands/http-request.command";

(async () => {
	const mainArg = CommandLineArgs(bombaCliInputArgs.command, { stopAtFirstUnknown: true });
	// Requests
	if(["get", "post", "put", "patch", "options", "delete", "head"].includes(mainArg.command)) {
		const requestUrlArg = CommandLineArgs(
			bombaCliInputArgs.requestArgs.url,
			{
				argv: mainArg._unknown || [],
				stopAtFirstUnknown: true
			});
		const optionArgs = CommandLineArgs(
			bombaCliInputArgs.requestArgs.options,
			{
				argv: requestUrlArg._unknown || []
			}
		);
		execHttpRequest({
			command: mainArg.command,
			url: requestUrlArg.url,
			options: optionArgs.options
		});
	}
})();