// eslint-disable-next-line import/no-unresolved, import/extensions
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const primaryHeader = document.querySelector('.primary-header');
const navToggel = document.querySelector('.mobile-nav-toggle');
const primartyNav = document.querySelector('.primary-navagition');

navToggel.addEventListener('click', () => {
  // eslint-disable-next-line no-unused-expressions
  primartyNav.hasAttribute('data-visible') ? primartyNav.setAttribute('aria-expanded', false) : primartyNav.setAttribute('aria-expanded', true);
  primartyNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
