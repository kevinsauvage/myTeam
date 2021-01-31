const hamburger = document.querySelector(".hamburger__menu");
console.log(hamburger);

const openMenuHandler = () => {
  const header = document.querySelector("header");
  if (header.style.right != "0px") {
    header.style.right = "0px";
  } else {
    header.style.right = "-101%";
  }
};

hamburger.addEventListener("click", openMenuHandler);
