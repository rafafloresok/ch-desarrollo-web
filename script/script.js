//BOTON MENU COVER
const navToggle = document.querySelector(".nav-toggle");
const menuCover = document.querySelector(".menu-cover");

navToggle.addEventListener("click", () => {
  menuCover.classList.toggle("display-none");
});

//ABRIR ARTICULO EN SECCION NUESTRA FILOSOFIA
const cardButtonArticle = document.querySelectorAll(".card__button--article");
const article = document.querySelector(".articulo");
const frame = document.querySelector(".articulo__frame");

cardButtonArticle.forEach(el => el.addEventListener("click", () => {
  frame.src = el.id;
  article.classList.remove("display-none");
}));

//CERRAR ARTÍCULO EN SECCION NUESTRA FILOSOFIA
const closeArticle = document.getElementById("close-article");

closeArticle.addEventListener("click", function() {
  article.classList.add("display-none");
  frame.src = "";
})