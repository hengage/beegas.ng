// "use strict";

const toggleMenuBar = (x) => {
    x.classList.toggle('change')
}


const menu = document.getElementById('menu-bar');

menu.addEventListener('click', () => {
    // console.log(menu)
    menu.classList.toggle('change')
})

const menuTray = document.getElementById('menu-tray');

menu.addEventListener('click', () => {
    menuTray.classList.toggle('menu-tray');
    console.log(menuTray.classList)
})

const contactLink = document.getElementById('contact-link');
contactLink.addEventListener('click', () => {
    menuTray.classList.remove('menu-tray');
    menu.classList.remove('change')
})

// document.addEventListener("DOMContentLoaded", () => {
//     console.log(menuTray.classList);
//   });


