"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  { name: "Test1", salary: "abc", years: "3" },
  { name: "Test2", years: "4" }
];

console.log("===== Q2: Bonus Calculator =====");

for (let i = 0; i < employees.length; i++) {
  const emp = employees[i];

  try {
    if (emp.salary === undefined || emp.years === undefined) {
      throw new Error("Missing property for " + emp.name);
    }

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) {
      throw new Error("Cannot convert salary or years to number for " + emp.name);
    }

    let bonus;
    if (years > 3) {
      bonus = salary * 0.1;
    } else {
      bonus = salary * 0.05;
    }

    console.log(`Name: ${emp.name}, Salary: ${salary}, Years: ${years}, Bonus: ${bonus}, Total: ${salary + bonus}`);
  } catch (error) {
    console.log("Error: " + error.message);
  }
}

try {
  extra = 100;
} catch (error) {
  console.log("Strict mode error: " + error.message);
}
