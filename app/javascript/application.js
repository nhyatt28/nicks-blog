// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails


window.onclick = function (event) {

    if (!event.target.matches('.dropbtn') && !event.target.matches('.burger-img')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let burgerDropDown = document.getElementsByClassName("mobile-menu");
        let i;
        for (i = 0; i < dropdowns.length; i++) { 
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            let openBurger = burgerDropDown[i];
            if (openBurger.classList.contains('display-menu')) {
                openBurger.classList.remove("display-menu");
            }
        }
    }
}
