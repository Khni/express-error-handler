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
export * from "./errors/NotAuthorizedError";

export * from "./express/middlewares/error-handler-middleware";
export * from "./express/middlewares/expressValidatorError-middleware";
export * from "./express/middlewares/isAuthenticated-middleware";
export * from "./express/middlewares/currentUser-middleware";

