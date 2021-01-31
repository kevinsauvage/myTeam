function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function ValidateForm(e) {
  var name = document.forms["Form"]["Name"];
  var email = document.forms["Form"]["EMail"];
  var message = document.forms["Form"]["Message"];

  if (name.value == "") {
    name.style.borderBottom = "1px solid #f67e7e";
    name.focus();
    return false;
  }

  if (email.value == "" || !validateEmail(email.value)) {
    email.style.borderBottom = "1px solid #f67e7e";
    name.style.borderBottom = "1px solid white";
    email.focus();
    return false;
  }

  if (message.value == "") {
    email.style.borderBottom = "1px solid white";
    message.style.borderBottom = "1px solid #f67e7e";
    message.focus();
    return false;
  }

  return true;
}

const btn = document.querySelector(".submit-form-btn");
btn ? btn.addEventListener("click", (e) => ValidateForm(e)) : null;

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
    };
  })(),
  true
);
