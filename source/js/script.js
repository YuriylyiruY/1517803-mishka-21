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
