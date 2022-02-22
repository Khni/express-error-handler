"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
//this is an express server for testing
var express_1 = __importDefault(require("express"));
var error_handler_middleware_1 = require("../middlewares/error-handler-middleware");
var errorMsg_1 = require("../../errors/errorMsg");
var express_validator_1 = require("express-validator");
var expressValidatorError_middleware_1 = require("../middlewares/expressValidatorError-middleware");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
exports.app = app;
app.use((0, body_parser_1.json)()); //this is required for sending json
app.get("/api/testing", function (req, res) {
    throw new errorMsg_1.ErrorMsg("Err", 400);
});
app.post("/api/input-test", [(0, express_validator_1.body)("email").isEmail()], expressValidatorError_middleware_1.InputValidateErrorMiddleware, function (req, res) {
    res.send({ email: req.body.email });
});
//errHandler should be declared after routes
app.use(error_handler_middleware_1.errHandler);
