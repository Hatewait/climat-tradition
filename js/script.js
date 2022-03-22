"use strict";

const mySwiper = new Swiper(".services__swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl:  ".services__nav-next",
    prevEl:  ".services__nav-prev",
  },

  speed: 1000,

  autoplay: false,


});


const partnersSwiper = new Swiper(".partners__slider", {
  //slidesPerView: 4,
  loop: true,
  spaceBetween: 40,
  centeredSlides: false,
  navigation: {
    nextEl:  ".slider-button-next",
    prevEl:  ".slider-button-prev",
  },

  autoplay: true,
  effect: "slide",

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 4,
      spaceBetween: 40,
      centeredSlides: false,
      autoHeight: true,
    }
  }

});


const anchors = document.querySelectorAll('.main-nav__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



const anchorsModal = document.querySelectorAll('.intro-product__nav-list a')

for (let anchor of anchorsModal) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
// добавляет активный класс на боковое меню с якорями

let selectionLinks = Array.from(document.querySelectorAll('.main-nav__item'));

if (selectionLinks !== null) {
  selectionLinks.forEach(item => {
    item.addEventListener('click', () => {
      selectionLinks.forEach(item => {
        item.classList.remove('main-nav__item_active');
      });
      item.classList.add('main-nav__item_active');
    })
  })
}

// active class of menu items onscroll
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (window.innerWidth > 768) {
    document.querySelectorAll('.scrolling').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('.main-nav').clientHeight <= scrollDistance) {
        document.querySelectorAll('.main-nav__item').forEach((el) => {
          if (el.classList.contains('main-nav__item_active')) {
            el.classList.remove('main-nav__item_active');
          }
        });

        document.querySelectorAll('.selection-nav li')[i].classList.add('main-nav__item_active');
      }
    });
  }
});

// menu burger
$(document).ready(function(){

  $('.header__menu-trigger').click(function () {
    $('.main-nav').slideToggle();
  });
  $(window).resize(function(){
    if ($(window).width() > 810) {
      $('.header__menu-trigger').removeAttr('style');
    };
  });
});



$(document).ready(function()  {
  if (window.matchMedia("(max-width: 810px)").matches) {
    $('.reviews__wrap').slick({
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      //variableWidth: true,
      //centerMode: true,
      //centerPadding: '60px',
      autoplay:true,
      appendArrows: $('.reviews__arrows'),
      prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="/img/icons/arrow-prev.svg" alt=""></button>',
      nextArrow: '<button id="next" type="button" class="btn btn-juliet"> <img src="/img/icons/arrow-next.svg" alt=""></button>',

    });
  }
});


$(document).ready(function()  {
  if (window.matchMedia("(max-width: 810px)").matches) {
    $('.gallery__photos').slick({
      arrows: true,
      dots: false,
      slidesToShow: 1,
     /* centerPadding: '60px',*/
      //variableWidth: true,
      //variableWidth: true,
      //centerMode: true,
      //centerPadding: '60px',
      autoplay:true,
      infinite: true,
      appendArrows: $('.gallery__arrows'),
      prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="/img/icons/arrow-prev.svg" alt=""></button>',
      nextArrow: '<button id="next" type="button" class="btn btn-juliet"> <img src="/img/icons/arrow-next.svg" alt=""></button>',

    });
  }
});


$(document).ready(function()  {
  if (window.matchMedia("(max-width: 810px)").matches) {
    $('.about-company__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 1,
      //centerPadding: '60px',
      variableWidth: true,
      autoplay:true,
      appendArrows: $('.about-company__arrows'),
      prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="/img/icons/arrow-prev.svg" alt=""></button>',
      nextArrow: '<button id="next" type="button" class="btn btn-juliet"> <img src="/img/icons/arrow-next.svg" alt=""></button>',

    });
  }
});
