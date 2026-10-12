let userName = "Ipshita";
let age = 19;
let isStudent = true;
let subjects = ["JavaScript", "Python", "Java"];
let student = { name: "Ipshita", age: 19 };
let address = null;
let phoneNumber;
let data = [
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "Student Object", value: student, type: typeof student },
    { label: "Address", value: address, type: "null" },
    { label: "Phone Number", value: phoneNumber, type: typeof phoneNumber }
];
console.table(data);