function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

console.log("Step 1: calling greetUser");
greetUser("Yatin", showEndMessage);
console.log("Step 3: greetUser finished");
