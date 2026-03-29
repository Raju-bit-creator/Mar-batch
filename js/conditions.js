// conditon
// if else condition
let age = 15;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// nested if else condition
let today = "wednesday";
if (today === "saturday") {
  console.log("Today is saturday");
} else if (today === "sunday") {
  console.log("Today is sunday");
} else if (today === "monday") {
  console.log("Today is sunday");
} else {
  console.log("Today is a weekday");
}
// switch (today) {
//   case "saturday":
//     console.log("Today is saturday");
//     break;
//   case "sunday":
//     console.log("Today is sunday");
//     break;
//   default:
//     console.log("Today is a weekday");
// }

const number = 10.6;
const num = Math.floor(number);
const num1 = Math.ceil(number);
console.log(num1); // 11
console.log(num); // 10

let isRaining = true;
let isSunny = false;
let isCloudy = true;

if (isRaining) {
  console.log("It's raining. Don't forget to take an umbrella!");
} else if (isSunny) {
  console.log("It's sunny. Wear sunglasses and apply sunscreen!");
} else if (isCloudy) {
  console.log("It's cloudy. It might rain later, so keep an umbrella handy.");
} else {
  console.log("The weather is clear. Enjoy your day!");
}
