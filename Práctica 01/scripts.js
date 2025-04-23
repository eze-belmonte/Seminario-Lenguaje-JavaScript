// ejercicio 02
console.log("Hola mundo")


// ejercicio 04
let text = "lorem rerum explicabo, architecto molestiae";
function ContarCaracter(palabra) {
    console.log(palabra.length);
}
ContarCaracter(text);
let subString = text.substring(1,4);
console.log(subString.toUpperCase());


// ejercicio 05
const A = Math.floor(Math.random() * (1, 20) + 1);
const B = Math.floor(Math.random() * (1, 20) + 1);
const C = Math.floor(Math.random() * (1, 20) + 1);

operacionNumerica();

function operacionNumerica() {
    let result = (A + B) ** C;
    console.log(result);

    if (A > B)
        if (A > C)
            console.log(A);
        else
            console.log(C);
    else
        if (B > C)
            console.log(B);
        else
            console.log(C);
}


// ejercicio 06
let dia1 = new Date();
let dia2 = new Date(1575978300000);

console.log(dia1);
console.log(dia2);