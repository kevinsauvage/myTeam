const btns = document.querySelectorAll(".about__team-btn");
const cardHover = document.querySelectorAll(".about__team-card-hover");

function chngIcon(el) {
  if (el.src.split("/")[5] == "icon-cross.svg") {
    el.src = "assets/images/icon-close.svg";
  } else {
    el.src = "assets/images/icon-cross.svg";
  }
}

const clickHandler = (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("appear");
  var el = e.currentTarget.children[0];
  chngIcon(el);
};

btns.forEach((btn) => {
  btn.addEventListener("click", clickHandler);
});
