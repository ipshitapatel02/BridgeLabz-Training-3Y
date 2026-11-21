class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number");
    }
    if (amount > this.#balance) {
      throw new Error(`Insufficient balance. Available: Rs. ${this.#balance}, requested: Rs. ${amount}`);
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log(`Opening balance: Rs. ${account.getBalance()}`);

try {
  account.deposit(500);
  console.log(`Deposited Rs. 500 -> Balance: Rs. ${account.getBalance()}`);
  account.deposit(250);
  console.log(`Deposited Rs. 250 -> Balance: Rs. ${account.getBalance()}`);
  account.withdraw(300);
  console.log(`Withdrew Rs. 300 -> Balance: Rs. ${account.getBalance()}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

try {
  account.withdraw(5000);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

try {
  account.deposit(-100);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

console.log(`Final balance: Rs. ${account.getBalance()}`);
console.log(`Direct access to balance: ${account.balance}`);
