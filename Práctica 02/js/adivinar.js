// se obtiene el ID del boton jugar
const jugar = document.getElementById("boton-jugar");
// se obtiene el input donde se ingresa el número
const numeroIngresado = document.getElementById("numeroIngresado");

// boton reset
const botonReset = document.getElementById("boton-reset");

// obtenemos el ID para dejar el mensaje
const mensaje = document.getElementById("mensaje");

// contador de intentos
const mensajeCont = document.getElementById("cantIntentos");
let intentos = 0;
let mensajeC = mensajeCont.textContent;

// para guardar el numero recibido
let numero;

// arreglo que guarda los 3 mejores resultados
resultados = [100, 100, 100];
// lista de puntajes
const listaPuntajes = document.querySelectorAll("#lista-puntos li")

// tabla de puntajes
const tablaPuntaje = document.getElementById("tabla-puntajes");


let numeroAdivinar;
// generamos el número de forma aleatoria
function generarNumero() {
    const min = 1;
    const max = 100;
    numeroAdivinar = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(numeroAdivinar);
}

// si apretamos el boton "Jugar", se oculta y se visualiza el input
function empezarJugar() {
    jugar.style.display = "none";
    numeroIngresado.style.display = "block";
    mensajeCont.style.display = "block";
    mensaje.textContent = "";
    generarNumero();
}

// mensaje de intentos inicial
mensajeCont.textContent = mensajeC + " " + intentos; 
// para detectar si se apreta una letra
numeroIngresado.addEventListener("keydown", function(event) {
    // si se apreta el Enter
    if (event.key === "Enter") {
        // se convirte el String en número
        numero = parseInt(numeroIngresado.value);
        // se limpia el input
        numeroIngresado.value = "";

        // verificar si lo ingresado es un número
        if (!isNaN(numero)) {
            // se concatena el mensaje con el contador
            mensajeCont.textContent = mensajeC + " " + (++intentos);
            // color de texto del mensaje
            mensaje.style.color = "rgb(255, 255, 255)";
            if (numero === numeroAdivinar) {
                // estilo del mensaje si se gana
                mensaje.style.background = "rgba(0, 231, 19, 0.5)";
                mensaje.style.border = "1px solid rgba(0, 173, 14, 0.5)";
                mensaje.textContent = "Ganaste";
                gano();
            } else if (numero > numeroAdivinar) {
                // estilo de texto si el número es grande
                mensaje.style.background = "rgba(255, 0, 0, 0.5)";
                mensaje.style.border = "1px solid rgba(184, 0, 0, 0.5)";
                mensaje.textContent = "Más chico";
            } else {
                // estilo del mensaje si el número es chico
                mensaje.style.background = "rgba(0, 151, 211, 0.5)";
                mensaje.style.border = "1px solid rgba(0, 112, 156, 0.5)";
                mensaje.textContent = "Más grande";
            }
        } else {
            // estilo si no se ingresa un número
            mensaje.style.background = "none";
            mensaje.style.color = "black";
            mensaje.style.border = "none";
            mensaje.textContent = "Debe ingresar un número";
        }
    }
});

// si se detecta que ganó, se guarda el resultado si es mejor de los que habia
function gano() {
    numeroIngresado.disabled = true;
    botonReset.style.display = "block";
    tablaPuntaje.style.display = "flex";
    /* recorremos el vector para guardar el valor mas grande comparado con los que ya estaban
    en la lista */
    for (let i = 0; i < listaPuntajes.length; i++) {
        let n = parseInt(listaPuntajes[i].textContent);
        if (n < intentos) {
            // corrimiento hacia la derecha
            for (let j = resultados.length - 1; j > i; j--) {
                resultados[j] = resultados[j - 1];
                }
            resultados[i] = intentos;
            break;
        }
    }
    // ordenamos de manera descendente
    resultados.sort((a, b) => a - b);

    console.log(resultados);
    // guardamos en la lista los valores del vector
    listaPuntajes.forEach(function(li, index) {
        let valor = resultados[index];
        if (valor == 100)
            valor = 0;
        li.textContent = valor;

    });
    console.log(resultados);

    botonReset.style.display = "block"
}

// se resetea todo si se apreta el boton de reset
function resetear() {
    jugar.style.display = "block";
    numeroIngresado.style.display = "none";
    mensajeCont.style.display = "none";
    mensaje.textContent = "Adivina el número";
    mensaje.style.background = "none";
    mensaje.style.color = "black";
    mensaje.style.border = "none";
    intentos = 0;
    mensajeCont.textContent = mensajeC + " " + intentos; 
    numeroIngresado.disabled = false;
    botonReset.style.display = "none";
    tablaPuntaje.style.display = "none";
}