const btns = document.querySelectorAll(".about__team-btn");
const cardHover = document.querySelectorAll(".about__team-card-hover");

function chngIcon(el) {
  console.log(el.children[0].style.transform !== "");
  if (el.children[0].style.transform === "") {
    el.children[0].style.transform = "rotate(45deg)";
  } else {
    el.children[0].style.transform = "";
  }
}

const clickHandler = (e) => {
  e.currentTarget.nextElementSibling.classList.toggle("appear");
  var el = e.currentTarget;
  chngIcon(el);
};

btns.forEach((btn) => {
  btn.addEventListener("click", clickHandler);
});
