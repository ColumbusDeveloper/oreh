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

let slider6 = new Swiper ('.slider6', {
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
  menuBody.classList.toggle("_active");}) 
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



const btn1 = document.querySelector(".img-choice-info-box__choice-btn-item_item1");
if (btn1) {
  
  btn1.addEventListener("click", function btn1Click () {
    const slide1 =document.querySelector(".img-choice-info-box__img-info-box-item_item1");
    const slide2 =document.querySelector(".img-choice-info-box__img-info-box-item_item2");
    const slide3 =document.querySelector(".img-choice-info-box__img-info-box-item_item3");
    const slide4 =document.querySelector(".img-choice-info-box__img-info-box-item_item4");
    const slide5 =document.querySelector(".img-choice-info-box__img-info-box-item_item5");

    const underline1 =document.querySelector(".img-choice-info-box__underline1");
    const underline2 =document.querySelector(".img-choice-info-box__underline2");
    const underline3 =document.querySelector(".img-choice-info-box__underline3");
    const underline4 =document.querySelector(".img-choice-info-box__underline4");
    const underline5 =document.querySelector(".img-choice-info-box__underline5");

    const iconBright1 =document.querySelector(".img-choice-info-box__symbol-img_item1-bright");
    const iconBright2 =document.querySelector(".img-choice-info-box__symbol-img_item2-bright");
    const iconBright3 =document.querySelector(".img-choice-info-box__symbol-img_item3-bright");
    const iconBright4 =document.querySelector(".img-choice-info-box__symbol-img_item4-bright");
    const iconBright5 =document.querySelector(".img-choice-info-box__symbol-img_item5-bright");

    const iconFade1 =document.querySelector(".img-choice-info-box__symbol-img_item1-fade");
    const iconFade2 =document.querySelector(".img-choice-info-box__symbol-img_item2-fade");
    const iconFade3 =document.querySelector(".img-choice-info-box__symbol-img_item3-fade");
    const iconFade4 =document.querySelector(".img-choice-info-box__symbol-img_item4-fade");
    const iconFade5 =document.querySelector(".img-choice-info-box__symbol-img_item5-fade");

    
    slide1.classList.add("active");
    slide1.classList.replace("none", "active");
    slide2.classList.add("none");
    slide3.classList.add("none");
    slide4.classList.add("none");
    slide5.classList.add("none");

    underline1.classList.add("active");
    underline1.classList.replace("none", "active");
    underline2.classList.add("none");
    underline3.classList.add("none");
    underline4.classList.add("none");
    underline5.classList.add("none");

    iconBright1.classList.add("active"); 
    iconBright1.classList.replace("none", "active");
    iconBright2.classList.add("none");
    iconBright3.classList.add("none");
    iconBright4.classList.add("none");
    iconBright5.classList.add("none");

    iconFade1.classList.add("none"); 
    iconFade1.classList.replace("active", "none");
    iconFade2.classList.add("active");
    iconFade2.classList.replace("none", "active");
    iconFade3.classList.add("active");
    iconFade3.classList.replace("none", "active");
    iconFade4.classList.add("active");
    iconFade4.classList.replace("none", "active");
    iconFade5.classList.add("active");
    iconFade5.classList.replace("none", "active");

  }) 
}


