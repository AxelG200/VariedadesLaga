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
// Function to toggle the visibility of social icons based on scroll position
window.addEventListener('scroll', function() {
    const socialIcons = document.getElementById('social-icons');
    if (window.scrollY > 100) {
        socialIcons.classList.add('visible');
    } else {
        socialIcons.classList.remove('visible');
    }
});
