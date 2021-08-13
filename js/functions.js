async function searchMealByName_function(searchQuery_string) {
    try {
       let response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery_string}`);
        if (response.status === 200) {
          return await response.json();
        } else {
          throw new Error('Something Went Wrong');
        }
  } catch(error) {
      throw error;
  }//catch closed
}

async function mealByNameData_function(response){
  if (response.meals !== null){
    sessionStorage.setItem('response', JSON.stringify(response));
    const inputField = document.querySelector('#search');
    inputField.value='';
    location.assign('../search-result.html');
  } else {
    throw new Error('Nothing Found!')
  }
}