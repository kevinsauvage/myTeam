const hamburger = document.querySelector(".hamburger__menu");
const closeIcon = document.querySelector(".icon__hamburger-menu-close");
const header = document.querySelector("header");
const link = document.querySelectorAll("a");

const openMenuHandler = () => {
  header.style.right = "0px";
};
const closeMenuHandler = () => {
  header.style.right = "-101%";
};

hamburger.addEventListener("click", openMenuHandler);
closeIcon.addEventListener("click", closeMenuHandler);
link.forEach((link) => {
  link.addEventListener("click", closeMenuHandler);
});
