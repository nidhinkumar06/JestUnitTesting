const matchers = require('./matchers');

test('eight plus two is', () => {
  expect(matchers(8, 2)).toBe(10);
  expect(matchers(8, 2)).toBeGreaterThan(9);
  expect(matchers(8, 2)).toBeGreaterThanOrEqual(9.5);
  expect(matchers(8, 2)).toBeLessThan(15);
  expect(matchers(8, 2)).toBeLessThanOrEqual(14.5);
  expect(matchers(8, 2)).toEqual(10);
});

test('adding floating point numbers', () => {
  //expect(matchers(0.1, 0.2)).toBe(0.3);//This won't work because of rounding error received op is 0.30000000000000004
  expect(matchers(0.1, 0.2)).toBeCloseTo(0.3);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
//null value
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
//Zero value
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//Strings
test('there is no K in team', () => {
  expect('team').not.toMatch(/I/);
});

test('there is a "umar" in Nidhinkumar', () => {
  expect('Nidhinkumar').toMatch(/umar/);
});

//Arrays
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});
