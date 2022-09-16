$(document).ready(function () {

  //header
  $('.header__menu-burger').click(function() {
    if (window.innerWidth > 768) {
      $('.header__menu-burger,.header__nav-duplicate').toggleClass('active');
      // if ($('.header__cart-wrapper').hasClass('active')) {
      //   $('.header__cart-wrapper').removeClass('active')
      // }
    } else {
      $('.header__menu-burger,.header__nav').toggleClass('active');
      // if ($('.header__cart-wrapper').hasClass('active')) {
      //   $('.header__cart-wrapper').removeClass('active')
      // }
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

  // cart

  let counter = 0;

  window.addEventListener('click', (e) => {
    if (e.target.closest('.add-to-cart')) {
      e.preventDefault();
      if (counterIncrement(e.target)) {
        createCartItem(e.target)
      }
    }
  })

  document.querySelector('.header__cart-wrapper').addEventListener('click', (e) => {
    let count;
    let menuCounter = document.querySelector('.header__menu-counter');

    

    if (e.target.closest('.header__cart-minus') || e.target.closest('.header__cart-plus')) {
      count = e.target.closest('.header__cart-counter').querySelector('.header__cart-count');
    }

    if (e.target.closest('.header__cart-minus')) {
      if (+count.innerText > 1) {
        count.innerText = --count.innerText;
        menuCounter.textContent = `${--counter}`;
      }
    }

    if (e.target.closest('.header__cart-plus')) {
      count.innerText = ++count.innerText;
      menuCounter.textContent = `${++counter}`;
    }
  })

  function createCartItem(el) {
    let item = el.closest('.item');
    let itemId = item.dataset.id;
    let imgSrc = item.querySelector('img').src;
    let title = item.querySelector('.subtitle').textContent;
    let price = item.querySelector('.price').childNodes[0].nodeValue;
    let template = `<div class="header__cart-item" data-id="${itemId}">
                      <div class="header__cart-image">
                        <img class="header__cart-img" src="${imgSrc}" alt="coffee">
                      </div>
                      <div class="header__cart-descr">
                        <p class="header__cart-title subtitle">${title}</p>
                        <div class="header__cart-counter">
                          <div class="header__cart-minus">-</div>
                          <div class="header__cart-count">1</div>
                          <div class="header__cart-plus">+</div>
                        </div>
                        <p class="header__cart-price text-accent">${price}</p>
                      </div>
                    </div>`
    document.querySelector('.header__cart-inner').insertAdjacentHTML('beforeend', template)
  }

  function counterIncrement(el) {
    let menuCounter = document.querySelector('.header__menu-counter');
    let itemsInCart = document.querySelectorAll('.header__cart-inner .header__cart-item');

    menuCounter.textContent = `${++counter}`;
    if (!menuCounter.classList.contains('visible')) {
      menuCounter.classList.add('visible');
    }

    for (let item of itemsInCart) {
      if (item.dataset.id == el.closest('.item').dataset.id) {
        item.querySelector('.header__cart-count').innerText++;
        return false
      }
    }

    return true
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
