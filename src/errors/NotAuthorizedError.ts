import { customError } from "..";

export class NotAuthorizedError extends customError {
  statusCode = 403;
  constructor() {
    super("NotAuthorizedError");
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ msg: "NotAuthorizedError" }];
  }
}
