import express from "express";
import { NotAuthorizedError } from "../../errors/NotAuthorizedError";

/**
 * This middleware for checking if user is Authorized or not by
 * searching for authorizedUser property in req object.
 * -> it will throw a NotAuthorizedError if the user is not authorized.
 */
interface user {
  id: string;
  email: string;
}

//this for setting a authorizedUser property to req object to prevent Typescript from complaining!
declare global {
  namespace Express {
    interface Request {
      authorizedUser?: user;
    }
  }
}
export const isAthorizedMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.authorizedUser) {
    throw new NotAuthorizedError();
  }

  next();
};
