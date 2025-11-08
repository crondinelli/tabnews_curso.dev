test("GET to /api/v1/status shouuld return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
//await somente em assincrona n(async)
