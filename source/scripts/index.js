const menuBtn = document.querySelector('.header__toggle');
const menuMobile = document.querySelector('.main-nav');
const contactsMap = document.querySelector('.contacts__map');

menuBtn.classList.remove('header__toggle--no-js');
menuMobile.classList.remove('main-nav--no-js');
contactsMap.classList.remove('contacts__map--no-js');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-open');
  menuMobile.classList.toggle('is-open');
});
