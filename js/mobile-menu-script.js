// Мобильное-меню
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-open-btn');
const menuBtnClose = document.querySelector('.menu-cross-button');
const toggleMobile = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMobile);
menuBtnClose.addEventListener('click', toggleMobile);
