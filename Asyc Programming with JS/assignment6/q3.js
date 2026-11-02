function getBugs(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("API request failed"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

console.log("Fetching bugs (success case)...");
getBugs(false)
  .then((bugs) => {
    console.table(bugs);
    console.log("\nFetching bugs (simulated API failure)...");
    const simulateFailure = true;
    return getBugs(simulateFailure);
  })
  .then((bugs) => console.table(bugs))
  .catch((error) => console.log(`Error: ${error.message}`));
