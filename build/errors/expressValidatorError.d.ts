import { ValidationError } from "express-validator";
import { customError } from "./customError";
export declare class InputValidateError extends customError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): {
        msg: any;
        field: string;
    }[];
}
