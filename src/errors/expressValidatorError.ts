import { ValidationError } from "express-validator";
import { customError } from "./customError";

export class InputValidateError extends customError {
  statusCode = 400;
  // set public here to use it by ref this
  constructor(public errors: ValidationError[]) {
    super("Invalid fields Error");
    Object.setPrototypeOf(this, InputValidateError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { msg: err.msg, field: err.param };
    });
  }
}
