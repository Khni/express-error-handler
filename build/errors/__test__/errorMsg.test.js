"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorMsg_1 = require("../errorMsg");
it("testing serializeErrors() in ErrorMsg Class , it should return an array of objects with properties 'msg' ", function () {
    var errorMsg = new errorMsg_1.ErrorMsg("There is an Error!", 400);
    expect(errorMsg.serializeErrors()).toEqual([{ msg: "There is an Error!" }]);
});
