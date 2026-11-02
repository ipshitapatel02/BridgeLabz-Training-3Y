function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log(`I am ${this.name}.`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log(`Department: ${this.department}`);
};

function Professor(name, department, researchArea) {
  Faculty.call(this, name, department);
  this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showResearch = function () {
  console.log(`Research area: ${this.researchArea}`);
};

const professor = new Professor("Dr. Sharma", "Computer Science", "Cybersecurity");

professor.introduce();
professor.showDepartment();
professor.showResearch();

console.log("Chain: Professor -> Faculty -> Person -> Object");
console.log(Object.getPrototypeOf(professor) === Professor.prototype);
console.log(Object.getPrototypeOf(Professor.prototype) === Faculty.prototype);
console.log(Object.getPrototypeOf(Faculty.prototype) === Person.prototype);
