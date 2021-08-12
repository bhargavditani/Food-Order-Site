document.querySelector('.hamburger-menu').addEventListener('click',(event)=>{
    const hamburgerMenuItems_El = document.querySelector('.hamburger-menu-items');
    if (hamburgerMenuItems_El.style.display === 'none'){
        hamburgerMenuItems_El.style.display = 'inline-flex';
    } else {
        hamburgerMenuItems_El.style.display = 'none';
    }
});

document.querySelector('#search-button').addEventListener('click',(event) => {
    const searchInput_El = document.querySelector('#search');
    let searchQuery_string = searchInput_El.value.trim().toLowerCase();
    if(searchQuery_string.length > 0 && searchQuery_string.length < 255){
        searchMealByName_function(searchQuery_string);
    }
});

// document.querySelector('#search').addEventListener('change', (event) => {
//     let searchQuery_string = event.target.value.trim().toLowerCase();
//     searchMealByName_function(searchQuery_string);
// })