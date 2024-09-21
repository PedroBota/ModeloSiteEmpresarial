const hamburguer=document.querySelector(".hamburguer");
const nav= document.querySelector(".red");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));