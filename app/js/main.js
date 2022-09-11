$(document).ready(function () {

  //header
  $('.header__menu-burger').click(function() {
    $('.header__menu-burger,.header__nav').toggleClass('active');
  });

  // scroll to #

  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
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

//Добавить класс хедеру при скролле

window.addEventListener('DOMContentLoaded', () => {
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

  // let text = {
  //   first: 'Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo, tập trung làm việc. Bạn có thể chọn uống đắng nếu quen vị cà phê đắng đậm – nhưng đủ yên tâm vì chắc chắn Revo Đậm Đà không chứa bất kỳ một loại hương liệu nào.',
  //   second: 'Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm bạn có thể quyện vị đắng của Revo Đậm Đà cùng với vị ngọt béo của sữa đặc theo tỷ lệ phù hợp để tự pha một ly cà phê sữa đá thơm ngon.',
  //   third: 'Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica pháp chế biến này không phải cho mật ong vào cà phê, mà là hạt cà phê Arabica sau khi được tách vỏ, giữ lại “lớp thịt” trên hạt với độ ngọt cao, khi phơi khô sẽ để lại màu nâu đỏ đặc trưng của mật ong với vị chua nhẹ như trái cây họ táo và hậu vị kéo dài.',
  //   fourth: 'Revo Natural là dòng cà phê đặc biệt của Revo Coffee dành riêng. Ở Việt Nam, vùng Cầu Đất – Đà Lạt được nhiều chuyên gia cà phê thế giới thẩm định là vùng trồng cà phê Arabica ngon nhất Việt Nam. Và những hạt cà phê Arabica của Revo Origin được trồng từ mảnh đất đó.',
  // }

  function addNodeInModal(el) {
    let duplicateNode = el.cloneNode(true);
    document.querySelector('.modal__inner').innerHTML = '';
    document.querySelector('.modal__inner').append(duplicateNode);
    // document.querySelector('.modal__inner .combo__text').innerHTML = text[el.id];
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
