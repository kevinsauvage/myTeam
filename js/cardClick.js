const btns = document.querySelectorAll(".about__team-btn");

function chngIcon(el) {
  el.children[0].classList.toggle("iconRotate");
}

const clickHandler = (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("appear");
  var el = e.currentTarget;
  chngIcon(el);
};

btns.forEach((btn) => {
  btn.addEventListener("click", clickHandler);
});
