const menuBtn = document.querySelector('.header__toggle');
const menuMobile = document.querySelector('.main-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-open');
  menuMobile.classList.toggle('is-open');
});
