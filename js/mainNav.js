"use strict";

// плавный скролл по якорю
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



// добавляет активный класс на меню с якорями

let selectionLinks = Array.from(document.querySelectorAll('.main-nav__link'));

if (selectionLinks !== null) {
  selectionLinks.forEach(item => {
    item.addEventListener('click', () => {
      selectionLinks.forEach(item => {
        item.classList.remove('main-nav__link_active');
      });
      item.classList.add('main-nav__link_active');
    })
  })
}

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

if (window.matchMedia("(max-width: 810px)").matches) {
  const menuLink =  document.querySelectorAll('.main-nav__item');
  const closeNav = document.querySelector('.main-nav__close');

  if (closeNav) {
    closeNav.addEventListener('click', function () {
      $('.main-nav').slideToggle();
    })
  }

  if (menuLink) {
    menuLink.forEach((item) => {
      item.addEventListener('click', function () {
        $('.main-nav').slideToggle();
      })
    });
  }
}



if (window.matchMedia("(min-width: 811px)").matches) {
  let sections = $('section.scroll-block'),
      nav = $('.main-nav'),
      nav_height = nav.outerHeight();
  $(window).on('scroll', function () {
    $('.main-nav__link').removeClass('main-nav__link_active');
    let cur_pos = $(this).scrollTop();
    sections.each(function() {
      let top = $(this).offset().top - nav_height - 180,
          bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('main-nav__link_active');
        sections.removeClass('scrolling');
        $(this).addClass('scrolling');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('main-nav__link_active');
      }
    });
  });
  nav.find('a').on('click', function () {
    let $el = $(this),
        id = $el.attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 600);
    return false;
  });
}
