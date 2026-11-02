function randomDelay() {
  return 1000 + Math.random() * 1000;
}

function makeStep(message, failMessage) {
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject(new Error(failMessage));
        } else {
          console.log(message);
          resolve();
        }
      }, randomDelay());
    });
  };
}

const boilWater = makeStep("Step 1: Water boiled", "Kettle stopped working");
const brewCoffee = makeStep("Step 2: Coffee brewed", "Coffee machine jammed");
const pourIntoCup = makeStep("Step 3: Coffee poured into cup", "Cup broke");

console.log("Starting coffee process...");

boilWater()
  .then(brewCoffee)
  .then(pourIntoCup)
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.log(`Coffee process failed: ${error.message}`));
