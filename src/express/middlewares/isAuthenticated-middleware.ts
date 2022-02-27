import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError) from "../../errors/NotAuthorizedError";
/**
 * This middleware for checking if user is Authorized or not by
 * searching for authorizedUser property in req object.
 * -> it will throw a NotAuthorizedError if the user is not authorized.
 */
 
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    return new NotAuthorizedError();
  }

  next();
};
