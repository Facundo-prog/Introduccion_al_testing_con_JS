test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).toEqual(null);
});

test('test booleans', () => {
  expect(true).toEqual(true);
  expect(1).toBeTruthy();
  expect(' ').toBeTruthy();

  expect(false).toEqual(false);
  expect('').toBeFalsy();
  expect(0).toBeFalsy();
});

test('test strings', () => {
  expect('Hola como estas?').toMatch('es');
});

test('test array', () => {
  const array = [0, 1, 2, 3, 4, 5];
  expect(array).toContain(3);
});
