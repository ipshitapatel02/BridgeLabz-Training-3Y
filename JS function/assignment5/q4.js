function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

car1.getDetails();
car2.getDetails();

console.log("Same method shared:", car1.getDetails === car2.getDetails);
console.log("Method on instance itself:", car1.hasOwnProperty("getDetails"));
console.log("Method on prototype:", Car.prototype.hasOwnProperty("getDetails"));
