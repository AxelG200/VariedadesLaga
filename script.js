// Aparecen las secciones al hacer scroll
const secciones = document.querySelectorAll('.seccion');

function animarSecciones() {
  const scrollY = window.pageYOffset + window.innerHeight - 100;

  secciones.forEach(seccion => {
    if (scrollY > seccion.offsetTop) {
      seccion.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animarSecciones);
window.addEventListener('load', animarSecciones);

// Hacer girar el logo al hacer clic en los links del menu
const logo = document.querySelector('.logo');
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    logo.classList.add('girando');
    setTimeout(() => logo.classList.remove('girando'), 1000);
  });
});