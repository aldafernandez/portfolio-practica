let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');

let drawer = document.querySelector('.drawer');

openMenu.addEventListener('click', () => {
    drawer.classList.toggle('show');
});

