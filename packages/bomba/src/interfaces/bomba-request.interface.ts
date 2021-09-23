export enum RequestMethod {
	GET = "get",
	POST = "post",
	PATCH = "patch",
	DELETE = "delete",
	OPTIONS = "options"
}

export interface IRequest {
	headers: any
	method: string
	url: string
	data?: any
}