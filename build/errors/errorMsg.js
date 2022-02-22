"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMsg = void 0;
var customError_1 = require("./customError");
var ErrorMsg = /** @class */ (function (_super) {
    __extends(ErrorMsg, _super);
    function ErrorMsg(msg, statusCode) {
        var _this = _super.call(this, msg) || this;
        _this.msg = msg;
        _this.statusCode = statusCode;
        Object.setPrototypeOf(_this, ErrorMsg.prototype);
        return _this;
    }
    ErrorMsg.prototype.serializeErrors = function () {
        return [{ msg: this.msg }];
    };
    return ErrorMsg;
}(customError_1.customError));
exports.ErrorMsg = ErrorMsg;
