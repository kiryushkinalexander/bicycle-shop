const body = document.querySelector('.page__body');
const header = document.querySelector('.page-header');
const toggleNav = document.querySelector('.page-header__toggle');
const nav = document.querySelector('.page-header__nav')
const mainNavClose = document.querySelector('.main-nav__list');
const menuItem = document.querySelector('.main-nav__link');
const anchors = document.querySelectorAll('a[href*="#"]');
const telephoneInput = document.querySelector('.form__input--telephone')
const TELEPHONE_REGEXP = /^\d[\d\(\)\ -]{4,14}\d$/;
const telephoneMap = {
  regex: 'Поле может содержать только цифры'
}


// Scroll
for (let anchor of anchors) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: 'start'
    })
  })
}


//Menu open/close
header.classList.remove('page-header--nojs');

toggleNav.addEventListener ('click', () => {
  if (header.classList.contains('page-header--opened')) {
    header.classList.remove('page-header--opened');
    body.style.overflowY = 'scroll';
  } else {
    header.classList.add('page-header--opened');
    body.style.overflowY = 'hidden';
    nav.style.overflowY = 'auto';
  }
});

mainNavClose.addEventListener ('click', () => {
  if (menuItem.classList.contains('main-nav__link')) {
    header.classList.remove('page-header--opened');
    body.style.overflowY = 'scroll';
  }
});

//Validation
telephoneInput.addEventListener('input', () => {
  const telephones = telephoneInput.value.toLowerCase().trim().split(' ');


  telephones.forEach((telephone) => {
    if(!telephoneInput.value) {
      telephoneInput.setCustomValidity('');
    }  else if (!TELEPHONE_REGEXP.test(telephone)) {
      telephoneInput.setCustomValidity(telephoneMap.regex);
    } else {
      telephoneInput.setCustomValidity('');
    }

    telephoneInput.reportValidity();
  })
});
