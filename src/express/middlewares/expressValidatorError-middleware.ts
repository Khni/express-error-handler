import express from "express";
import { validationResult } from "express-validator";
import { InputValidateError } from "../../errors/expressValidatorError";
export const InputValidateErrorMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new InputValidateError(errors.array());
  }

  next();
};
