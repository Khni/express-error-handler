"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAthorizedMiddleware = void 0;
var NotAuthorizedError_1 = require("../../errors/NotAuthorizedError");
var isAthorizedMiddleware = function (req, res, next) {
    if (!req.authorizedUser) {
        throw new NotAuthorizedError_1.NotAuthorizedError();
    }
    next();
};
exports.isAthorizedMiddleware = isAthorizedMiddleware;
