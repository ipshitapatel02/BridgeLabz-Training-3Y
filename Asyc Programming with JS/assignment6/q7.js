function loadProfile() { return new Promise((r) => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise((r) => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise((r) => setTimeout(() => r("Messages Loaded"), 1000)); }

function rejectAfter(delay, message) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error(message)), delay));
}

async function loadDashboard() {
  const moduleNames = ["Profile", "Posts", "Messages"];
  const loaders = [loadProfile, loadPosts, loadMessages];
  const delays = [2000, 1500, 1000];

  const failingIndex = Math.floor(Math.random() * loaders.length);
  const promises = loaders.map((loader, index) =>
    index === failingIndex
      ? rejectAfter(delays[index], `${moduleNames[index]} failed to load`)
      : loader()
  );

  const startTime = Date.now();
  const results = await Promise.allSettled(promises);
  const totalTime = Date.now() - startTime;

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${moduleNames[index]}: SUCCESS - ${result.value}`);
    } else {
      console.log(`${moduleNames[index]}: FAILED - ${result.reason.message}`);
    }
  });

  console.log(`Total time taken: ${totalTime} ms`);
}

loadDashboard();
