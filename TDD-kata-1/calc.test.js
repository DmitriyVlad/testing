const calc = require('./calc');

test('Calc should return 0 for an empty string', () => {
  expect(calc('')).toBe(0);
});

test('Calc should return number', () => {
  expect(calc('1')).toBe(1);
  expect(calc('55')).toBe(55);
});

test('Calc should return sum of 2 numbers', () => {
  expect(calc('1,2')).toBe(3);
});

test('Calc should handle an unknown amount of numbers', () => {
  expect(calc('1,2,3,4')).toBe(10);
  expect(calc('5,6,7')).toBe(18);
  expect(calc('5,5,5,5,5,5')).toBe(30);
});

test('Calc should handle new lines between numbers instead of commas', () => {
  expect(calc('1\n2,3')).toBe(6);
  expect(calc('1\n3\n4')).toBe(8);
  expect(calc('1,2\n3')).toBe(6);
  expect(calc('1,\n')).toBe(6);
});

