$(document).ready(function () {

  //header
  $('.header__menu-burger').click(function() {
    if (window.innerWidth > 768) {
      $('.header__menu-burger,.header__nav-duplicate').toggleClass('active');
    } else {
      $('.header__menu-burger,.header__nav').toggleClass('active');
    }

    if ($('.header__cart-wrapper').hasClass('active')) {
      $('.header__cart-wrapper').removeClass('active')
    }
  });

  $('.header__nav-duplicate a').click(function() {
    $('.header__menu-burger,.header__nav-duplicate').removeClass('active')
  });

  $('.header__menu-cart').click(function() {
    $('.header__cart-wrapper').toggleClass('active');

    if ($('.header__nav-duplicate').hasClass('active')) {
      $('.header__menu-burger,.header__nav-duplicate').removeClass('active');
    }

    if ($('.header__nav').hasClass('active')) {
      $('.header__menu-burger,.header__nav').removeClass('active');
    }
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

  //combo

  $('.combo__slider-wrapper').slick({
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
});



window.addEventListener('DOMContentLoaded', () => {

  let btns = document.querySelectorAll('.add-to-cart');
  let counter = 0;

  for (let btn of btns) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log('object');
      document.querySelector('.header__menu-counter').textContent = `${++counter}`;
      if (!document.querySelector('.header__menu-counter').classList.contains('visible'))
      document.querySelector('.header__menu-counter').classList.add('visible');
    });
  }

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

  // popup combo

  function addNodeInModal(el) {
    let duplicateNode = el.cloneNode(true);
    document.querySelector('.modal__inner').innerHTML = '';
    document.querySelector('.modal__inner').append(duplicateNode);
  }

  function openModal(e) {
    if (e.target.closest('.combo__item') && !e.target.closest('.combo__buttons')) {
      document.querySelector('.modal').classList.add('visible');
      addNodeInModal(e.target.closest('.combo__item'))
    }
  }

  window.addEventListener("resize", function() {
    if (window.innerWidth < 769) {
      document.querySelector('.combo__slider').removeEventListener('click', openModal)
    } else {
      document.querySelector('.combo__slider').addEventListener('click', openModal);
    }
  });
  if (window.innerWidth > 768) {
    document.querySelector('.combo__slider').addEventListener('click', openModal);
  }
  
  //закрытие по области и крестику
  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.closest('.modal__close') || !e.target.closest('.modal__inner')) {
      document.querySelector('.modal').classList.remove('visible');
    }
  });
  //закрытие по области по Esc
  window.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
      document.querySelector('.modal').classList.remove('visible');
    }
  });
});
