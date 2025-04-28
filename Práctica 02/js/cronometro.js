const milesima = document.getElementById("mile");
const segundos = document.getElementById("seg");
const minutos = document.getElementById("min");
const horas = document.getElementById("hora");
let mile = 0;
let seg = 0;
let min = 0;
let hora = 0;

let play = false;
let pause = false;

function andando() {
    play = true;
}

function pausar() {
    pause = !pause;
}

function resetear() {
    mile = 0;
    seg = 0;
    min = 0;
    hora = 0;
    milesima.textContent = mile.toString().padStart(2, '0');
    segundos.textContent = seg.toString().padStart(2, '0');
    minutos.textContent = min.toString().padStart(2, '0');
    horas.textContent = hora.toString().padStart(2, '0');
}

// cada 100 milesimas
setInterval(() => {
    if (!play || pause)
        return;

    mile++;
    // milesimas
    if (mile === 100) {
        mile = 0;
        seg++;
    }
    // segundos
    if (seg === 60) {
        seg = 0;
        min++;
    }
    // minutos
    if (min === 60) {
        min = 0;
        hora++;
    }
    // horas
    if (hora === 24) {
        hora = 0;
    }

    // indicamos que si el string tiene 1 digito, se le agrega un cero adelante
    milesima.textContent = mile.toString().padStart(2, '0');
    segundos.textContent = seg.toString().padStart(2, '0');
    minutos.textContent = min.toString().padStart(2, '0');
    horas.textContent = hora.toString().padStart(2, '0');
}, 10);

