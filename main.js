let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".close-menu");

let navMenu = document.querySelector(".nav-menu");

let drawer = document.querySelector(".drawer");

openMenu.addEventListener('click', () => {
    navMenu.classList.add('drawer');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('drawer');
})
