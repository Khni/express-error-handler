"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expressValidatorError_1 = require("../expressValidatorError");
var errors = [
    {
        value: "skkddddidsgmail.com",
        msg: "requierd valid email!",
        param: "email",
        location: "body",
    },
];
it("testing serializeErrors() in AuthError Class , it should return an array of objects with properties 'filed' and 'msg' ", function () {
    var inputValidateError = new expressValidatorError_1.InputValidateError(errors);
    expect(inputValidateError.serializeErrors()).toEqual([
        { field: "email", msg: "requierd valid email!" },
    ]);
});
