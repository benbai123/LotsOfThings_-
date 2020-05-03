const rewire = require("rewire");
const calc = rewire('./sum3');
const sum = calc.__get__("sum");

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
