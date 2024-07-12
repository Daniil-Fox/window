const formBtn = document.querySelector(".form__btn");
const confirmWind = document.querySelector(".confirm");
const confirmBody = confirmWind.querySelector(".confirm__body");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confirmWind.classList.add("active");
});

confirmBody.addEventListener("click", (e) => {
  e.stopPropagation();
});
confirmWind.addEventListener("click", (e) => {
  confirmWind.classList.remove("active");
});
