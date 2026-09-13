const {
  add,
  subtract,
  multiply,
  divide,
  calculate,
} = require('../calculator');

describe('add', () => {
  test('adds the example operands 2 and 3', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('handles negative and decimal operands', () => {
    expect(add(-2.5, 1.25)).toBe(-1.25);
  });

  test('returns the same value when adding zero', () => {
    expect(add(7, 0)).toBe(7);
  });
});

describe('subtract', () => {
  test('subtracts the example operands 10 and 4', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('handles negative and decimal operands', () => {
    expect(subtract(-2.5, 1.25)).toBe(-3.75);
  });

  test('returns the same value when subtracting zero', () => {
    expect(subtract(7, 0)).toBe(7);
  });
});

describe('multiply', () => {
  test('multiplies the example operands 45 and 2', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('handles negative and decimal operands', () => {
    expect(multiply(-2.5, 1.2)).toBe(-3);
  });

  test('returns zero when either operand is zero', () => {
    expect(multiply(7, 0)).toBe(0);
  });
});

describe('divide', () => {
  test('divides the example operands 20 and 5', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('handles negative and decimal operands', () => {
    expect(divide(-7.5, 2.5)).toBe(-3);
  });

  test('throws when dividing by zero', () => {
    expect(() => divide(20, 0)).toThrow('Cannot divide by zero.');
  });
});

describe('calculate', () => {
  test.each([
    [2, '+', 3, 5],
    [10, '-', 4, 6],
    [45, '*', 2, 90],
    [20, '/', 5, 4],
  ])('calculates %s %s %s as %s', (left, operator, right, expected) => {
    expect(calculate(left, operator, right)).toBe(expected);
  });

  test('rejects unsupported operators', () => {
    expect(() => calculate(2, '^', 3)).toThrow(
      'Unsupported operator "^". Use +, -, *, or /.'
    );
  });
});
