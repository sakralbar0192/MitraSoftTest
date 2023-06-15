const navToggle = document.querySelector(".top-menu__nav-toggle");
const navSignatureOpen = document.querySelector(".top-menu__nav-toggle-signature--open");
const navSignatureClose = document.querySelector(".top-menu__nav-toggle-signature--close");
const siteNav = document.querySelector(".top-menu__nav--site");
const userNav = document.querySelector(".top-menu__nav--user");

//mobile-menu

navToggle.addEventListener("click", function(evt){
  evt.preventDefault();
  if (navToggle.classList.contains("top-menu__nav-toggle--close")){
    navToggle.classList.remove("top-menu__nav-toggle--close")
    navSignatureClose.classList.remove("top-menu__nav-toggle-signature--current-signature");
    navSignatureOpen.classList.add("top-menu__nav-toggle-signature--current-signature");
    siteNav.classList.remove("top-menu__nav--show");
    userNav.classList.remove("top-menu__nav--show");
  }
  else {
    navToggle.classList.add("top-menu__nav-toggle--close")
    navSignatureClose.classList.add("top-menu__nav-toggle-signature--current-signature");
    navSignatureOpen.classList.remove("top-menu__nav-toggle-signature--current-signature");
    siteNav.classList.add("top-menu__nav--show");
    userNav.classList.add("top-menu__nav--show");
  }
})
