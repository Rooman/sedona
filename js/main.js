document.addEventListener('DOMContentLoaded', function () {
  var navMain = document.querySelector('.main-nav');
  var navOpen = document.querySelector('.main-nav__toggle-open');

  console.log(navOpen);

  navOpen.addEventListener('click', function () {
    console.log('open');
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    }
  });

  var navClose = document.querySelector('.main-nav__toggle-close');
  navClose.addEventListener('click', function () {
    console.log('close');
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  });

});
//
// navMain.classList.remove('main-nav--nojs');
//
// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });
