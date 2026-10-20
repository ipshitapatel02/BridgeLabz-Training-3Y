"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function makeError(name, message) {
  const err = new Error(message);
  err.name = name;
  return err;
}

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) {
        throw makeError("DivideByZeroError", "Cannot divide by zero");
      }
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) {
        throw makeError("NegativeRootError", "Cannot find root of a negative number");
      }
      return Math.sqrt(a);
    default:
      throw makeError("InvalidOperationError", "Operation " + op + " is not recognized");
  }
}

console.log("===== Q7: Smart Calculator =====");
console.log("num1 = " + num1 + ", num2 = " + num2);

const allOps = operations.concat(["modulus"]);

for (let i = 0; i < allOps.length; i++) {
  try {
    const result = calculate(allOps[i], num1, num2);
    console.log(allOps[i] + " = " + result);
  } catch (error) {
    console.log(allOps[i] + " -> " + error.name + ": " + error.message);
  }
}

try {
  calculate("root", -9, 0);
} catch (error) {
  console.log("root(-9) -> " + error.name + ": " + error.message);
}
