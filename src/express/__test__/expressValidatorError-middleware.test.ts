import { app } from "./app";
import request from "supertest";

it("testing that if sending proper valid Email, it will not cause the middleware to throw en Error.", async () => {
  const response = await request(app)
    .post("/api/input-test")
    .send({ email: "khaled@gmail.com" })
    .expect(200);
  expect(response.body.email).toBe("khaled@gmail.com");
});

it("the middleware will throw an Error if an invlid Email has been sent.", async () => {
  const response = await request(app)
    .post("/api/input-test")
    .send({ email: "khaledgmail.com" })
    .expect(400);
});
