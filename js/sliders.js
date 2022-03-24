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

$(document).ready(function()  {
  if (window.matchMedia("(max-width: 810px)").matches) {
    const mySwiper = new Swiper(".reviews__cards", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: false,

      navigation: {
        nextEl:  ".slider-button-prev_reviews",
        prevEl:  ".slider-button-next_reviews",
      },

      speed: 1000,

      autoplay: false,


    });
  }
});


$(document).ready(function()  {
  if (window.matchMedia("(max-width: 810px)").matches) {
    const mySwiper = new Swiper(".gallery__slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: false,

      navigation: {
        nextEl:  ".slider-button-prev_gallery",
        prevEl:  ".slider-button-next_gallery",
      },

      speed: 1000,

      autoplay: true,


    });
  }
});

$(document).ready(function()  {
  if (window.matchMedia("(max-width: 810px)").matches) {
    const mySwiper = new Swiper(".about-company__slider", {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      variableWidth: true,
      centeredSlides: false,

      navigation: {
        nextEl:  ".slider-button-prev_about-company",
        prevEl:  ".slider-button-next_about-company",
      },

      speed: 1000,

      autoplay: true,


    });
  }
});
