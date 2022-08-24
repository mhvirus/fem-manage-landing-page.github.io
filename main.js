/* eslint-disable object-shorthand */
/* eslint-disable block-spacing */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const primaryHeader = document.querySelector('.primary-header');
const navToggel = document.querySelector('.mobile-nav-toggle');
const primartyNav = document.querySelector('.primary-navagition');

navToggel.addEventListener('click', () => {
  // eslint-disable-next-line no-unused-expressions
  primartyNav.hasAttribute('data-visible') ? primartyNav.setAttribute('aria-expanded', false) : primartyNav.setAttribute('aria-expanded', true);
  primartyNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  centerMode: true,
  arrows: false,
  // eslint-disable-next-line func-names, prefer-template,space-before-function-paren
  customPaging: function(index, a11ySlider) { return '<button class="mycustombtn">' + index + '</button>';},
  responseive: {
    480: {
      dots: true,
    },
    560: {
      dots: false, // dots enabled 1280px and up
    },
  },
});
