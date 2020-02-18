"use strict";

let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.series__arrow',
      },
    breakpoints: {
        575: {
            slidesPerView: 2,
        }
    }
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('menu-btn--active');
    menu.classList.toggle('header--active');
});

