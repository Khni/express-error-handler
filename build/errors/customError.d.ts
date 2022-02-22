export declare abstract class customError extends Error {
    abstract statusCode: number;
    constructor(msg: string);
    abstract serializeErrors(): {
        msg: string;
        field?: string;
    }[];
}
