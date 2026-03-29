//async and await
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2",
    );
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
fetchData();
