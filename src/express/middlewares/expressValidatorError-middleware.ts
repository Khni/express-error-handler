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
    let validationErrors = errors
      .array()
      .map((err) => ({ ...err, msg: req.t(err.msg) })); //the req.t will be handled by i18next
    throw new InputValidateError(validationErrors);
  }

  next();
};
