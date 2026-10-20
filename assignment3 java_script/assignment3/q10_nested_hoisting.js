"use strict";

console.log("===== Q10: Nested Hoisting =====");

function outer() {
  console.log(count);
  var count = 5;

  function inner() {
    console.log(count);
    var count = 10;
  }

  inner();
}
outer();

console.log("--- Arrow version ---");
function outer2() {
  console.log(count);
  var count = 5;

  const inner = () => {
    console.log(count);
    var count = 10;
  };

  inner();
}
outer2();
