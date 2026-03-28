// multiplication 1-10 using for loop
// for (let i = 10; i <= 20; i++) {
//   console.log(`2 x ${i} = ${2 * i}`);
// }

// using forEach method
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((num) => {
//   console.log(`2 x ${num} = ${2 * num}`);
// });

// using map method
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach((i) => {
  console.log(`2 x ${i} = ${2 * i}`);
});

let courses = [
  { name: "JavaScript", price: 999, completedStatus: true },
  { name: "Python", price: 899, completedStatus: false },
  { name: "Java", price: 799, completedStatus: true },
  { name: "Java", price: 799, completedStatus: false },
  { name: "Java", price: 799, completedStatus: true },
  { name: "Java", price: 799, completedStatus: false },
  { name: "Java", price: 799, completedStatus: true },
];

const completed = [];
const notCompleted = [];

courses.forEach((course) => {
  if (course.completedStatus) {
    completed.push(course);
  } else {
    notCompleted.push(course);
  }
});

console.log("Completed Courses: ", completed);
console.log("Not Completed Courses: ", notCompleted);

let countries = [
  { name: "India", code: "IN", continent: "Asia" },
  { name: "United States", code: "US", continent: "North America" },
  { name: "Brazil", code: "BR", continent: "South America" },
  { name: "Australia", code: "AU", continent: "Oceania" },
  { name: "Germany", code: "DE", continent: "Europe" },
  { name: "South Africa", code: "ZA", continent: "Africa" },
];

const getCountryCodes = (countryName) => {
  const country = countries.find(
    (c) => c.name.toLowerCase().trim() === countryName.toLowerCase().trim(),
  );
  return country ? country.code : "Country not found";
};

let countryCode = getCountryCodes("australia");

console.log(countryCode);
