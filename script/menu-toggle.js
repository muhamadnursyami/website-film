const toggle = document.querySelector(".toggle");
const icon = document.querySelector(".fa-bars");

toggle.addEventListener("click", function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});
