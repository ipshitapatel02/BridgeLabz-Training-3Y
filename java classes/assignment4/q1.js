
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
    return this.price;
  }

  getDetails() {
    return `#${this.id} | ${this.name} | ${this.category} | ₹${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Accessories"),
  new Product(3, "Smartphone", 20000, "Electronics"),
  new Product(4, "Notebook", 120, "Stationery"),
  new Product(5, "Headphones", 1499, "Accessories"),
];

console.log("--- All Products ---");
products.forEach((p) => console.log(p.getDetails()));

products[0].applyDiscount(10);
console.log("\n--- After 10% discount on Laptop ---");
console.log(products[0].getDetails());

const expensiveProducts = products.filter((p) => p.price > 1000);
console.log("\n--- Products with price > 1000 ---");
expensiveProducts.forEach((p) => console.log(p.getDetails()));
