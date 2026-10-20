"use strict";

console.log("===== Q5: Hoisting Lab =====");

console.log(score);
announce();
var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}

try {
  console.log(level);
} catch (error) {
  console.log("Error: " + error.message);
}
let level = 1;

console.log("--- Fixed code ---");
var score2 = 50;
let status2 = "ready";

function announce2() {
  console.log("Game started");
}
function startGame2() {
  console.log(status2);
}

console.log(score2);
announce2();
startGame2();

console.log("--- Arrow functions ---");

try {
  announce3();
} catch (error) {
  console.log("Error: " + error.message);
}

const announce3 = () => {
  console.log("Game started (arrow)");
};
announce3();
