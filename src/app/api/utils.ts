import { Error } from "mongoose";
import { ZodError } from "zod";

export function getMongooseErrors(err: any) {
	var validationErrors = [];

	if (err instanceof Error.ValidationError) {
		for (let field in err.errors) {
			validationErrors.push(err.errors[field].message);
		}
	} else if (err.code === 11000) {
		const key = Object.keys(err.keyValue)[0];
		validationErrors.push(
			`Record with ${key}: ${err.keyValue[key]}, already exists.`
		);
	}
	return validationErrors.join("\n");
}

export function getApiError(err: any) {
	var validationErrors: string[] = [];

	if (err instanceof Error.ValidationError) {
		for (let field in err.errors) {
			validationErrors.push(err.errors[field].message);
		}
	} else if (err.code === 11000) {
		const key = Object.keys(err.keyValue)[0];
		validationErrors.push(
			`Record with ${key}: ${err.keyValue[key]}, already exists.`
		);
	} else if (err instanceof ZodError) {
		const errors = err.flatten();
		validationErrors.concat(errors.formErrors);

		Object.keys(errors.fieldErrors).forEach((ele) => {
			validationErrors.push(
				`${ele}: ${errors.fieldErrors[`${ele}`]?.join("& ")}`
			);
		});
	} else {
		validationErrors.push(`${err.name}: ${err.message}`);
	}
	return validationErrors.join("\n");
}
