const absolute = require("./problem1"); // Import, diletakkan di bagian paling atas sebuah file

test("Test 1", () => {
  expect(absolute(1)).toEqual(1);
});
test("Test 2", () => {
  expect(absolute(-1)).toEqual(1);
});
test("Test 3", () => {
  expect(absolute(0)).toEqual(0);
});
