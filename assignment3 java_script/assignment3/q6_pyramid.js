"use strict";

let rows = 5;
if (process.argv[2] !== undefined) {
  rows = Number(process.argv[2]);
}

console.log("===== Q6: Pyramid =====");
console.log("Rows = " + rows);

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line = line + "* ";
  }
  console.log(line);
}

console.log("--- Using var ---");
for (var a = 1; a <= 3; a++) {
  var line2 = "";
  for (var b = 1; b <= a; b++) {
    line2 = line2 + "* ";
  }
  console.log(line2);
}
console.log("a after loop = " + a);
console.log("b after loop = " + b);

try {
  for (x = 1; x <= 3; x++) {
    console.log(x);
  }
} catch (error) {
  console.log("Strict mode error: " + error.message);
}
