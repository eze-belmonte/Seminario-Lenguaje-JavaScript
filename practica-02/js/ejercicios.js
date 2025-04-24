// ======================= EJERCICIO 01

// defino un obtejo con las "opciones" para poder recorrerlo
console.log('===================== EJERCICIO 01');
let opciones = {
    a: 1,
    b: true,
    c: "Hola",
    d: null,
    e: undefined,
    f: 2n ** 60n,
    g: new Date(),
    h: [1, 2, 3, 4],
    i: 'Hola',
    j: { x: 2.0, y: -3.6 },
    k: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/
};

// para no escribir tantos console.log, recorro el obtejo con el for
// obtengo cada elemento del objeto
for (let key in opciones) {
    // del objeto se obtiene el elemento en la "posicion" key
    console.log(`${typeof opciones[key]}`);
}
console.log('\n');



// ======================= EJERCICIO 02 */
console.log('===================== EJERCICIO 02');
let a = 25;
console.log(++a); // primero suma y luego imprime
console.log(a++); // imprime y luego suma
/* los 2 casos anteriores, se supone que funciona de esa manera que describi, pero en mi caso
ambos me devuelven 26 */

console.log(a == '27'); // compara sin importar el tipo de variable, en este caso TRUE
console.log(a === '27'); // compara tebiendo en cuenta el tipo de variable, en este caso FALSE
console.log('\n');



// ======================= EJERCICIO 03
console.log('===================== EJERCICIO 03');
/* para manejar los vacios, antes verifico que no lo esten, 
y si lo estan devuelvo null */

function max(arreglo) {
    if (arreglo === null )
        return null;
    let numMax = 0;
    for (let num of arreglo) {
        // se verifica si es un numero
        if (typeof num === 'number')
            if (num > numMax)
             numMax = num;
    }
    return numMax;
}

function min(arreglo) {
    if (arreglo === null)
        return null;
    let numMin = 9999999;
    for (let num of arreglo) {
        // se verifica si es un numero
        if (typeof num === 'number')
            if (num < numMin)
                numMin = num;
    }
    return numMin;
}

function avg(arreglo) {
    if (arreglo === null)
        return null;
    let prom = 0;
    for (let num of arreglo)
        // se verifica si es un numero
        if (typeof num === 'number')
            prom += num;

    return prom / arreglo.length;
}

function sum(arreglo) {
    if (arreglo === null)
        return null;
    let suma = 0;
    for (let num of arreglo)
        // se verifica si es un numero
        if (typeof num === 'number')
            suma += num;

    return suma;
}

var prices = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI];
var names = ["Jhon", "Paul", "George", "Ringo"];

console.log(max(prices));
console.log(min(prices));
console.log(avg(prices));
console.log(sum(prices));

console.log(max(names));
console.log(min(names));
console.log(avg(names));
console.log(sum(names));

console.log('\n');



// ======================= EJERCICIO 04
console.log('===================== EJERCICIO 04');

// concatena las palabras recibidas, las "une"
function concat(left, right) {
    return left.concat(right);
}

var names = ['Jhon', "Paul", "George", "Ringo"];
var vacio = [];
// va concatenando el resultado obtenido de la concatenacion anterior
console.log(names.reduce(concat));

// sobre un arreglo vacio da error

console.log('\n');



// ======================= EJERCICIO 05
console.log('===================== EJERCICIO 05');

var aa = [1,2,3,4];
var bb = [1,2,3,4];
var cc = [1,2,3,4,5];
var dd = "Hola";
var ee = null;

function arrayEquals(ar1, ar2) {
    let cumple = true;
    if (ar1 !== null && ar2 !== null && ar1.length == ar2.length) {
        let i = 0;
        while (i < ar1.length && cumple) {
            if ((typeof ar1[i] !== typeof ar2[i]) || (ar1[i] != ar2[i]))
                cumple = false;
            else i++;
        }
    } else cumple = false;
    return cumple;
}

console.log(arrayEquals(aa, aa));
console.log(arrayEquals(aa, bb));
console.log(arrayEquals(bb, cc));
console.log(arrayEquals(ee, cc));
console.log(arrayEquals(cc, dd));
console.log(arrayEquals(ee, ee));

console.log('\n');