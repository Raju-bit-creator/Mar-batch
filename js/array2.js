let cart = [
  {
    name: "Ram",
    price: 999,
    products: [
      { labtop: 20000 },
      { ipad: 10000 },
      { veg: 1000 },
      { mobile: 5000 },
    ],
    brand: "Dell",
  },
  {
    name: "Shyan",
    price: 999,
    products: [{ labtop: 15000 }, { ipad: 5000 }, { veg: 500 }],
    brand: "Dell",
  },
];

// todo print all products of all customers

// todo print total price of all products of all customers
cart.forEach((i) => {
  let totalPrice = i.products.reduce((sum, p) => sum + Object.values(p)[0], 0);
  console.log(`${i.name}'s total expenditure: ${totalPrice}`);
});

let courses = [
  {
    name: "JavaScript",
    price: 999,
    students: [
      { name: "Ram", age: 25 },
      { name: "Shyan", age: 30 },
    ],
    instructor: "John Doe",
  },
  {
    name: "Python",
    price: 899,
    students: [
      { name: "Alice", age: 22 },
      { name: "Bob", age: 28 },
    ],
    instructor: "Jane Smith",
  },
];

// todo print all students of all courses
courses.forEach((course) => {
  console.log(`Students enrolled in ${course.name}:`);
  course.students.forEach((student) => {
    console.log(`- ${student.name}, Age: ${student.age}`);
  });
});

// todo print total price of all courses
let totalCoursePrice = courses.reduce((sum, i) => sum + i.price, 0);
console.log("Total Price of All Courses: ", totalCoursePrice);
