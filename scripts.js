const carrusel = document.querySelector(".imagenes");
const flechaIzquierda = document.querySelector(".flecha-izquierda");
const flechaDerecha = document.querySelector(".flecha-derecha");

const carruselVisible = document.querySelector(".carrusel").clientWidth;
const cantidadImagenes = carrusel.children.length;
let posicionActual = 0;

actualizarFlechas();

flechaIzquierda.addEventListener("click", () => {
    if (posicionActual > 0) {
        posicionActual--;
        const desplazamiento = -posicionActual * carruselVisible;
        carrusel.style.transform = `translateX(${desplazamiento}px)`;
        actualizarFlechas();
    }
});

flechaDerecha.addEventListener("click", () => {
    if (posicionActual < cantidadImagenes - 1) {
        posicionActual++;
        const desplazamiento = -posicionActual * carruselVisible;
        carrusel.style.transform = `translateX(${desplazamiento}px)`;
        actualizarFlechas();
    }
});

function actualizarFlechas() {
    // Mostrar las flechas siempre y deshabilitar solo cuando no haya más imágenes en esa dirección
    flechaIzquierda.style.opacity = posicionActual === 0 ? "0.5" : "1";
    flechaDerecha.style.opacity = posicionActual === cantidadImagenes - 1 ? "0.5" : "1";
}