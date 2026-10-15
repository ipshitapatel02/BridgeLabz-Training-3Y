let total = 12000;
let discount = 0;
if (total >= 10000) {
    discount = 25;
} else if (total >= 5000) {
    discount = 15;
} else if (total >= 2000) {
    discount = 5;
} else {
    discount = 0;
}
let discountAmount = total * discount / 100;
let finalPrice = total - discountAmount;
console.log("Original Total: Rs. " + Math.round(total));
console.log("Discount: " + discount + "%");
console.log("Discount Amount: Rs. " + Math.round(discountAmount));
console.log("Final Price: Rs. " + Math.round(finalPrice));