"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];

console.log("===== Q9: JSON Audit =====");

for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;

  try {
    const obj = JSON.parse(rawData[i]);

    if (obj.user === undefined) {
      throw new Error("missing key: user");
    }
    if (obj.age === undefined) {
      throw new Error("missing key: age");
    }

    cleanData.push(obj);
    console.log("Line " + lineNumber + ": valid");
  } catch (error) {
    console.log("Line " + lineNumber + ": ERROR - " + error.message);
  }
}

console.log("Clean data:", cleanData);

const adults = [];
for (let i = 0; i < cleanData.length; i++) {
  const age = Number(cleanData[i].age);
  if (age >= 18) {
    adults.push({ user: cleanData[i].user, age: age });
  } else {
    console.log(cleanData[i].user + " is under 18, removed");
  }
}
console.log("Adults:", adults);
