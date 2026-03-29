function fetchData(c) {
  console.log("data is fetching...");

  setTimeout(() => {
    c("Data fetched successfully!");
  }, 2000);
}
fetchData((message) => {
  console.log(message);
});

// anoter eg of callback function
function fetchUserData(userId, callback) {
  console.log(`Fetching data for user ID: ${userId}...`);

  setTimeout(() => {
    const userData = {
      id: userId,
      name: "John Doe",
      email: "uttam@gmail.com",
    };
    callback(userData);
  }, 3000);
}

fetchUserData(123, (data) => {
  console.log("User Data:", data);
});
