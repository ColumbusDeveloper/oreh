import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

import bootstrap from 'bootstrap';





let slider1 = new Swiper ('.slider1', {

    loop: true,
  
    slidesPerView:1,
  
  
    

    
  
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
  
  modules: [Navigation, Pagination],


  

  
  

})





  
let slider3 = new Swiper ('.slider3', {
  loop: true,
  

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  modules: [Navigation, Pagination],

  slidesPerView:1,

  
  spaceBetween:0,
  
  zoom: {
    maxRatio: 0,
  },

})


  
let slider4 = new Swiper ('.slider4', {
  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  modules: [Navigation, Pagination],
  

  slidesPerView:1,

  // spaceBetween:60,
  
  zoom: {
    maxRatio: 2,
  },

  toggle:true,

  // breakpoints: {
  //   320:{
  //     slidesPerView:1,
  //   },

  //   480:{
  //     slidesPerView:2,
  //   },

  //   576:{

  //     slidesPerView:3,
  //   },

  //   1200:{
  //     slidesPerView:4,
  //   },



  // },


})

let slider5 = new Swiper ('.slider5', {
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
  
  modules: [Navigation, Pagination],


  

  
  

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


const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
  slider2.slidePrev();
})
swiperNext.addEventListener('click', () => {
  slider2.slideNext();
})

const swiperPrevSlider4 = document.getElementById('swiperPrev')
const swiperNextSlider4 = document.getElementById('swiperNext')

swiperPrevSlider4.addEventListener('click', () => {
  slider4.slidePrev();
})
swiperNextSlider4.addEventListener('click', () => {
  slider4.slideNext();
})

const swiperPrevSlider5 = document.getElementById('swiperPrev5')
const swiperNextSlider5 = document.getElementById('swiperNext5')

swiperPrevSlider5.addEventListener('click', () => {
  slider5.slidePrev();
})
swiperNextSlider5.addEventListener('click', () => {
  slider5.slideNext();
})

const swiperPrevSlider6 = document.getElementById('swiperPrev6')
const swiperNextSlider6 = document.getElementById('swiperNext6')

swiperPrevSlider6.addEventListener('click', () => {
  slider6.slidePrev();
})
swiperNextSlider6.addEventListener('click', () => {
  slider6.slideNext();
})


  
console.log("Hello!!!");







