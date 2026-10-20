"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

const negativeErrors = [];
const missingErrors = [];
const nullErrors = [];

console.log("===== Q3: Transaction Validator =====");

for (let i = 0; i < transactions.length; i++) {
  const t = transactions[i];

  debugger;

  try {
    if (t === null) {
      const err = new Error("Transaction is null at index " + i);
      err.name = "NullError";
      throw err;
    }
    if (t.id === undefined || t.amount === undefined) {
      const err = new Error("Missing id or amount at index " + i);
      err.name = "MissingError";
      throw err;
    }
    if (t.amount < 0) {
      const err = new Error("Negative amount " + t.amount + " for id " + t.id);
      err.name = "NegativeError";
      throw err;
    }

    valid.push(t);
    console.log("Index " + i + ": OK");
  } catch (error) {
    invalid.push(error.message);
    console.log("Index " + i + ": " + error.name + " - " + error.message);

    if (error.name === "NegativeError") {
      negativeErrors.push(error.message);
    } else if (error.name === "MissingError") {
      missingErrors.push(error.message);
    } else if (error.name === "NullError") {
      nullErrors.push(error.message);
    }
  }
}

console.log("\n===== Final Report =====");
console.log("Successful transactions: " + valid.length);
console.log("Failed transactions: " + invalid.length);
console.log("Valid:", valid);
console.log("Invalid:", invalid);
console.log("Negative errors:", negativeErrors);
console.log("Missing errors:", missingErrors);
console.log("Null errors:", nullErrors);
