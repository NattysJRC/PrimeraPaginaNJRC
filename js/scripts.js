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



    // Formulario
    const form = document.querySelector('.formulario');

    // Función para manejar el envío de formularios
    function handleSubmit(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado de envío de formularios

        // Get the form fields
        const nameInput = form.querySelector('input[name="nombre"]');
        const phoneInput = form.querySelector('input[name="telefono"]');
        const emailInput = form.querySelector('input[name="correo"]');
        const messageInput = form.querySelector('textarea[name="mensaje"]');

        // Comprueba si algún campo obligatorio está vacío
        if (
            nameInput.value.trim() === '' ||
            phoneInput.value.trim() === '' ||
            emailInput.value.trim() === '' ||
            messageInput.value.trim() === ''
        ) {
            // Mostrar una alerta si algún campo obligatorio está vacío
            alert('Por favor, completa todos los campos.');
        } else {
            // Envía el formulario si todos los campos están llenos
            form.submit();
        }
    }

    // Adjunte el detector de eventos al botón de envío del formulario
    const submitButton = form.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', handleSubmit);






