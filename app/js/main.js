$(document).ready(function () {
  $('.header__menu-burger').click(function(event) {
    $('.header__menu-burger,.header__nav').toggleClass('active');
  });

  $('.choose__slider-wrapper').slick({
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        }
      },
      {
        breakpoint: 319,
        settings: {
          arrows: false,
          dots: true,
        }
      },
    ],
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
// const swiper = new Swiper('.choose__slider', {
//   navigation: {
//     nextEl: '.choose__slider-arrow-next',
//   },
//   slidesPerView: 2,
// });