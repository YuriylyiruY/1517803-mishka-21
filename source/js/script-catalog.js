var navMain = document.querySelector('.goods__order-form');
    var navToggle = document.querySelector('.price__button');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('order-form-not')) {
        navMain.classList.remove('order-form-not');
        navMain.classList.add('order-form');
      } else {
        navMain.classList.add('order-form-not');
        navMain.classList.remove('order-form');
      }
    });

    var navMain = document.querySelector('.goods__order-form');
    var navToggle = document.querySelector('.small');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('order-form-not')) {
        navMain.classList.remove('order-form-not');
        navMain.classList.add('order-form');
      } else {
        navMain.classList.add('order-form-not');
        navMain.classList.remove('order-form');
      }
    });
    var navMain = document.querySelector('.goods__order-form');
    var navToggle = document.querySelector('.big');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('order-form-not')) {
        navMain.classList.remove('order-form-not');
        navMain.classList.add('order-form');
      } else {
        navMain.classList.add('order-form-not');
        navMain.classList.remove('order-form');
      }
    });
