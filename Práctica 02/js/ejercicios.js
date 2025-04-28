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
console.log('===================== EJERCICIO 11');

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



// ======================= EJERCICIO 12
console.log('===================== EJERCICIO 12');

function reduce(array, binaryOperation, inicialValue) {
    let total = inicialValue;
    for (let i = 0; i < array.length; i++) {
        total = binaryOperation(total,array[i]);
    }
    return total;
}

var numbers = [1,3,4,6,23,56,56,67,3,567,98,45,480,324,546,56];

var sum = (x,y) => x + y;

console.log(reduce(numbers, sum, 0));

console.log('\n');



// ======================= EJERCICIO 13
console.log('===================== EJERCICIO 13');

// no encontré la manera de hacer un array con clave:valor. Uso un objeto.
function calcularEdad(fechaNacimiento) {
    let actual = new Date();
    // restamos los años y ya se podria calcular la edad aproximadamente, ya que no se corroboran el mes y dia
    let anios = actual.getFullYear() - fechaNacimiento.getFullYear();
    // para mas presición, calculo mes y dia
    let diaActual = actual.getDate();
    let mesActual = actual.getMonth();

    let diaPersona = fechaNacimiento.getDate();
    let mesPersona = fechaNacimiento.getMonth();

    // se corrobora que el mes que estamos sea menor o si es igual pero todavia no es el dia
    if (mesActual < mesPersona || mesActual == mesPersona && diaActual < diaPersona)
        anios--;

    return anios;
}

function calcularIMC(persona) {
    let altura = persona.height / 100;
    let imc = persona.weight / altura*2;
    return imc;
}

function inciso1(...arg) {
    let nombres = [];
    for (let per of arg) {
        if (calcularIMC(per) > 25)
            nombres.push(per.name);
    }
    return nombres;
}

function inciso2(...arg) {
    let personas = {}
    for (let per of arg)
        personas[per.name] = calcularEdad(per.dob);
            
    return personas;
}

function inciso3(...arg) {
    let imcMayores40 = [];
    for (let per of arg) {
        if (calcularEdad(per.dob) > 40) 
            imcMayores40.push(calcularIMC(per));
    }
    return imcMayores40;
}

function inciso4(...arg) {
    let prom = 0;
    let cant = 0;
    for (let per of arg) {
        prom += calcularIMC(per);
        cant++;
    }
    return prom / cant;
}

function inciso5(...arg) {
    let min = 99999;
    for (let per of arg) {
        let edad = calcularEdad(per.dob);
        if (min > edad)
            min = edad;
        }
    return min;
}

function inciso6(...arg) {
    let orden = [];
    for (let per of arg)
        orden.push(per);

    orden.sort((a, b) => a.height - b.height);
    return orden;
}


var alice = {
    name : "Alice",
    dob : new Date(2001, 3, 4),
    height : 165,
    weight : 68
};

var bob = {
    name : "Robert",
    dob : new Date(1997, 0, 31),
    height : 170,
    weight : 88
};

var charly = {
    name : "Charles",
    dob : new Date(1978, 9, 15),
    height : 188,
    weight : 102
};

var lucy = {
    name : "Lucía",
    dob : new Date(1955, 7, 7),
    height : 155,
    weight : 61
};

var peter = {
    name : "Peter",
    dob : new Date(1988, 2, 9),
    height : 165,
    weight : 99
};

var luke = {
    name : "Lucas",
    dob : new Date(1910, 11, 4),
    height : 172,
    weight : 75
};

let nombres = inciso1(alice, bob, charly, lucy, peter, luke);
console.log(nombres);

let edades = inciso2(alice, bob, charly, lucy, peter, luke);
console.log(edades);

let imcMayores40 = inciso3(alice, bob, charly, lucy, peter, luke);
console.log(imcMayores40);

console.log(inciso4(alice, bob, charly, lucy, peter, luke));

console.log(inciso5(alice, bob, charly, lucy, peter, luke));

let ordenado = inciso6(alice, bob, charly, lucy, peter, luke);
console.log(ordenado);

console.log('\n');



// ======================= EJERCICIO 14
console.log('===================== EJERCICIO 14');
    function showMessage(message) {
        alert(message);
    }




