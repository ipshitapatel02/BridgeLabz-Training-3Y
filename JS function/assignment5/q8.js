Array.prototype.myMap = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (index in this) {
      result.push(callback(this[index], index, this));
    }
  }
  return result;
};

console.log([1, 2, 3].myMap((num) => num * 2));
console.log(["a", "b"].myMap((letter, index) => `${index}:${letter}`));
console.log([1, 2, 3].myMap((n) => n + 1).join() === [1, 2, 3].map((n) => n + 1).join());
