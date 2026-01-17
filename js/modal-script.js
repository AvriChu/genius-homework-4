// Модал
const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.open-btn');
const modalBtnClose = document.querySelector('.modal-window--cross-button');
const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
