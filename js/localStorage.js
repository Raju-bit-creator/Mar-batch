localStorage.setItem("name", "uttam");
localStorage.setItem("age", 25);
localStorage.setItem("token", "pundfsddfsdfsdfsdf234334534");

const token = localStorage.getItem("token");
console.log("my token: ", token);

let user = {
  name: "uttam",
  age: 25,
  city: "sydney",
};

localStorage.setItem("user", JSON.stringify(user));
const userData = localStorage.getItem("user");
const userName = userData.name;
console.log("user name: ", JSON.parse(userData).name);
