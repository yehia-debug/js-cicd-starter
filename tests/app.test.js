const request = require("supertest");   //  Import the Supertest library for making HTTP requests in tests
const app = require("../app");      // Import the Express application to be tested

describe("GET /", () => {
  it("should return app running message", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);       // Assert that the response status code is 200 (OK)
    expect(res.body.message).toBe("App is running");
  });
});

describe("GET /health", () => {
  it("should return ok status", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe("GET /unknown", () => {
  it("should return 404 for unknown route", async () => {
    const res = await request(app).get("/unknown");

    expect(res.statusCode).toBe(404);
  });
});

describe("GET /health (wrong expectation)", () => {
  it("should return wrong status to force failure", async () => {
    const res = await request(app).get("/health");

    expect(res.body.status).toBe("healthy"); // WRONG on purpose ( was healthy)
  });
});