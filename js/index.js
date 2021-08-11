function myFunction(){
    const hamburgerMenuItems_El = document.querySelector('.hamburger-menu-items');
    console.log('Count');
    if (hamburgerMenuItems_El.style.display === 'none'){
        hamburgerMenuItems_El.style.display = 'inline-flex';
    } else {
        hamburgerMenuItems_El.style.display = 'none';
    }
}