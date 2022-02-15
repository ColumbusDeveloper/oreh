import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();



import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  
  modules: [Navigation, Pagination],
  
});



import bootstrap from 'bootstrap';

let slider1 = new Swiper ('.slider1', {
    loop: true,
  
    slidesPerView:1,
  
  
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  
    breakpoints: {
      375:{
        slidesPerView:1,
      },
  
      576:{
        slidesPerView:1,
      },
  
      992:{
        slidesPerView:1,
      },
  
      1200:{
        slidesPerView:1,
      },
  
  
  
    },
  
    
  
  
}) 
  
  
let slider2 = new Swiper ('.slider2', {
  loop: true,
  

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView:3,
  
  breakpoints: {
    320:{
      slidesPerView:1,
    },

    768:{
      slidesPerView:2,
    },

    992:{
      slidesPerView:3,
    },

  },

  spaceBetween:30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  

})
  
let slider3 = new Swiper ('.slider3', {
  loop: true,
  

  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },

  slidesPerView:4,

  spaceBetween:60,
  
  zoom: {
    maxRatio: 2,
  },

  toggle:true,

  breakpoints: {
    320:{
      slidesPerView:1,
    },

    480:{
      slidesPerView:2,
    },

    576:{
      slidesPerView:3,
    },

    1200:{
      slidesPerView:4,
    },



  },


})
  
let slider4 = new Swiper ('.slider4', {
  loop: true,
  

  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },

  slidesPerView:4,

  spaceBetween:60,
  
  zoom: {
    maxRatio: 2,
  },

  toggle:true,

  breakpoints: {
    320:{
      slidesPerView:1,
    },

    480:{
      slidesPerView:2,
    },

    576:{

      slidesPerView:3,
    },

    1200:{
      slidesPerView:4,
    },



  },


})
  
  
  
  
  
const iconMenu = document.querySelector(".menu__btn");
const menuBody=document.querySelector(".menu__box");
if (iconMenu) {

iconMenu.addEventListener("click", function(e) {
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
}) 
}
  
  
  
const burgerIcon = document.querySelector(".navbar-toggler1");
const burgerIconCrossItemTop =document.querySelector(".mid-level-cross-top");
const burgerIconCrossItemBottom =document.querySelector(".mid-level-cross-bottom");
const burgerIconOnTop =document.querySelector(".top-level-mobile");
const burgerIconOnBottom =document.querySelector(".mid-level-burger");

if (burgerIcon) {
  
  burgerIcon.addEventListener("click", function(e) {
    burgerIcon.classList.toggle("_none");
    burgerIconCrossItemTop.classList.toggle("_active");
    burgerIconCrossItemBottom.classList.toggle("_active");
    burgerIconOnTop.classList.toggle("_none");
    burgerIconOnBottom.classList.toggle("_none");
  }) 
}
  
  
console.log("Hello!!!");







