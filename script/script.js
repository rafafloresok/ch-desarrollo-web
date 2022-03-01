const navToggle = document.querySelector(".nav-toggle");
const menuCover = document.querySelector(".menu-cover");

navToggle.addEventListener("click", () => {
  menuCover.classList.toggle("display-none");
});

const cardButtonArticle = document.querySelectorAll(".card__button--article");
const article = document.querySelector(".articulo");
const frame = document.querySelector(".articulo__frame");

cardButtonArticle.forEach(el => el.addEventListener("click", () => {
  frame.src = el.id;
  article.classList.remove("display-none");
}));