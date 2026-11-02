function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  return `Name: ${this.name}`;
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  return `Branch: ${this.branch}`;
};
StudentProto.prototype.printDetails = function () {
  return `${this.printName()}, ${this.printBranch()}`;
};

class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    return `Name: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  printBranch() {
    return `Branch: ${this.branch}`;
  }
  printDetails() {
    return `${this.printName()}, ${this.printBranch()}`;
  }
}

const protoStudent = new StudentProto("Yatin", "CSE");
const classStudent = new Student("Yatin", "CSE");

console.log("Prototype version:", protoStudent.printDetails());
console.log("Class version:    ", classStudent.printDetails());
console.log("Same output:", protoStudent.printDetails() === classStudent.printDetails());
console.log("Class instanceof Person:", classStudent instanceof Person);
console.log("Proto instanceof PersonProto:", protoStudent instanceof PersonProto);
console.log("typeof Student:", typeof Student);
