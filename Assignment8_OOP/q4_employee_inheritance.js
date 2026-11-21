class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} from ${this.department} is doing assigned tasks.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  work() {
    return `${this.name} from ${this.department} is managing a team of ${this.teamSize} people.`;
  }
}

const emp1 = new Employee("Amit", "Engineering");
const emp2 = new Employee("Sneha", "Design");
const mgr1 = new Manager("Priya", "Engineering", 8);

const staff = [emp1, emp2, mgr1];

staff.forEach((person) => {
  console.log(`[${person.constructor.name}] ${person.work()}`);
});
