"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("===== Q1: Data Parser =====");

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];

  const num = Number(value);
  const bool = Boolean(value);
  const str = String(value);

  console.log("Item " + i + ": " + str);
  console.log("  Number  = " + num);
  console.log("  Boolean = " + bool);
  console.log("  String  = " + str);

  if (value === null || value === undefined) {
    console.log("  -> INVALID (null or undefined)");
    invalidNumbers.push(value);
  } else if (String(value).trim() === "") {
    console.log("  -> INVALID (empty string)");
    invalidNumbers.push(value);
  } else if (isNaN(num)) {
    console.log("  -> INVALID (not a number)");
    invalidNumbers.push(value);
  } else {
    console.log("  -> VALID");
    validNumbers.push(num);
  }
}

console.log("\n===== Report =====");
console.log("Valid numbers:", validNumbers);
console.log("Invalid values:", invalidNumbers);
console.log("Total valid: " + validNumbers.length);
console.log("Total invalid: " + invalidNumbers.length);
