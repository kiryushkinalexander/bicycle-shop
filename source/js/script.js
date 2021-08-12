const body = document.querySelector('.page__body');
const header = document.querySelector('.page-header');
const toggleNav = document.querySelector('.page-header__toggle');
const mainNavClose = document.querySelector('.main-nav__list');
const menuItem = document.querySelector('.main-nav__link')

header.classList.remove('page-header--nojs');

toggleNav.addEventListener ('click', () => {
  if (header.classList.contains('page-header--opened')) {
    header.classList.remove('page-header--opened');
    body.style.overflow = 'scroll';
  } else {
    header.classList.add('page-header--opened');
    body.style.overflow = 'hidden';
  }
});

mainNavClose.addEventListener ('click', () => {
  if (menuItem.classList.contains('main-nav__link')) {
    header.classList.remove('page-header--opened');
    body.style.overflow = 'scroll';
  } else {
    return
  }
});
