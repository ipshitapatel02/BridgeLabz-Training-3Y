let marks = [90, 85, 88, 92, 80];
let total = 0;
for (let mark of marks) {
    total += mark;
}
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;
let detained = marks.some(mark => mark < 35);
console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Percentage:", percentage.toFixed(2) + "%");
if (detained || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}