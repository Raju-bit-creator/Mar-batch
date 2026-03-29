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

function helloWorld() {
  let message = "Hello, World!";
  console.log(message);
}
helloWorld();

const showAlert = (type, message) => {
  console.log(`${type}: ${message}`);
};
showAlert("Success", "Data saved successfully!");
showAlert("fail", "Data not save!");

let user = ["Alice", "Bob", "Charlie"];

const signUp = (name) => {
  const regsteredUsers = user.find((u) => u === name);
  if (regsteredUsers) {
    console.log("User already exists!");
  } else {
    console.log("not register yet !!");
  }
};
signUp("Alice");
signUp("David");
