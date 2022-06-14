"use strict";

const mySwiper = new Swiper(".services__swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl:  ".swiper-nav__next_services",
    prevEl:  ".swiper-nav__prev_services",
  },

  speed: 1000,

  autoplay: false,


});


const partnersSwiper = new Swiper(".partners__slider", {
  direction: 'horizontal',
  watchOverflow: true,
  slidesPerView: 4,
  loop: true,
  spaceBetween: 40,
  centeredSlides: false,
  navigation: {
    nextEl:  ".swiper-nav__next_partners",
    prevEl:  ".swiper-nav__prev_partners",
  },

  autoplay: true,
  effect: "slide",

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      autoHeight: true
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
      autoHeight: false,
    },

    880: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: false,
     // autoHeight: true,
    },

    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: false,
     // autoHeight: true,
    },

    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
      centeredSlides: false,
      //autoHeight: true,
    }
  }

});

$(document).ready(function()  {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    const mySwiper = new Swiper(".reviews__cards", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: false,

      navigation: {
        nextEl:  ".swiper-nav__next_reviews",
        prevEl:  ".swiper-nav__prev_reviews",
      },

      speed: 1000,

      autoplay: false,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          centeredSlides: false,
        },
        // when window width is >= 480px
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: false,
          autoHeight: true,
        },

        880: {
          slidesPerView: 3,
          spaceBetween: 40,
          centeredSlides: false,
          autoHeight: true,
        },


      }


    });
  }
});


$(document).ready(function()  {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    const mySwiper = new Swiper(".gallery__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: false,

      navigation: {
        nextEl:  ".swiper-nav__next_gallery",
        prevEl:  ".swiper-nav__prev_gallery",
      },

      speed: 1000,

      autoplay: true,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          centeredSlides: false,
        },
        // when window width is >= 480px
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: false,
          autoHeight: true,
        },

        900: {
          slidesPerView: 3,
          spaceBetween: 40,
          centeredSlides: false,
          autoHeight: true,
        },

      }


    });
  }
});

$(document).ready(function()  {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    const mySwiper = new Swiper(".about-company__slider", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      variableWidth: true,
      centeredSlides: false,

      navigation: {
        nextEl:  ".swiper-nav__next_about-company",
        prevEl:  ".swiper-nav__prev_about-company",
      },

      speed: 1000,

      autoplay: true,


    });
  }
});

