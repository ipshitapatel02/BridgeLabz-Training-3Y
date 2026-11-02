console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

console.log("Synchronous log");

console.log("End");

setTimeout(() => {
  console.log("\nWhy microtasks run before macrotasks:");
  console.log("1. All synchronous code runs first on the call stack (Start, Synchronous log, End).");
  console.log("2. When the stack is empty, the event loop empties the microtask queue completely (Promise callbacks).");
  console.log("3. Only then does it take ONE macrotask (setTimeout) from the macrotask queue.");
  console.log("So the order is: sync -> microtasks -> macrotasks.");
}, 50);
