document.addEventListener("DOMContentLoaded", () => {
  const box3D = document.querySelector(".box3D");
  const container = document.querySelector(".container");
  const marca = document.querySelector(".marca");
  const sneaker = document.querySelector(".sneaker img");
  const descricao = document.querySelector(".info p");
  const form = document.getElementById("formCadastro");

  container.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    box3D.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  container.addEventListener("mouseenter", () => {
    box3D.style.transition = "none";
    marca.style.transform = "translateZ(120px)";
    sneaker.style.transform = "translateZ(100px) rotateZ(15deg)";
    descricao.style.transform = "translateZ(80px)";
  });

  container.addEventListener("mouseleave", () => {
    box3D.style.transition = "all 0.5s ease";
    box3D.style.transform = `rotateY(0deg) rotateX(0deg)`;
    marca.style.transform = "translateZ(0)";
    sneaker.style.transform = "translateZ(0) rotateZ(0)";
    descricao.style.transform = "translateZ(0)";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Obrigado por se cadastrar!");
    form.reset();
  });
});
