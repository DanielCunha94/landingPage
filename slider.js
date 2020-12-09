import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 480px
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
