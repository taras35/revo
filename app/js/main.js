$(function () {
  $('.header__menu-burger').click(function(event) {
    $('.header__menu-burger,.header__nav').toggleClass('active');
  });

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
