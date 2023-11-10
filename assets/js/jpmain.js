const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Check your email please");
  } else {
    email.setCustomValidity("");
  }
});
