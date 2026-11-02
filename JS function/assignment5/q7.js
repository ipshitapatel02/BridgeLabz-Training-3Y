function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(triple(5));
console.log(double(5));
console.log(triple(10));

console.log(
  "Closure: the inner function remembers the variable 'multiplier' from makeMultiplier, " +
  "even after makeMultiplier has finished running. triple keeps its own multiplier = 3 " +
  "and double keeps its own multiplier = 2, so each returned function has private, separate memory."
);
