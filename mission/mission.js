const themeSelector = document.querySelector('select');


function changeTheme() {
    let selected_value = themeSelector.value;
    const logoImage = document.querySelector('.byuilogo');

    if (selected_value == 'dark'){
        document.body.classList.add('dark');
        logoImage.setAttribute('src', 'byui-logo-white.png'); 
    }
    
    else {
        document.body.classList.remove('dark');
        logoImage.setAttribute('src', 'byui-logo-blue.webp');
    }
}


themeSelector.addEventListener('change', changeTheme);