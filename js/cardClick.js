const btns = document.querySelectorAll(".about__team-btn");

const clickHandler = (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("appear");
  e.currentTarget.children[0].classList.toggle("iconRotate");
};

btns.forEach((btn) => {
  btn.addEventListener("click", clickHandler);
});
