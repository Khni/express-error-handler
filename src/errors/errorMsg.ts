import { customError } from "./customError";

export class ErrorMsg extends customError {
  constructor(public msg: string, public statusCode: number) {
    super(msg);
    Object.setPrototypeOf(this, ErrorMsg.prototype);
  }
  serializeErrors() {
    return [{ msg: this.msg }];
  }
}
