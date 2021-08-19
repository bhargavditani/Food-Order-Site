const newAxios = axios.create({
    baseURL: 'https://themealdb.com/api/json/v1/1'
  });

document.querySelector('.hamburger-menu').addEventListener('click', (event) => {
    const hamburgerMenuItems_El = document.querySelector('.hamburger-menu-items');
    if (hamburgerMenuItems_El.style.display == 'none') {
        hamburgerMenuItems_El.style.display = 'flex';
    } else {
        hamburgerMenuItems_El.style.display = 'none';
    }
});


document.querySelector('#search-button').addEventListener('click', async (event) => {
    const searchInput_El = document.querySelector('#search');
    const category_El = document.querySelector('#category');
    const searchQuery = searchInput_El.value.trim().toLowerCase();
    try {
        if (searchQuery.length >= 0 && searchQuery.length < 255) {
            try {
                response = await searchMealByName(searchQuery, category_El.value);
                await mealByNameData(response, searchQuery, category_El.value)
            } catch(error) {
                alert(error.message);
            }
        } 
        else {
            throw new Error('Enter Valid Data');
        }
    } catch (error) {
        alert(error.message);
    }//catch block closed
});

async function populateCategoryDropDown(){
    try {
        const select_El = document.querySelector('#category');
        const response = await newAxios('/list.php', {
            params: {
                c: 'list'
            }
        });
        if (response.status === 200) {
            // responseJSON.meals.some()
            // responseJSON.meals.every()
            // responseJSON.meals.forEach()
            response.data.meals.map((category) => {
                const options_El = document.createElement('option');
                options_El.innerHTML = category.strCategory;
                options_El.setAttribute('value',category.strCategory);
                select_El.appendChild(options_El);
            })
        } else {
            throw new Error('Something Went Wrong');
        }
    } catch (error) {
        null;
    }
}

populateCategoryDropDown();