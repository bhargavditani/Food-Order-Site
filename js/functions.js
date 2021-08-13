async function searchMealByName_function(searchQuery_string, categoryValue) {
  try {
    if (searchQuery_string.length !== 0 && categoryValue === 'All') {
      const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery_string}`);
      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error('Something Went Wrong');
      }
    } else if (searchQuery_string.length !== 0 && categoryValue !== 'All') {
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${categoryValue}`);
        if (response.status === 200) {
          return await response.json();
        } else {
          throw new Error('Something Went Wrong');
        }
    } else if (searchQuery_string.length === 0 && categoryValue !== 'All') {
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${categoryValue}`,);
        if (response.status === 200) {
          return await response.json();
        } else {
          throw new Error('Something Went Wrong');
        }
    } else {
        throw new Error('Enter Valid Data');
    }
  } catch (error) {
    throw error;
  }//catch closed
}

async function mealByNameData_function(response, searchQuery_string, categoryValue) {
  let result;
  const inputField = document.querySelector('#search');
  if (response.meals !== null) {
    if (categoryValue === 'All') {
      sessionStorage.setItem('response', JSON.stringify(response));
      inputField.value = '';
      location.assign('../search-result.html');
    } else {
      result = response.meals.filter(meal => meal.strMeal.toLowerCase().includes(searchQuery_string));
      if (result.length) {
        sessionStorage.setItem('response', JSON.stringify({meals: result}));
        inputField.value = '';
        location.assign('../search-result.html');
      }
      else {
        throw new Error('Nothing Found!')
      }
    }
  } else {
    throw new Error('Nothing Found!')
  }
}