document.querySelector('.hamburger-menu').addEventListener('click', (event) => {
    const hamburgerMenuItems_El = document.querySelector('.hamburger-menu-items');
    if (hamburgerMenuItems_El.style.display === 'none') {
        hamburgerMenuItems_El.style.display = 'inline-flex';
    } else {
        hamburgerMenuItems_El.style.display = 'none';
    }
});

document.querySelector('#search-button').addEventListener('click', (event) => {
    const searchInput_El = document.querySelector('#search');
    const searchQuery_string = searchInput_El.value.trim().toLowerCase();
    try {
        if (searchQuery_string.length > 0 && searchQuery_string.length < 255) {
            searchMealByName_function(searchQuery_string).then(response => mealByNameData_function(response)).catch(error => {
                alert(error.message);
            });
        } else {
            throw new Error('Enter Valid Data');
        }
    } catch (error) {
        alert(error.message);
    }//catch block closed
});