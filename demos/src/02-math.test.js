const { sum, multiply, divide } = require('./02-math');

describe('Test math', () => {
  describe('test for sum', () => {
    test('sum 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe('test for multiply', () => {
    test('multiply 1 * 3 should be 3', () => {
      const rta = multiply(1, 3);
      expect(rta).toBe(3);
    });
  });
  describe('test for divide', () => {
    test('divide 3 / 1 should be 1', () => {
      const rta = divide(3, 1);
      expect(rta).toBe(3);
    });
    test('divide for zero should be null', () => {
      const rta = divide(3, 0);
      expect(rta).toBeNull();
    });
  });
});
