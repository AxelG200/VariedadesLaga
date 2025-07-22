
// Función para animar el logo al cargar
window.onload = function() {
  const logo = document.getElementById('logo');
  logo.classList.add('fade-in');
};

// Scroll Animations
window.addEventListener('scroll', function() {
  const scrollElements = document.querySelectorAll('.fade-in-scroll');
  scrollElements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('visible');
    }
  });

  // Mostrar/ocultar navbar en scroll
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('navbar-hidden');
  } else {
    navbar.classList.remove('navbar-hidden');
  }
});

// Pop-up Animations
setTimeout(function() {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.classList.add('visible');
  }
}, 3000);

// Slider automático (si se desea)
let slideIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
function showSlides() {
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
  slideIndex++;
}

setInterval(showSlides, 3000);

// Añadir interactividad en botones
const buttons = document.querySelectorAll('.cta-button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
});

// Mostrar pop-up de ofertas
const popup = document.querySelector('.popup');
if (popup) {
  popup.style.display = 'block';
}
