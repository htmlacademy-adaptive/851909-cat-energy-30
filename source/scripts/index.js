const menuBtn = document.querySelector('.main-nav__toggle');
const menuMobile = document.querySelector('.main-nav__wrapper');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('main-nav__wrapper--active');
});
