import express from "express";
/**
 * This middleware for checking if user is Authorized or not by
 * searching for authorizedUser property in req object.
 * -> it will throw a NotAuthorizedError if the user is not authorized.
 */
interface user {
    id: string;
    email: string;
}
declare global {
    namespace Express {
        interface Request {
            authorizedUser?: user;
        }
    }
}
export declare const isAthorizedMiddleware: (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export {};
