// Mostrar secciones con animación cuando estén en vista
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

// Al hacer clic en el logo, subir suave al inicio
document.getElementById('logo').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
