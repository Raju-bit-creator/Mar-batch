// promise
function getData() {
  return new Promise((resolve, reject) => {
    // reject("Failed to fetch data!");
    // console.log("Fetching data... failed");

    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
      // console.log("Fetching data... success");
      console.log("data", data);
    }, 5000);
  });
}
getData();

// console.log("hello world1");

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("hello world0");
//     }, 2000);
//   });
// }
// fetchData();
// console.log("hello world2");
// console.log("hello world3");
// console.log("hello world4");
// console.log("hello world5");

let success = false;

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve({
        name: "John",
        email: "jhon@gmail.com",
      });
    } else {
      reject("Failed to fetch data!");
    }
  }, 3000);
});
// promise
//   .then((data) => {
//     console.log("Data fetched successfully!", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(promise);

// using try catch

// async function fetchData() {
//   try {
//     let data = await promise;
//     console.log("Data fetched successfully!", data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData();

let fetchData = async () => {
  try {
    let data = await promise;
    console.log("Data fetched successfully!", data);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
