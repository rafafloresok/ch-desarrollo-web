const navToggle = document.querySelector(".nav-toggle");
const menuCover = document.querySelector(".menu-cover");

navToggle.addEventListener("click", () => {
  menuCover.classList.toggle("display-none");
});