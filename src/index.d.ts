import { Request } from "express";
import { RequestHandler } from "express-serve-static-core";
import { JSONSchema4, JSONSchema6, JSONSchema7 } from "json-schema";
import { ErrorObject, Options as AjvOptions } from "ajv";
import AjvCore from "ajv/lib/core";

declare module "express-json-validator-middleware" {
	type OptionKey = "body" | "params" | "query";

	type List<T> = {
		[K in OptionKey]?: T;
	};

	type AllowedSchema =
		| JSONSchema4
		| JSONSchema6
		| JSONSchema7;

	export type ValidateFunction =
		| ((req: Request) => AllowedSchema)
		| AllowedSchema;

	export class Validator {
		constructor(options: AjvOptions | AjvCore);

		ajv: AjvCore;

		validate(rules: List<ValidateFunction>): RequestHandler;
	}

	export class ValidationError extends Error {
		constructor(validationErrors: List<ErrorObject[]>);
		public validationErrors: List<ErrorObject[]>;
	}
}
