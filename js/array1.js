let students = [
  {
    name: "Alice",
    age: 20,
    grade: "A",
    bloodGroutp: "A+",
    section: "A",
    rollNumber: 1,
    hobbies: ["reading", "sports"],
    paidStatus: true,
    address: "Sydney",
  },
  {
    name: "Bob",
    age: 22,
    grade: "B",
    hobbies: ["music", "traveling", "cooking", "painting"],
  },
  { name: "Charlie", age: 21, grade: "A" },
  { name: "David", age: 23, grade: "C" },
  { name: "Eve", age: 20, grade: "B" },
];

// todo print hobbies of all students
students.forEach((i) => {
  console.log(
    `${i.name}'s hobbies: ${i.hobbies ? i.hobbies.map((h) => (h === "music" ? "he is intrested in music" : "he is intrested in music")) : "No hobbies listed"}`,
  );
});
students.map((i) => {
  console.log(`our students name list: ${i.name}`);
});

// console.log("All Students: ", students);

// Filter students with grade A
// let gradeAStudents = students.filter((i) => i.age > 20); //iteratre through each student and check if the grade is A, if true then add to gradeAStudents array
// console.log("Grade A Students: ", gradeAStudents);

// Map to get names of all students
// let studentNames = students.map((i) => i.age);
// console.log("Student Names: ", studentNames);
// Reduce to calculate average age of students
let totalAge = students.reduce((sum, i) => sum + i.age, 0);
let totalStudents = students.length;
let averageAge = totalAge / totalStudents;
console.log("Average Age of Students: ", averageAge);
