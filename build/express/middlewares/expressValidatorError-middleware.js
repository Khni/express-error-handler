"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputValidateErrorMiddleware = void 0;
var express_validator_1 = require("express-validator");
var expressValidatorError_1 = require("../../errors/expressValidatorError");
var InputValidateErrorMiddleware = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new expressValidatorError_1.InputValidateError(errors.array());
    }
    next();
};
exports.InputValidateErrorMiddleware = InputValidateErrorMiddleware;
