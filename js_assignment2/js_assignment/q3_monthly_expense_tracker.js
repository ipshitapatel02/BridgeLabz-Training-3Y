let expenses = [3000, 1500, 8000, 1200, 1000];
let total = 0;
for (let expense of expenses) {
    total += expense;
}
let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;
console.log("Total Expenses: Rs. " + total.toFixed(2));
console.log("Average Expense: Rs. " + average.toFixed(2));
console.log("Tax Amount: Rs. " + tax.toFixed(2));
console.log("Final Amount: Rs. " + finalAmount.toFixed(2));