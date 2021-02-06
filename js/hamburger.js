const hamburger = document.querySelector(".hamburger__menu");
const closeIcon = document.querySelector(".icon__hamburger-menu-close");
const header = document.querySelector("header");

const toggleMenuHandler = () => {
  header.classList.toggle("menu__open");
};

hamburger.addEventListener("click", toggleMenuHandler);
closeIcon.addEventListener("click", toggleMenuHandler);
