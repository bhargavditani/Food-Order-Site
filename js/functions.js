async function searchMealByName(searchQuery, categoryValue) {
  try {
    if (searchQuery.length !== 0 && categoryValue === 'All') {
      const response = await newAxios.get('/search.php', {
        params : { s: `${searchQuery}`}
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Something Went Wrong');
      }
    } else if (searchQuery.length !== 0 && categoryValue !== 'All') {
        const response = await newAxios.get('/filter.php', {params: {c:`${categoryValue}`}});
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error('Something Went Wrong');
        }
    } else if (searchQuery.length === 0 && categoryValue !== 'All') {
        const response = await newAxios('/filter.php', {
          params: {c: `${categoryValue}`}
        });
        if (response.status === 200) {
          return response.data;
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

async function mealByNameData(response, searchQuery, categoryValue) {
  let result;
  const inputField = document.querySelector('#search');
  if (response.meals !== null) {
    if (categoryValue === 'All') {
      sessionStorage.setItem('response', JSON.stringify(response));
      inputField.value = '';
      location.assign('../search-result.html');
    } else {
      result = response.meals.filter(meal => meal.strMeal.toLowerCase().includes(searchQuery));
      if (result.length) {
        sessionStorage.setItem('response', JSON.stringify({meals: result}));
        inputField.value = '';
        location.assign('../search-result.html');
      } else {
        throw new Error('Nothing Found!')
      }
    }
  } else {
    throw new Error('Nothing Found!')
  }
}