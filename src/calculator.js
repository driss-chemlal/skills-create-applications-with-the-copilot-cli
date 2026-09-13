#!/usr/bin/env node

const USAGE = 'Usage: node src/calculator.js <number> <operator> <number>';

/**
 * Add two numbers.
 */
function add(left, right) {
  return left + right;
}

/**
 * Subtract the right number from the left number.
 */
function subtract(left, right) {
  return left - right;
}

/**
 * Multiply two numbers.
 */
function multiply(left, right) {
  return left * right;
}

/**
 * Divide the left number by the right number.
 */
function divide(left, right) {
  if (right === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return left / right;
}

function calculate(left, operator, right) {
  switch (operator) {
    case '+':
      return add(left, right);
    case '-':
      return subtract(left, right);
    case '*':
      return multiply(left, right);
    case '/':
      return divide(left, right);
    default:
      throw new Error(`Unsupported operator "${operator}". Use +, -, *, or /.`);
  }
}

function parseNumber(value, name) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    throw new Error(`${name} must be a finite number.`);
  }

  return number;
}

function main(args) {
  if (args.length !== 3) {
    throw new Error(USAGE);
  }

  const left = parseNumber(args[0], 'The first operand');
  const result = calculate(left, args[1], parseNumber(args[2], 'The second operand'));

  console.log(result);
}

if (require.main === module) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};
