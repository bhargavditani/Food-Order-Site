document.querySelector('.hamburger-menu').addEventListener('click', (event) => {
    const hamburgerMenuItems_El = document.querySelector('.hamburger-menu-items');
    if (hamburgerMenuItems_El.style.display === 'none') {
        hamburgerMenuItems_El.style.display = 'flex';
    } else {
        hamburgerMenuItems_El.style.display = 'none';
    }
});


document.querySelector('#search-button').addEventListener('click', (event) => {
    const searchInput_El = document.querySelector('#search');
    const category_El = document.querySelector('#category');
    const searchQuery_string = searchInput_El.value.trim().toLowerCase();
    try {
        if (searchQuery_string.length >= 0 && searchQuery_string.length < 255) {
            searchMealByName_function(searchQuery_string, category_El.value).then(response => mealByNameData_function(response, searchQuery_string, category_El.value)).catch(error => {
                alert(error.message);
            });
        } 
        else {
            throw new Error('Enter Valid Data');
        }
    } catch (error) {
        alert(error.message);
    }//catch block closed
});

function populateCategoryDropDown_function(){
    // debugger
    const select_El = document.querySelector('#category');
    fetch('https://themealdb.com/api/json/v1/1/list.php?c=list',).then(response => {
        if (response.status === 200) {
            return response.json();
        }
    }).then(response => {
        response.meals.forEach(category => {
            const options_El = document.createElement('option');
            options_El.innerHTML = category.strCategory;
            options_El.setAttribute('value',category.strCategory);
            select_El.appendChild(options_El);
        });
    });
}

populateCategoryDropDown_function();