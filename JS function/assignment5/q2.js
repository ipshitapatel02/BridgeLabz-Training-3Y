function applyOperation(numbers, operation) {
  const result = [];
  for (const number of numbers) {
    result.push(operation(number));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

const doubleNumber = (num) => num * 2;
const squareNumber = (num) => num * num;

console.log("Original:", numbers);
console.log("Doubled:", applyOperation(numbers, doubleNumber));
console.log("Squared:", applyOperation(numbers, squareNumber));
