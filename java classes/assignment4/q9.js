
class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code.trim().toUpperCase());
    if (!match) {
      this.discountPercent = 0;
      console.log(`Invalid coupon "${code}". Use formats like SAVE20 or DISC10.`);
      return false;
    }
    this.discountPercent = Number(match[2]);
    console.log(`Coupon applied: ${this.discountPercent}% off`);
    return true;
  }

  getFinalTotal() {
    return this.getTotal() - (this.getTotal() * this.discountPercent) / 100;
  }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("USB Cable", 100, 3);

console.log("Total:", cart.getTotal());

cart.applyCoupon("HELLO");
cart.applyCoupon("SAVE20");
console.log("Final total:", cart.getFinalTotal());
