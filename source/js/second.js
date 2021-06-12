const openButtonSecond = document.querySelector('.header-second-nav__open-btn');
const closeButtonSecond = document.querySelector('.header-second-nav__close-btn');
const swither = document.querySelector('.sw');
const switherMobile =document.querySelectorAll('.header-second-nav__item-mobile');




swither.addEventListener('click', function () {
  if (closeButtonSecond.classList.contains('header-hidden-second')) {

    closeButtonSecond.classList.remove('header-hidden-second');

    openButtonSecond.classList.add('header-hidden-second');
    switherMobile.forEach(function(userItem) {
      userItem.classList.remove('header-hidden-second');

    });
  }

    else {

    openButtonSecond.classList.remove('header-hidden-second');

    closeButtonSecond.classList.add('header-hidden-second');
    switherMobile.forEach(function(userItem) {
      userItem.classList.add('header-hidden-second');

    });
   }
});
