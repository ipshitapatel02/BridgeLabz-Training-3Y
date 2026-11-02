function deployToServer(name, delayInSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`${name} failed`));
      } else {
        resolve(`${name} responded after ${delayInSeconds}s`);
      }
    }, delayInSeconds * 1000);
  });
}

const serverA = deployToServer("Server A", 2);
const serverB = deployToServer("Server B", 3);

Promise.race([serverA, serverB])
  .then((fastest) => console.log("Fastest response:", fastest))
  .catch((error) => console.log(`Race error: ${error.message}`));

Promise.all([serverA, serverB])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch((error) => console.log(`Deployment error: ${error.message}`));
