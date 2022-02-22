declare global {
  namespace Express {
    interface Request {
      t?: any;
    }
  }
}
export * from "./errors/errorMsg";
export * from "./errors/expressValidatorError";
export * from "./errors/customError";
export * from "./express/middlewares/error-handler-middleware";
export * from "./express/middlewares/expressValidatorError-middleware";
export * from "./express/middlewares/isAuthorized-middleware";
export * from "./errors/NotAuthorizedError";
