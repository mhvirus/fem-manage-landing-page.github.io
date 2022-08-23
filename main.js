const primaryHeader = document.querySelector('.primary-header');
const navToggel = document.querySelector('.mobile-nav-toggle');
const primartyNav = document.querySelector('.primary-navagition');

navToggel.addEventListener('click', () => {
  // eslint-disable-next-line no-unused-expressions
  primartyNav.hasAttribute('data-visible') ? primartyNav.setAttribute('aria-expanded', false) : primartyNav.setAttribute('aria-expanded', true);
  primartyNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});
