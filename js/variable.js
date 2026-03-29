// var let const = "variable declaration keywords in js";

var name1 = "kishor";
var name2 = "uttam";
let age = 25;
const city = "hyderabad";

console.log(name1);
console.log(age);
console.log(city);

// scope of var is global and function scope
// var a = 10;
// {
//   var a = 20;
//   console.log("inner1 a:", a);
//   var a = 30;
//   console.log("inner2 a:", a);
// }
// console.log("outer a:", a);

// scope of let and const is block scope
let b = 10;
{
  let b = 20;
  console.log("inner b:", b);
}
console.log("outer b:", b);

//const scope is also block scope but we cannot reassign the value of const variable

const c = 10;
{
  const c = 20;
  console.log("inner c:", c);
}
console.log("outer c:", c);
