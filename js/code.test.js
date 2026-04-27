const { saveCookie } = require('./code.js');

test('saveCookie sets cookie with user data', () => {
  saveCookie("John", "Doe", 5);

  expect(document.cookie).toContain("firstName=John");
  expect(document.cookie).toContain("lastName=Doe");
  expect(document.cookie).toContain("userId=5");
});