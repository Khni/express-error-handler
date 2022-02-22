//this is an express server for testing
import express from "express";
import { errHandler } from "../middlewares/error-handler-middleware";
import { ErrorMsg } from "../../errors/errorMsg";
import { body } from "express-validator";
import { InputValidateErrorMiddleware } from "../middlewares/expressValidatorError-middleware";
import { json } from "body-parser";

const app = express();

app.use(json()); //this is required for sending json
app.get("/api/testing", (req: express.Request, res: express.Response) => {
  throw new ErrorMsg("Err", 400);
});

app.post(
  "/api/input-test",
  [body("email").isEmail()],
  InputValidateErrorMiddleware,
  (req: express.Request, res: express.Response) => {
    res.send({ email: req.body.email });
  }
);
//errHandler should be declared after routes
app.use(errHandler);

export { app };
