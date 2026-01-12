// Модал
// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.open-btn');
// const modalBtnClose = document.querySelector('.modal-button');
// const toggleModal = () => modal.classList.toggle('is-hidden');
// Мобильное-меню
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-open-btn');
const menuBtnClose = document.querySelector('.menu-cross-button');
const toggleMobile = () => mobileMenu.classList.toggle('is-open');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);
menuBtnOpen.addEventListener('click', toggleMobile);
menuBtnClose.addEventListener('click', toggleMobile);
