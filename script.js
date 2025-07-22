// Mostrar el logo en miniatura al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Desvanecimiento suave al entrar en vista
const secciones = document.querySelectorAll('.seccion');

const mostrarSeccion = () => {
  secciones.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarSeccion);
window.addEventListener('load', mostrarSeccion);

// Al hacer clic en el logo, subir al inicio
document.getElementById('logo').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
