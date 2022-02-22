import { customError } from "./customError";
export declare class ErrorMsg extends customError {
    msg: string;
    statusCode: number;
    constructor(msg: string, statusCode: number);
    serializeErrors(): {
        msg: string;
    }[];
}
