
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Aarav", "Engineering", 60000),
  new Employee(2, "Diya", "HR", 40000),
  new Employee(3, "Kabir", "Finance", 50000),
  new Employee(4, "Meera", "Marketing", 45000),
  new Employee(5, "Rohan", "Engineering", 70000),
];

console.log("--- Annual Salaries ---");
employees.forEach((e) => console.log(`${e.name} (${e.department}): ₹${e.getAnnualSalary()}`));

employees[0].applyBonus(10);
console.log(`\nAfter 10% bonus, ${employees[0].name}'s annual salary: ₹${employees[0].getAnnualSalary()}`);

const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: ₹${totalPayout}`);
