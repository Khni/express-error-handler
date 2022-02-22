export abstract class customError extends Error {
  abstract statusCode: number;
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, customError.prototype);
  }

  abstract serializeErrors(): { msg: string; field?: string }[];
}
