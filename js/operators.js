// Arithmetic Operators
// let a = 10;
// let b = 5;

// console.log("Addition: ", a + b); // 15
// console.log("Subtraction: ", a - b); // 5
// console.log("Multiplication: ", a * b); // 50
// console.log("Division: ", a / b); // 2
// console.log("Modulus: ", a % b); // 0

// Assignment Operators
// let c = 10;
// c += 5; // c = c + 5
// c -= 5; // c = c + 5

// console.log("c after addition assignment: ", c); // 10

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = [];
// let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   } else {
//     oddNumbers.push(numbers[i]);
//   }
// }

// console.log("Even Numbers: ", evenNumbers);
// console.log("Odd Numbers: ", oddNumbers);

// Comparison Operators
let x = 10;
let y = "10";

// console.log("Equal to (==): ", x == y); // true
// console.log("Strict Equal to (===): ", x === y); // false

// console.log("Not Equal to (!=): ", x != y); // false
// console.log("Strict Not Equal to (!==): ", x !== y); // true
// console.log("Greater than (>): ", x > 5); // true
// console.log("Less than (<): ", x < 15); // true

// logical operators
let isRaining = false;
let isSunny = false;
let isCloudy = true;

// console.log("Logical AND (&&): ", isRaining && isSunny); // false
// console.log("Logical OR (||): ", isRaining || isSunny); // true
console.log("Logical NOT (!): ", !isRaining); // false

if (!isRaining || (isCloudy && !isSunny)) {
  console.log("It's raining. Don't forget to take an umbrella!");
} else if (isSunny) {
  console.log("It's sunny. Wear sunglasses and apply sunscreen!");
} else {
  console.log("The weather is clear. Enjoy your day!");
}

//ternary operator
let age = 17;
let isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(isAdult);
