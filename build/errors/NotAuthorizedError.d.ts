import { customError } from "..";
export declare class NotAuthorizedError extends customError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        msg: string;
    }[];
}
