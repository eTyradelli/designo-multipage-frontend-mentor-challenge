
// Mobile menu toggle

const menuToggle = document.querySelector('#menu-toggle');
const btnBurger = document.querySelector('.menu-toggle__burger');
const btnClose = document.querySelector('.menu-toggle__close');

const mobileNav = document.querySelector('#header-nav-mobile');
const mobileOverlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
  toggleActive(mobileNav);
  toggleActive(mobileOverlay);

  if(mobileNav.classList.contains('active')){
    btnBurger.style.opacity = 0;
    btnClose.style.opacity = 1;
    menuToggle.setAttribute("aria-expanded", true);
  }else {
    btnBurger.style.opacity = 1;
    btnClose.style.opacity = 0;
    menuToggle.setAttribute("aria-expanded", false);
  }
});


function toggleActive(element1) {
  element1.classList.toggle('active');

  if(element1.classList.contains('active')) {
    element1.removeAttribute('hidden');
  }else{
    element1.setAttribute('hidden', true);
  }
}