const btn2 = document.querySelector(".img-choice-info-box__choice-btn-item_item2");
if (btn2) {
  
  btn2.addEventListener("click", function btn2Click () {
    const slide1 =document.querySelector(".img-choice-info-box__img-info-box-item_item1");
    const slide2 =document.querySelector(".img-choice-info-box__img-info-box-item_item2");
    const slide3 =document.querySelector(".img-choice-info-box__img-info-box-item_item3");
    const slide4 =document.querySelector(".img-choice-info-box__img-info-box-item_item4");
    const slide5 =document.querySelector(".img-choice-info-box__img-info-box-item_item5");

    const underline1 =document.querySelector(".img-choice-info-box__underline1");
    const underline2 =document.querySelector(".img-choice-info-box__underline2");
    const underline3 =document.querySelector(".img-choice-info-box__underline3");
    const underline4 =document.querySelector(".img-choice-info-box__underline4");
    const underline5 =document.querySelector(".img-choice-info-box__underline5");

    const iconBright1 =document.querySelector(".img-choice-info-box__symbol-img_item1-bright");
    const iconBright2 =document.querySelector(".img-choice-info-box__symbol-img_item2-bright");
    const iconBright3 =document.querySelector(".img-choice-info-box__symbol-img_item3-bright");
    const iconBright4 =document.querySelector(".img-choice-info-box__symbol-img_item4-bright");
    const iconBright5 =document.querySelector(".img-choice-info-box__symbol-img_item5-bright");

    const iconFade1 =document.querySelector(".img-choice-info-box__symbol-img_item1-fade");
    const iconFade2 =document.querySelector(".img-choice-info-box__symbol-img_item2-fade");
    const iconFade3 =document.querySelector(".img-choice-info-box__symbol-img_item3-fade");
    const iconFade4 =document.querySelector(".img-choice-info-box__symbol-img_item4-fade");
    const iconFade5 =document.querySelector(".img-choice-info-box__symbol-img_item5-fade");

  slide1.classList.add("none");
  slide2.classList.add("active");
  slide2.classList.replace("none", "active");
  slide3.classList.add("none");
  slide4.classList.add("none");
  slide5.classList.add("none");

  underline1.classList.add("none");
  underline2.classList.add("active");
  underline2.classList.replace("none", "active");
  underline3.classList.add("none");
  underline4.classList.add("none");
  underline5.classList.add("none");

  iconBright1.classList.add("none"); 
  iconBright1.classList.replace("active", "none");
  iconBright2.classList.add("active");
  iconBright2.classList.replace("none", "active");
  iconBright3.classList.add("none");
  iconBright3.classList.replace("active", "none");
  iconBright4.classList.add("none");
  iconBright4.classList.replace("active", "none");
  iconBright5.classList.add("none");
  iconBright5.classList.replace("active", "none");

  iconFade1.classList.add("active"); 
  iconFade1.classList.replace("none", "active");
  iconFade2.classList.add("none");
  iconFade2.classList.replace("active", "none");
  iconFade3.classList.add("active"); 
  iconFade3.classList.replace("none", "active");
  iconFade4.classList.add("active"); 
  iconFade4.classList.replace("none", "active");
  iconFade5.classList.add("active"); 
  iconFade5.classList.replace("none", "active");


  }) 
}


const btn3 = document.querySelector(".img-choice-info-box__choice-btn-item_item3");
if (btn3) {
  
  btn3.addEventListener("click", function btn3Click () {
    const slide1 =document.querySelector(".img-choice-info-box__img-info-box-item_item1");
    const slide2 =document.querySelector(".img-choice-info-box__img-info-box-item_item2");
    const slide3 =document.querySelector(".img-choice-info-box__img-info-box-item_item3");
    const slide4 =document.querySelector(".img-choice-info-box__img-info-box-item_item4");
    const slide5 =document.querySelector(".img-choice-info-box__img-info-box-item_item5");

    const underline1 =document.querySelector(".img-choice-info-box__underline1");
    const underline2 =document.querySelector(".img-choice-info-box__underline2");
    const underline3 =document.querySelector(".img-choice-info-box__underline3");
    const underline4 =document.querySelector(".img-choice-info-box__underline4");
    const underline5 =document.querySelector(".img-choice-info-box__underline5");

    const iconBright1 =document.querySelector(".img-choice-info-box__symbol-img_item1-bright");
    const iconBright2 =document.querySelector(".img-choice-info-box__symbol-img_item2-bright");
    const iconBright3 =document.querySelector(".img-choice-info-box__symbol-img_item3-bright");
    const iconBright4 =document.querySelector(".img-choice-info-box__symbol-img_item4-bright");
    const iconBright5 =document.querySelector(".img-choice-info-box__symbol-img_item5-bright");

    const iconFade1 =document.querySelector(".img-choice-info-box__symbol-img_item1-fade");
    const iconFade2 =document.querySelector(".img-choice-info-box__symbol-img_item2-fade");
    const iconFade3 =document.querySelector(".img-choice-info-box__symbol-img_item3-fade");
    const iconFade4 =document.querySelector(".img-choice-info-box__symbol-img_item4-fade");
    const iconFade5 =document.querySelector(".img-choice-info-box__symbol-img_item5-fade");

    slide1.classList.add("none");
    slide2.classList.add("none");
    slide3.classList.add("active");
    slide3.classList.replace("none", "active");
    slide4.classList.add("none");
    slide5.classList.add("none");

    underline1.classList.add("none");
    underline2.classList.add("none");
    underline3.classList.add("active");
    underline3.classList.replace("none", "active");
    underline4.classList.add("none");
    underline5.classList.add("none");

    iconBright1.classList.add("none"); 
    iconBright1.classList.replace("active", "none");
    iconBright2.classList.add("none"); 
    iconBright2.classList.replace("active", "none");
    iconBright3.classList.add("active"); 
    iconBright3.classList.replace("none", "active");
    iconBright4.classList.add("none"); 
    iconBright4.classList.replace("active", "none");
    iconBright5.classList.add("none"); 
    iconBright5.classList.replace("active", "none");

    iconFade1.classList.add("active"); 
    iconFade1.classList.replace("none", "active");
    iconFade2.classList.add("active"); 
    iconFade2.classList.replace("none", "active");
    iconFade3.classList.add("none"); 
    iconFade3.classList.replace("active", "none");
    iconFade4.classList.add("active"); 
    iconFade4.classList.replace("none", "active");
    iconFade5.classList.add("active"); 
    iconFade5.classList.replace("none", "active");

  }) 
}

