// Cambiar tamaño y posición del header y logo al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }
});

// Animar la aparición de secciones al hacer scroll
const secciones = document.querySelectorAll('.seccion');

function mostrarSecciones() {
  const triggerBottom = window.innerHeight * 0.8;
  secciones.forEach(seccion => {
    const topSeccion = seccion.getBoundingClientRect().top;
    if (topSeccion < triggerBottom) {
      seccion.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarSecciones);
window.addEventListener('load', mostrarSecciones);
