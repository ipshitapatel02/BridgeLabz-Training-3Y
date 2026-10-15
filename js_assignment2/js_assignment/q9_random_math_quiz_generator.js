let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ["+", "-", "*", "/"];
let operator = operators[Math.floor(Math.random() * 4)];
let answer;
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;
    case "-":
        answer = num1 - num2;
        break;
    case "*":
        answer = num1 * num2;
        break;
    case "/":
        answer = num1 / num2;
        break;
}
console.log("Question:", num1, operator, num2, "=");
if (operator === "/") {
    console.log("Correct Answer:", answer.toFixed(2));
} else {
    console.log("Correct Answer:", answer);
}