console.log("===== Q8: Strict Mode Showdown =====");

const code = `
  function demo(a, a) {
    total = 10;
    delete total;
    return "ran fine";
  }
  return demo(5, 10);
`;

try {
  const result = new Function(code)();
  console.log("Without strict: " + result);
} catch (error) {
  console.log("Without strict: " + error.name + " - " + error.message);
}

try {
  const result = new Function('"use strict";' + code)();
  console.log("With strict: " + result);
} catch (error) {
  console.log("With strict: " + error.name + " - " + error.message);
}

try {
  new Function('"use strict"; function f(){ total = 10; } f();')();
} catch (error) {
  console.log("Undeclared variable: " + error.name + " - " + error.message);
}

try {
  new Function('"use strict"; var t = 1; delete t;')();
} catch (error) {
  console.log("Delete variable: " + error.name + " - " + error.message);
}

function demo(a, b) {
  "use strict";
  let total = a + b;
  return total;
}
console.log("Correct version: " + demo(5, 10));

const demoArrow = (a, b) => a + b;
console.log("Arrow version: " + demoArrow(5, 10));