const btn4 = document.querySelector(".img-choice-info-box__choice-btn-item_item4");
if (btn4) {
  
  btn4.addEventListener("click", function btn4Click () {
    const slide1 =document.querySelector(".img-choice-info-box__img-info-box-item_item1");
    const slide2 =document.querySelector(".img-choice-info-box__img-info-box-item_item2");
    const slide3 =document.querySelector(".img-choice-info-box__img-info-box-item_item3");
    const slide4 =document.querySelector(".img-choice-info-box__img-info-box-item_item4");
    const slide5 =document.querySelector(".img-choice-info-box__img-info-box-item_item5");

    const underline1 =document.querySelector(".img-choice-info-box__underline1");
    const underline2 =document.querySelector(".img-choice-info-box__underline2");
    const underline3 =document.querySelector(".img-choice-info-box__underline3");
    const underline4 =document.querySelector(".img-choice-info-box__underline4");
    const underline5 =document.querySelector(".img-choice-info-box__underline5");

    const iconBright1 =document.querySelector(".img-choice-info-box__symbol-img_item1-bright");
    const iconBright2 =document.querySelector(".img-choice-info-box__symbol-img_item2-bright");
    const iconBright3 =document.querySelector(".img-choice-info-box__symbol-img_item3-bright");
    const iconBright4 =document.querySelector(".img-choice-info-box__symbol-img_item4-bright");
    const iconBright5 =document.querySelector(".img-choice-info-box__symbol-img_item5-bright");

    const iconFade1 =document.querySelector(".img-choice-info-box__symbol-img_item1-fade");
    const iconFade2 =document.querySelector(".img-choice-info-box__symbol-img_item2-fade");
    const iconFade3 =document.querySelector(".img-choice-info-box__symbol-img_item3-fade");
    const iconFade4 =document.querySelector(".img-choice-info-box__symbol-img_item4-fade");
    const iconFade5 =document.querySelector(".img-choice-info-box__symbol-img_item5-fade");

    slide1.classList.add("none");
    slide2.classList.add("none");
    slide4.classList.add("active");
    slide4.classList.replace("none", "active");
    slide3.classList.add("none");
    slide5.classList.add("none");

    underline1.classList.add("none");
    underline2.classList.add("none");
    underline4.classList.add("active");
    underline4.classList.replace("none", "active");
    underline3.classList.add("none");
    underline5.classList.add("none");

    iconBright1.classList.add("none"); 
    iconBright1.classList.replace("active", "none");
    iconBright2.classList.add("none"); 
    iconBright2.classList.replace("active", "none");
    iconBright4.classList.add("active"); 
    iconBright4.classList.replace("none", "active");
    iconBright3.classList.add("none"); 
    iconBright3.classList.replace("active", "none");
    iconBright5.classList.add("none"); 
    iconBright5.classList.replace("active", "none");

    iconFade1.classList.add("active"); 
    iconFade1.classList.replace("none", "active");
    iconFade2.classList.add("active"); 
    iconFade2.classList.replace("none", "active");
    iconFade4.classList.add("none"); 
    iconFade4.classList.replace("active", "none");
    iconFade3.classList.add("active"); 
    iconFade3.classList.replace("none", "active");
    iconFade5.classList.add("active"); 
    iconFade5.classList.replace("none", "active");

  }) 
}

