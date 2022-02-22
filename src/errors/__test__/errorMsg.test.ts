import { ErrorMsg } from "../errorMsg";

it("testing serializeErrors() in ErrorMsg Class , it should return an array of objects with properties 'msg' ", () => {
  const errorMsg = new ErrorMsg("There is an Error!", 400);
  expect(errorMsg.serializeErrors()).toEqual([{ msg: "There is an Error!" }]);
});
