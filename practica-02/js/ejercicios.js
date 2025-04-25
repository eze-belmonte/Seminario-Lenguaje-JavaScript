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



// ======================= EJERCICIO 06
console.log('===================== EJERCICIO 06');

function isInteger(num) {
    return Number.isInteger(num);
}

console.log('\n');



// ======================= EJERCICIO 07
console.log('===================== EJERCICIO 07');

function isNumeric(num) {
    // como isNaN devuelve true si NO es numero, lo niego para obtener true si recibo un num.
    return !isNaN(num);
}

console.log(isNumeric("2a"));

console.log('\n');



// ======================= EJERCICIO 08
console.log('===================== EJERCICIO 08');

function total(prices, amounts) {
    let suma = 0;
    // obtengo cada clave para poder acceder a su valor
    for (let key in prices)
        // verifico si existe esa clave en el vector de cantidad
        if (amounts[key])
            suma += prices[key] * amounts[key];
    return suma;

    /* NOTA: Si no me equivoco, lo ideal seria recorrer el objeto con menos elementos ya que
    con hacer la verificacion del IF, me aseguro que no haya problema si no existe. */
}

var prices = {
    milk: 48.90,
    bread: 90.50,
    butter: 130.13
};

var amounts = {
    milk: 1,
    bread: 0.5,
    butter: 0.2
};

var amounts2 = {
    bread: 1.5
}

//console.log(typeof prices);
//console.log(prices, bread);
//console.log(amounts["milk"]);
console.log(total(prices, amounts));
console.log(total(prices, amounts2));

console.log('\n');



// ======================= EJERCICIO 09
console.log('===================== EJERCICIO 09');

var words = ['perro', 'gato', 'casa', 'árbol', 'nube', 'día', 'noche', 'zanahoria', 'babuino'];


let temporal = {}
// creo un objeto que de clave sea la palabra sin acento y el valor sea la palabra original
for (let word of words) {
    /* Tengo conocimiento de las expresiones regulares porque las he usado para verificar emails y contraseñas. 
    Pero tuve que usar ChatGPT para saber cuál era la expresión regular para quitar acentos, ya que no la sabía.*/
    let aux = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    temporal[aux] = word;
}

// creo el array donde voy a guardar las palabras originales en orden
var atoz = []

// ordeno el objeto
let temp = Object.fromEntries(Object.entries(temporal).sort());

// recorro el obtejo ordenado y guardo el valor que es la palabra original
for (let key in temp)
    atoz.push(temporal[key]);

// array ordenado
console.log(atoz);

// array ordenado inverso
let ztoa = atoz.reverse();
console.log(atoz);

console.log('\n');



// ======================= EJERCICIO 10
console.log('===================== EJERCICIO 10');

// "copio" el arreglo original con el slice y ordenamos de acuerdo al length
let orderlong = words.slice().sort((a, b) => a.length - b.length);
console.log(orderlong);

console.log('\n');



// ======================= EJERCICIO 11
console.log('===================== EJERCICIO 1');

function identity(x) {
    return x;
}

var id = function(x) {
    return x;
};

var iden = x => x;

var identidad = identity;

console.log(identity('Hola'));
console.log(id('Hello'));
console.log(iden('Buen día'));
console.log(identidad('Buen día'));

console.log('\n');



// ======================= EJERCICIO 1
console.log('===================== EJERCICIO 1');

console.log('\n');



// ======================= EJERCICIO 1
console.log('===================== EJERCICIO 1');

console.log('\n');



// ======================= EJERCICIO 1
console.log('===================== EJERCICIO 1');

console.log('\n');



// ======================= EJERCICIO 1
console.log('===================== EJERCICIO 1');

console.log('\n');



// ======================= EJERCICIO 1
console.log('===================== EJERCICIO 1');

console.log('\n');



// ======================= EJERCICIO 1
console.log('===================== EJERCICIO 1');

console.log('\n');



// ======================= EJERCICIO 1
console.log('===================== EJERCICIO 1');

console.log('\n');
