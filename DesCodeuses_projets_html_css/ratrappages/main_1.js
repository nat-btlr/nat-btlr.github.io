var buttonDark = document.getElementById("dark");
var buttonMenu = document.getElementById("menu");

var main = document.getElementById("main");
var navigation = document.getElementById("navigation");
var navLink = document.getElementById("navlink");

buttonMenu.addEventListener('click', openMenu)

function goDark() {
    main.classList.toggle("darkMode");
    navigation.classList.toggle("darkMode");
}

function openMenu() {
    navLink.classList.toggle("active");
}
