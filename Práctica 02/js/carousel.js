// obtenemos todas las imagenes con la clase .img
const imagenes = document.querySelectorAll('.img');
// definimos la variable para recorre el carousel
let index = 0;
// mostramos la primer imagen en el carousel
imagenes[index].style.display = 'block';

// Función para mostrar la imagen activa
function imagenActual(indexActual) {
    // para iterar con cada imagen, si el indice (index) es igual al valor actual de "indexActual" se pone display block, sino none
    imagenes.forEach((img, index) => {
        img.style.display = (index === indexActual) ? 'block' : 'none';
    });
}

function siguiente() {
    index++;
    // si me pase del index, vuelvo a la primera imagen
    if (index == 3)
        index = 0;
  imagenActual(index);
}

function anterior() {
    index--;
    // si me pase del inicio, voy a la ultima imagen
    if (index == -1)
        index = 2;
  imagenActual(index);
}
