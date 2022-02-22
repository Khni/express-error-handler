import { InputValidateError } from "../expressValidatorError";
import { ValidationError } from "express-validator";

const errors: ValidationError[] = [
  {
    value: "skkddddidsgmail.com", //this is an invalid Email
    msg: "requierd valid email!",
    param: "email",
    location: "body",
  },
];

it("testing serializeErrors() in AuthError Class , it should return an array of objects with properties 'filed' and 'msg' ", () => {
  const inputValidateError = new InputValidateError(errors);
  expect(inputValidateError.serializeErrors()).toEqual([
    { field: "email", msg: "requierd valid email!" },
  ]);
});
