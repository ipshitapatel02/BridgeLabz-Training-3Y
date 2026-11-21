const menu = [
  { item: "Burger", price: 120 },
  { item: "Pizza", price: 250 },
  { item: "Pasta", price: 180 },
  { item: "Fries", price: 90 },
  { item: "Coke", price: 60 }
];

function calculateBill(orderItems) {
  const prices = orderItems.map((orderedItem) => {
    const found = menu.find((m) => m.item.toLowerCase() === orderedItem.toLowerCase());
    if (!found) {
      throw new Error(`Invalid item ordered: "${orderedItem}" is not on the menu`);
    }
    return found.price;
  });

  return prices.reduce((total, price) => total + price, 0);
}

const orders = [
  ["Burger", "Fries", "Coke"],
  ["Pizza", "Pasta"],
  ["Burger", "Sushi", "Coke"]
];

orders.forEach((order, index) => {
  try {
    const total = calculateBill(order);
    console.log(`Order ${index + 1} [${order.join(", ")}] -> Total Bill: Rs. ${total}`);
  } catch (error) {
    console.log(`Order ${index + 1} [${order.join(", ")}] -> Failed: ${error.message}`);
  }
});