// ======================= EJERCICIO 15
console.log('===================== EJERCICIO 15');
function enviar() {
    // obtengo el valor del input
    const texto = document.getElementById("texto").value;
    // obtengo el input directo ya que no recibo valores
    const texto2 = document.getElementById("texto2"); 
    // muestro en consola el contenido
    console.log(texto);
    // le asigno valor al input 2
    texto2.value = texto;
}




// ======================= EJERCICIO 16
console.log('===================== EJERCICIO 16');
function mostrarImagen() {
    // obtengo lo ingresado
    const textoImg = document.getElementById("textoImagen").value.toLowerCase();

    if (textoImg.trim() === "") {
        return alert("Ingresar texto");
    }

    // obtengo las imagenes
    const imagen1 = document.getElementById("imagen-1");
    const imagen2 = document.getElementById("imagen-2");
    const imagen3 = document.getElementById("imagen-3");

    // separamos por comas, eliminamos espacios extras y por las dudas convierto todo a minúsculas
    const imagenes = textoImg.split(",").map(img => img.trim());

    for (let img of imagenes) {
        if (img === "imagen 1") 
            imagen1.style.display = "block";
        if (img === "imagen 2") 
            imagen2.style.display = "block";
        if (img === "imagen 3") 
            imagen3.style.display = "block";
    }
}

function ocultarImagen() {
    // obtengo lo ingresado
    const textoImg = document.getElementById("textoImagen").value.toLowerCase();

    // obtengo las imagenes
    const imagen1 = document.getElementById("imagen-1");
    const imagen2 = document.getElementById("imagen-2");
    const imagen3 = document.getElementById("imagen-3");

    // separamos por comas, eliminamos espacios extras y por las dudas convierto todo a minúsculas
    const imagenes = textoImg.split(",").map(img => img.trim());

    for (let img of imagenes) {
        img = img.trim().toLowerCase();
        if (img == "imagen 1")
            imagen1.style.display = "none";
        if (img == "imagen 2")
            imagen2.style.display = "none";
        if (img == "imagen 3")
            imagen3.style.display = "none";
    }
}



// ======================= EJERCICIO 17
console.log('===================== EJERCICIO 17');
function mostrarImagenCheck() {
    const check1 = document.getElementById("img-1");
    const check2 = document.getElementById("img-2");
    const check3 = document.getElementById("img-3");

    const imagenCheck1 = document.getElementById("imagenCheck-1");
    const imagenCheck2 = document.getElementById("imagenCheck-2");
    const imagenCheck3 = document.getElementById("imagenCheck-3");

    if (check1.checked) {
        imagenCheck1.style.display = "block";
    } else {
        imagenCheck1.style.display = "none";
    }

    if (check2.checked) {
        imagenCheck2.style.display = "block";
    } else {
        imagenCheck2.style.display = "none";
    }

    if (check3.checked) {
        imagenCheck3.style.display = "block";
    } else {
        imagenCheck3.style.display = "none";
    }
}



// ======================= EJERCICIO 18
console.log('===================== EJERCICIO 18');

function elegir() {
    // obtienemos el ID del select que contiene la selección
    const colores = document.getElementById("colores");
    // obtenemos la clase del body que contiene el color de fondo
    const fondo = document.querySelector(".colorGeneral");
    // guardamos el color elegido
    let color = colores.value;

    // manualmente indico el color original del body
    if (color === "original")
        color =  "rgb(6, 28, 46)";
    // asignamos el nuevo color
    fondo.style.background = color;
}
  


// ======================= EJERCICIO 19
console.log('===================== EJERCICIO 19');

const colorAutomatico = document.getElementById("coloresAutomatico");

// a la escucha de un cambio dentro del ID coloresAutomaticos
colorAutomatico.addEventListener("change", function() {
    // si se detecto un cambio, obtengo la clase que maneja el color del body
    const fondo = document.querySelector(".colorGeneral");
    // guardamos el valor recibido, en este caso un color;
    let color = colorAutomatico.value;

    // manualmente indico el color original del body
    if (color === "original")
        color =  "rgb(6, 28, 46)";
    // asignamos el nuevo color
    fondo.style.background = color;

    // recargamos y mantenemos el cambio con localStorange
    localStorage.reload();
});



