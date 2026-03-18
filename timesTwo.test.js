
const timesTwo = require('./timesTwo');

test('timesTwo(2) doit donner 4', () => {
    expect(timesTwo(2)).toBe(4);
});

test('throws an error when input is not a number', () => {
  expect(() => timesTwo("10")).toThrow("Input must be a number");
});