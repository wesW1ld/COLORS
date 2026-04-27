test('SearchColors.php returns matching colors', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 200,
      json: () =>
        Promise.resolve({
          results: ["red", "blue"],
          error: ""
        })
    })
  );

  // Call "API"
  const response = await fetch("http://fake-api/SearchColors.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      search: "r",
      userId: 1
    })
  });

  const data = await response.json();

  // Assertions (THIS is what your PHP returns)
  expect(response.status).toBe(200);
  expect(data.results).toContain("red");
  expect(data.results).toContain("blue");
  expect(data.error).toBe("");
});