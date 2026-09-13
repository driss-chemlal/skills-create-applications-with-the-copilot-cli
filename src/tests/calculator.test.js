const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
} = require('../calculator');

describe('named operation exports', () => {
  test('exports addition, subtraction, multiplication, and division', () => {
    expect(typeof addition).toBe('function');
    expect(typeof subtraction).toBe('function');
    expect(typeof multiplication).toBe('function');
    expect(typeof division).toBe('function');
    expect(typeof modulo).toBe('function');
    expect(typeof power).toBe('function');
    expect(typeof squareRoot).toBe('function');
  });
});

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

describe('modulo', () => {
  test('matches the image example 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('handles negative operands', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('returns the dividend when it is smaller than the divisor', () => {
    expect(modulo(2, 5)).toBe(2);
  });

  test('throws when the divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Cannot calculate modulo by zero.');
  });
});

describe('power', () => {
  test('matches the image example 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('handles zero and negative exponents', () => {
    expect(power(5, 0)).toBe(1);
    expect(power(2, -2)).toBe(0.25);
  });

  test('handles a negative base with an integer exponent', () => {
    expect(power(-2, 3)).toBe(-8);
  });
});

describe('squareRoot', () => {
  test('matches the image example sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('returns zero for zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('handles a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('throws for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow(
      'Cannot calculate the square root of a negative number.'
    );
  });
});

describe('calculate', () => {
  test.each([
    [2, '+', 3, 5],
    [10, '-', 4, 6],
    [45, '*', 2, 90],
    [20, '/', 5, 4],
    [10, '%', 3, 1],
    [2, '^', 3, 8],
  ])('calculates %s %s %s as %s', (left, operator, right, expected) => {
    expect(calculate(left, operator, right)).toBe(expected);
  });

  test('rejects unsupported operators', () => {
    expect(() => calculate(2, '&', 3)).toThrow(
      'Unsupported operator "&". Use +, -, *, /, %, or ^.'
    );
  });
});
