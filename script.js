// Animar secciones al hacer scroll
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

// Hacer girar el logo al hacer clic en los links del menú
const logo = document.querySelector('.logo');
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    logo.classList.add('girando');
    setTimeout(() => logo.classList.remove('girando'), 1000);
  });
});

// Mostrar u ocultar header según scroll
let lastScrollY = window.pageYOffset;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add('oculto');
  } else {
    header.classList.remove('oculto');
  }

  lastScrollY = currentScrollY;
});
