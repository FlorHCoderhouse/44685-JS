//Declaramos un array vacío
const arrayVacio = [];
const carrito = ['pizza', 'birra'];
const familiaSimpson = ['Abe Simpson', 'Homero Simpson', 'Marge Simpson', 'Bart Simpson', 'Lisa', 'Maggie', 'Huesos', 'Bola de Nieve'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const perros = ['firu', 'terbal', 'bolt', 'srBigotes', 'lazzie'];
const gatos = ['michi', 'fuz', 'garfield'];
const booleanos = [true, true, false, true];

//Array con elementos con diferentes tipos de datos
const mix = ['Hola', 12, true, 3.14, [1, 2, 3]];

/* 
//Acceder a los elementos del array 
console.log(familiaSimpson[0]);
console.log(familiaSimpson[1]);
console.log(familiaSimpson[2]);
console.log(familiaSimpson[3]);
console.log(familiaSimpson[4]);
console.log(familiaSimpson[5]);
console.log(familiaSimpson[6]);
console.log(familiaSimpson[7]);
console.log(familiaSimpson[8]); 
*/

/* 
//operando con elementos del array
let resultado =numeros[6]*numeros[2];
console.log(resultado); 
*/

/*
//Propiedad length del array nos permite saber su longitud, cuantos elementos tiene
console.log(familiaSimpson.length); 
*/

/* 
//Bucle for para recorer el array
for (let i = 0; i < familiaSimpson.length; i++) {
    console.log(familiaSimpson[i]);   
} 
*/

/*
//Diferenciando cantidad de elementos de índice
for (let index = 0; index < familiaSimpson.length; index++) {
    console.log('El miembro número ' + (index + 1) + ' de la familia es: ' + familiaSimpson[index] + '. Su posición en el array es ' + index);
} 
*/

/* 
//Reasignar el valor de una posición específica del array
familiaSimpson[15] = 'Mona Simpson';
console.log(familiaSimpson); 
*/

/* 
//Métodos de los arrays

//Agregar elementos


familiaSimpson.push('Hugo','Sra.Bouvier'); //agrega uno o más elementos al final
console.log(familiaSimpson);

//también podemos pedirle al usuario que nos dé el elemento
let nuevoPersonaje = prompt('Ingresa un personaje');
familiaSimpson.push(nuevoPersonaje);
console.log(familiaSimpson);

familiaSimpson.unshift('Paty','Troy McClure'); //agrega un elemento al principio
console.log(familiaSimpson); */

/*
//Eliminar elementos
familiaSimpson.pop(); //elimina el último elemento
console.log(familiaSimpson);

familiaSimpson.shift(); //elimina el primer elemento
console.log(familiaSimpson);

familiaSimpson.splice(2,4);//elimina uno o más elementos desde una posición específica
console.log(familiaSimpson);

familiaSimpson.splice(2)//Si solo le doy un parámetro, elimina desde esa posición hasta el final
console.log(familiaSimpson);
*/

/*
//Otros métodos de los arays
//toString: convierte todos los elementos a una solo string, donde cada elemento está separado del siguiente por una coma
const aCadena = familiaSimpson.toString();
console.log(aCadena);

//join
const imprimible =familiaSimpson.join(' # ');
console.log(familiaSimpson.join('\n'));

//concat
const mascotas =perros.concat(gatos); 
console.log(mascotas);

const otrasMascotas = gatos.concat(perros);
console.log(otrasMascotas); 

//slice(start,end): copia desde la posición start hasta la posición end (e no incluida)
const otrosPerros = perros.slice(2,4);
console.log(otrosPerros);

const copiaFamilia = familiaSimpson.slice(0);//acá copia todo el array
console.log(copiaFamilia);

//indexOf - devuelve un entero con el índice del elemento
console.log('El index del elemento "Lisa" es ' + familiaSimpson.indexOf('Lisa'));
console.log('El index del elemento "Krusty" es ' + familiaSimpson.indexOf('Krusty'));

//includes - devuelve un booleano
console.log(carrito.includes('pizza'));
console.log(carrito.includes('empanadas'));

//reverse - método DESTRUCTIVO!!
copiaFamilia.reverse();
console.log(copiaFamilia); 
*/

/* 
//Arrays de objetos

const librosHarryPotter = [{ id: 100, titulo: 'Harry Potter y La Piedra filosofal', fecha: 1997 }, { id: 200, titulo: 'Harry Potter y la Cámara de los Secretos', fecha: 1998 }, { id: 300, titulo: 'Harry Potter y el prisionero de Azkabán', fecha: 1999 }, { id: 400, titulo: 'Harry Potter y el cáliz de fuego', fecha: 2000 }]

librosHarryPotter.push({ id: 500, titulo: 'Harry Potter y la Orden del Fénix', fecha: 2001 });

//el usuario ingresa los datos
let id= parseInt(prompt('id'))
let titulo= prompt('nombre')
let fecha= parseInt(prompt('fecha'))

//usamos los datos del usuario para crear el libro
let libro6 = { id, titulo, fecha }

//pusheamos el nuevo libro al array
librosHarryPotter.push(libro6);


console.log(librosHarryPotter);

//bucle for...of para recorrer un array de objetos
for (const libro of librosHarryPotter) {
    libro.id = libro.id + 1;
    alert('El libro se llama ' + libro.titulo + ' y su ID es ' + libro.id);
} 

*/