$(function () {
  $('.header__menu-burger').click(function(event) {
    $('.header__menu-burger,.header__nav').toggleClass('active');
  });

  // if ($(window).width() < 769) {
  //   $('.header__logo').appendTo($('.header__mob-container .container'))
  //   $('.header__menu').appendTo($('.header__mob-container .container'))
  //   // $('.header__content').appendTo($('.header__image'))
  // }


})

const headerMobile = document.querySelector('.header__mob-container');
const callback = function(entries, observer) {
  if (entries[0].isIntersecting) {
    headerMobile.classList.remove('scroll')
  } else {
    headerMobile.classList.add('scroll')
  }
}

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerMobile);
