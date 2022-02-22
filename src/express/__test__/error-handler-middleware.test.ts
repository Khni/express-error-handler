import { app } from "./app";
import request from "supertest";

it("error-handler-middlerware should get status code of 400", async () => {
  const response = await request(app).get("/api/testing").expect(400);
  expect(response.body.errors[0].msg).toBe("Err");
});
