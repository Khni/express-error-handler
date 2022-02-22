import { Request, Response, NextFunction } from "express";
export declare const errHandler: (err: Error, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
