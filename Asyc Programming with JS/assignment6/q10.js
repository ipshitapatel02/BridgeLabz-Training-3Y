function randomDelay() {
  return 1000 + Math.random() * 1000;
}

function makeDeliveryStep(successMessage, errorMessage) {
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error(errorMessage));
        } else {
          resolve(successMessage);
        }
      }, randomDelay());
    });
  };
}

const takeOrder = makeDeliveryStep("Step 1: Order taken", "Could not take order");
const prepare = makeDeliveryStep("Step 2: Food prepared", "Kitchen failed");
const pack = makeDeliveryStep("Step 3: Package ready", "Packing failed");
const dispatch = makeDeliveryStep("Step 4: Out for delivery", "No rider available");
const deliver = makeDeliveryStep("Delivery completed!", "Delivery failed");

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log(await takeOrder());
    console.log(await prepare());
    console.log(await pack());
    console.log(await dispatch());
    console.log(await deliver());
  } catch (error) {
    console.log("Pipeline failed!");
    console.log(`Reason: ${error.message}`);
  }
}

runPipeline();
console.log("(runPipeline() has paused at its first await; the main script is already finished and the event loop is free.)");
