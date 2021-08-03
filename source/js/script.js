const header = document.querySelector('.page-header');
const toggleNav = document.querySelector('.page-header__toggle');

header.classList.remove('page-header--nojs');


toggleNav.addEventListener ('click', () => {
  if (header.classList.contains('page-header--opened')) {
    header.classList.remove('page-header--opened');
  } else {
    header.classList.add('page-header--opened');
  }
});
