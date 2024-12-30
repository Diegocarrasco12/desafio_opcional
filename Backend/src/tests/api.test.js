import request from "supertest";
import app from "../index.js";

describe("API FutScript", () => {
  it("Debería devolver un token con credenciales válidas", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "admin", password: "1234" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
});
