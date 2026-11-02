function stageWithCallback(name, callback) {
  setTimeout(() => {
    console.log(`Callback version - ${name}`);
    callback();
  }, 1000);
}

function stageWithPromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Async/await version - ${name}`);
      resolve();
    }, 1000);
  });
}

function runWithCallbackHell(done) {
  stageWithCallback("design", () => {
    stageWithCallback("build", () => {
      stageWithCallback("test", () => {
        stageWithCallback("deploy", () => {
          stageWithCallback("celebrate", () => {
            done();
          });
        });
      });
    });
  });
}

async function runWithAsyncAwait() {
  await stageWithPromise("design");
  await stageWithPromise("build");
  await stageWithPromise("test");
  await stageWithPromise("deploy");
  await stageWithPromise("celebrate");
}

console.log("--- Nested callbacks (callback hell) ---");
runWithCallbackHell(async () => {
  console.log("\n--- async/await ---");
  await runWithAsyncAwait();
  console.log("\nWhy async/await is more readable:");
  console.log("1. Code reads top to bottom like normal synchronous code.");
  console.log("2. No deep nesting, so the order of stages is obvious.");
  console.log("3. Errors can be handled in one try/catch instead of at every level.");
});
