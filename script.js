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