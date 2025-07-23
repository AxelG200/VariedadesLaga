// Cambiar tamaño header y logo al hacer scroll
const header = document.getElementById('header');
const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// Scroll suave al hacer click en logo
logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animar secciones al aparecer en pantalla
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

// Datos llantas (puedes agregar hasta 100)
const llantas = [
  {
    nombre: "TORNEL 205/55R16",
    precio: "$69.99",
    img: "https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/497648305_1445468366799405_6837067560978401230_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TcFyFfQ7rdYQ7kNvwHdQj8o&_nc_oc=AdkDR40V9VTed3goWOCTed4Mlv7lrwH9YVJhVrSZ0RISTD1oGIPWG2mFMoetGangTF0xpUP9VujFadTJVP8-OcPa&_nc_zt=23&_nc_ht=scontent.fuio1-1.fna&_nc_gid=EKDnMD8RyObSrX7jlbD_Mw&oh=00_AfT24lB1cY0TErl7UgZQvc89YHDEQMKu-pAxUXoCsQiz7g&oe=6886049B"
  },
  {
    nombre: "TORNEL 195/65R15",
    precio: "$67.99",
    img: "https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/497700575_1445468296799412_5831892576582176440_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N-HuTr-uvMgQ7kNvwGr5UeJ&_nc_oc=AdnRbmQC-y2NqVfpkRMldUJEzSz4DU3ZSTztzEmPjEc39yBSQ64tlEqH8W61-ExKLrTO01oxEMbyvQCygQS0IRru&_nc_zt=23&_nc_ht=scontent.fuio1-1.fna&_nc_gid=uMlQdhEZvJajuH-jw8FDrQ&oh=00_AfTAs_cZP6jpH2QJ-yK-0-XuEfatyi8nCxzuf4sOp6akww&oe=68860E2B"
  },
  {
    nombre: "SIN IMAGEN DE PRUEBA",
    precio: "$55.00",
    img: ""
  }
];

// Mostrar llantas en carrusel
const contenedorProductos = document.getElementById('productos');
function crearProductoHTML(llanta){
  const div = document.createElement('div');
  div.classList.add('producto');
  div.innerHTML = `
    <img src="${llanta.img ? llanta.img : 'https://via.placeholder.com/250x160?text=Sin+Imagen'}" alt="${llanta.nombre}" />
    <h3>${llanta.nombre}</h3>
    <p>${llanta.precio}</p>
  `;
  return div;
}

function cargarLlantas(){
  contenedorProductos.innerHTML = '';
  llantas.forEach(l => {
    const prod = crearProductoHTML(l);
    contenedorProductos.appendChild(prod);
  });
}
cargarLlantas();
