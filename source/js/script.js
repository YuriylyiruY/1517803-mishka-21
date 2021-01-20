var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header-nav__nav-toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav')) {
    navMain.classList.remove('header-nav');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('header-nav');
    navMain.classList.remove('main-nav--opened');
  }
});

var navMainForm = document.querySelector('.week-goods__order-form');
var navToggleForm = document.querySelector('.week-goods-wraper__submit');

navToggleForm.addEventListener('click', function () {
  if (navMainForm.classList.contains('order-form-not')) {
    navMainForm.classList.remove('order-form-not');
    navMainForm.classList.add('order-form');
  } else {
    navMainForm.classList.add('order-form-not');
    navMainForm.classList.remove('order-form');
  }
});

var navMainFormNot = document.querySelector('.week-goods__order-form');
var navToggleFormNot = document.querySelector('.order-form__submit');

navToggleFormNot.addEventListener('click', function () {
  if (navMainFormNot.classList.contains('order-form')) {
    navMainFormNot.classList.remove('order-form');
    navMainFormNot.classList.add('order-form-not');
  } else {
    navMainFormNot.classList.add('order-form');
    navMainFormNot.classList.remove('order-form-not');
  }
});
