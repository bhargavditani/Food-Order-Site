async function searchMealByName_function(searchQuery_string) {
  try {
    const response = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery_string}`,
    );
    console.log("response", response);
  } catch (error) {
    console.log("error", error.message);
  }
}
