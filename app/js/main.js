$(function () {
  $('.header__menu-burger').click(function(event) {
    $('.header__menu-burger,.header__nav').toggleClass('active');
  });

})

//Добавить класс хедеру при скролле

const headerMobile = document.querySelector('.header__mob-container');
const callback = function(entries, observer) {
  if (entries[0].isIntersecting) {
    headerMobile.classList.remove('scroll')
  } else {
    headerMobile.classList.add('scroll')
  }
};
const headerObserver = new IntersectionObserver(callback);

headerObserver.observe(headerMobile);

//slider-swiper
const swiper = new Swiper('.choose__slider', {
  navigation: {
    nextEl: '.choose__slider-arrow-next',
  },
  slidesPerView: 2,
});