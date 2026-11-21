function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Discount percent must be between 0 and 100");
  }
  return this.price - (this.price * percent) / 100;
};

const laptop = new Product("Laptop", 60000);
const phone = new Product("Phone", 25000);
const headphones = new Product("Headphones", 3000);

console.log(`${laptop.name}: Rs. ${laptop.price} -> Rs. ${laptop.applyDiscount(10)} (10% off)`);
console.log(`${phone.name}: Rs. ${phone.price} -> Rs. ${phone.applyDiscount(20)} (20% off)`);
console.log(`${headphones.name}: Rs. ${headphones.price} -> Rs. ${headphones.applyDiscount(50)} (50% off)`);

console.log("\nAbstraction demo:");
const cart = [
  { product: laptop, discount: 10 },
  { product: phone, discount: 20 },
  { product: headphones, discount: 50 }
];

const grandTotal = cart.reduce(
  (sum, entry) => sum + entry.product.applyDiscount(entry.discount),
  0
);
console.log(`Cart total after discounts: Rs. ${grandTotal}`);
console.log("The caller only uses applyDiscount(); the calculation stays hidden inside the method.");
