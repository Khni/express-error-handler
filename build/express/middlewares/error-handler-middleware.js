"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errHandler = void 0;
var customError_1 = require("../../errors/customError");
var errHandler = function (err, req, res, next) {
    if (err instanceof customError_1.customError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    console.error("something went wrong", err);
    res.status(400).send({ errors: "something went wrong!" });
};
exports.errHandler = errHandler;
