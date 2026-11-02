const predictedOrder = [
  "Script start",
  "Script end",
  "Promise callback",
  "Timeout callback",
];

const actualOrder = [];

function log(message) {
  console.log(message);
  actualOrder.push(message);
}

log("Script start");
setTimeout(() => log("Timeout callback"), 0);
Promise.resolve().then(() => log("Promise callback"));
log("Script end");

setTimeout(() => {
  console.log("\nPredicted:", predictedOrder);
  console.log("Actual:   ", actualOrder);
  console.log("Prediction correct:", JSON.stringify(predictedOrder) === JSON.stringify(actualOrder));
  console.log("\nWhy Promises run before setTimeout:");
  console.log("Promise callbacks go to the microtask queue; setTimeout callbacks go to the macrotask queue.");
  console.log("After the current script finishes, the event loop drains ALL microtasks before running the next macrotask.");
}, 50);
