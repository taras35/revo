$(document).ready(function () {

  //header

  $('.header__menu-burger').click(function() {
    $('.header__menu-burger,.header__nav').toggleClass('active');
  });

  //choose

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

  //giftset

  $('.giftset__trigger-item').click(function(e) {
    e.preventDefault();

    $('.giftset__trigger-item').removeClass('giftset__trigger-item--active');
    $('.giftset__content-item').removeClass('giftset__content-item--active');

    $(this).addClass('giftset__trigger-item--active');
    $($(this).attr('href')).addClass('giftset__content-item--active');
  });

  $('.giftset__trigger-item:first').click();


});

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