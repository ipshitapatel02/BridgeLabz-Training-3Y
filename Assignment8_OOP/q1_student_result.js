class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) return 0;
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

const students = [
  new Student("Aarav", [92, 85, 78, 88, 90]),
  new Student("Diya", [65, 70, 58, 62, 75]),
  new Student("Rohan", [30, 25, 45, 35, 28])
];

students.forEach((s) => {
  console.log(`${s.name} | Marks: ${s.marks.join(", ")} | Average: ${s.calculateAverage().toFixed(2)} | Grade: ${s.getGrade()}`);
});
