"use strict";

console.log("===== Q4: Debugging Mystery =====");

function showMessageWrong() {
  greeting = "Welcome";
  console.log(greeting);
}

try {
  showMessageWrong();
} catch (error) {
  console.log("Error: " + error.message);
}

function showMessage() {
  let greeting = "Welcome";

  debugger;
  console.log(greeting);
}

showMessage();