const btn5 = document.querySelector(".img-choice-info-box__choice-btn-item_item5");
if (btn5) {
  
  btn5.addEventListener("click", function btn5Click () {
    const slide1 =document.querySelector(".img-choice-info-box__img-info-box-item_item1");
    const slide2 =document.querySelector(".img-choice-info-box__img-info-box-item_item2");
    const slide3 =document.querySelector(".img-choice-info-box__img-info-box-item_item3");
    const slide4 =document.querySelector(".img-choice-info-box__img-info-box-item_item4");
    const slide5 =document.querySelector(".img-choice-info-box__img-info-box-item_item5");

    const underline1 =document.querySelector(".img-choice-info-box__underline1");
    const underline2 =document.querySelector(".img-choice-info-box__underline2");
    const underline3 =document.querySelector(".img-choice-info-box__underline3");
    const underline4 =document.querySelector(".img-choice-info-box__underline4");
    const underline5 =document.querySelector(".img-choice-info-box__underline5");

    const iconBright1 =document.querySelector(".img-choice-info-box__symbol-img_item1-bright");
    const iconBright2 =document.querySelector(".img-choice-info-box__symbol-img_item2-bright");
    const iconBright3 =document.querySelector(".img-choice-info-box__symbol-img_item3-bright");
    const iconBright4 =document.querySelector(".img-choice-info-box__symbol-img_item4-bright");
    const iconBright5 =document.querySelector(".img-choice-info-box__symbol-img_item5-bright");

    const iconFade1 =document.querySelector(".img-choice-info-box__symbol-img_item1-fade");
    const iconFade2 =document.querySelector(".img-choice-info-box__symbol-img_item2-fade");
    const iconFade3 =document.querySelector(".img-choice-info-box__symbol-img_item3-fade");
    const iconFade4 =document.querySelector(".img-choice-info-box__symbol-img_item4-fade");
    const iconFade5 =document.querySelector(".img-choice-info-box__symbol-img_item5-fade");

    slide1.classList.add("none");
    slide2.classList.add("none");
    slide5.classList.add("active");
    slide5.classList.replace("none", "active");
    slide3.classList.add("none");
    slide4.classList.add("none");

    underline1.classList.add("none");
    underline2.classList.add("none");
    underline5.classList.add("active");
    underline5.classList.replace("none", "active");
    underline3.classList.add("none");
    underline4.classList.add("none");

    iconBright1.classList.add("none"); 
    iconBright1.classList.replace("active", "none");
    iconBright2.classList.add("none"); 
    iconBright2.classList.replace("active", "none");
    iconBright5.classList.add("active"); 
    iconBright5.classList.replace("none", "active");
    iconBright3.classList.add("none"); 
    iconBright3.classList.replace("active", "none");
    iconBright4.classList.add("none"); 
    iconBright4.classList.replace("active", "none");

    iconFade1.classList.add("active"); 
    iconFade1.classList.replace("none", "active");
    iconFade2.classList.add("active"); 
    iconFade2.classList.replace("none", "active");
    iconFade5.classList.add("none"); 
    iconFade5.classList.replace("active", "none");
    iconFade3.classList.add("active"); 
    iconFade3.classList.replace("none", "active");
    iconFade4.classList.add("active"); 
    iconFade4.classList.replace("none", "active");

  }) 
}

const btnUr = document.getElementById('tab-btn-2');
if (btnUr) {
  
  btnUr.addEventListener("click", function btnUrClick () {
    const partUr = document.querySelector(".inputBoxUr");
    const partFop = document.querySelector(".inputBoxFop");
  
    partUr.classList.add ("active");
    partUr.classList.replace("none", "active");

    partFop.classList.add ("none");
    partFop.classList.replace("active", "none");
    
  }) 
}

const btnFop = document.getElementById('tab-btn-1');
if (btnFop) {
  
  btnFop.addEventListener("click", function btnFopClick () {
    const partUr = document.querySelector(".inputBoxUr");
    const partFop = document.querySelector(".inputBoxFop");
    
    partUr.classList.add ("none");
    partUr.classList.replace("active", "none");

    partFop.classList.add ("active");
    partFop.classList.replace("none", "active");

  }) 
}

inputBoxFop





  
const swiperPrev = document.getElementById('swiperPrev');
swiperPrev.addEventListener('click', () => {slider2.slidePrev();})

const swiperNext = document.getElementById('swiperNext');
swiperNext.addEventListener('click', () => {slider2.slideNext();})

const swiperPrevSlider4 = document.getElementById('swiperPrev');
swiperPrevSlider4.addEventListener('click', () => { slider4.slidePrev();});

const swiperNextSlider4 = document.getElementById('swiperNext');
swiperNextSlider4.addEventListener('click', () => { slider4.slideNext();});


console.log("Hello!!!!!!!!!!!!!!");




