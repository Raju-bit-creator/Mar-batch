// let a = 10;
// let b = 20;

// let sum = a + b;
// console.log(sum);

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero";
  }
  return x / y;
}

let sum = add(100, 200);
console.log(sum);

// let result = add(a, b);
// console.log("Addition: ", result);
