const imagenes = document.querySelector('.imagenes');
const flechaIzquierda = document.querySelector('.flecha.izquierda');
const flechaDerecha = document.querySelector('.flecha.derecha');
const imagenesItems = document.querySelectorAll('.imagen');
const intervalo = 3000; // Intervalo de pausa en milisegundos (3 segundos)

let indiceActual = 0;

function mostrarImagen(indice) {
  imagenes.style.transform = `translateX(-${indice * 100}%)`;
  indiceActual = indice;
}

flechaIzquierda.addEventListener('click', () => {
  if (indiceActual > 0) {
    mostrarImagen(indiceActual - 1);
  } else {
    mostrarImagen(imagenesItems.length - 1);
  }
});

flechaDerecha.addEventListener('click', () => {
  if (indiceActual < imagenesItems.length - 1) {
    mostrarImagen(indiceActual + 1);
  } else {
    mostrarImagen(0);
  }
});

// Función para cambiar la imagen automáticamente cada intervalo de tiempo
function cambiarImagenAutomaticamente() {
  if (indiceActual < imagenesItems.length - 1) {
    mostrarImagen(indiceActual + 1);
  } else {
    mostrarImagen(0);
  }
}

// Configuración del cambio automático de imagen
let intervaloCambio = setInterval(cambiarImagenAutomaticamente, intervalo);

// Pausar el cambio automático de imagen cuando el cursor esté sobre el carrusel
imagenes.addEventListener('mouseenter', () => {
  clearInterval(intervaloCambio);
});

// Reanudar el cambio automático de imagen cuando el cursor salga del carrusel
imagenes.addEventListener('mouseleave', () => {
  intervaloCambio = setInterval(cambiarImagenAutomaticamente, intervalo);
});

// Configuración inicial para mostrar la primera imagen
mostrarImagen(0);