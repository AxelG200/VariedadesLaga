// Hacer header y logo más pequeños al bajar scroll
const header = document.getElementById('header');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// Animar secciones al aparecer en pantalla
const secciones = document.querySelectorAll('.seccion.animada');

function animarSecciones() {
  secciones.forEach(seccion => {
    const rect = seccion.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      seccion.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animarSecciones);
window.addEventListener('load', animarSecciones);

// Scroll suave al hacer click en el logo
logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
