let students = [
  {
    name: "Alice",
    age: 20,
    grade: "A",
  },
  //   {
  //     name: "Bob",
  //     age: 22,
  //     grade: "B",
  //   },
  //   {
  //     name: "Charlie",
  //     age: 19,
  //     grade: "C",
  //   },
];

// Convert the students array to a JSON string
// let jsonString = JSON.stringify(students);
// console.log("JSON String:", jsonString);
// console.log("stringfy name:", jsonString.name);

// let parsedStudents = JSON.parse(jsonString);
// console.log("Parsed Students:", parsedStudents);
// console.log("Parsed name:", parsedStudents.name);
// parsedStudents.forEach((student) => {
//   console.log(
//     `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`,
//   );
// });

let data = {
  name: "Alice",
  age: 20,
  grade: "A",
};
// Convert the data object to a JSON string
let jsonString = JSON.stringify(data);
console.log("JSON String:", jsonString);

// Parse the JSON string back to a JavaScript object
// let parsedData = JSON.parse(jsonString);
// console.log("Parsed Data:", parsedData);

// Parse the JSON string back to a JavaScript object
let parsedStudents = JSON.parse(jsonString);
// console.log("Parsed Students:", parsedStudents);
console.log("Parsed Students:", parsedStudents.name);

// // Accessing individual student data
// parsedStudents.forEach(student => {
//     console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
// });
