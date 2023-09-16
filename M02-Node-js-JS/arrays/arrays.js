// arrays

/* let nombres = ['Enzo', 'Dario', 'Javier'];
let edades = [34, 27,20, 23];
let valoresDeVerdad = [true, false,true];
let varios = ['Nacho', 34, true,edades];
// consultar un dato concreto en un arrays

console.log(valoresDeVerdad[1]);

// Arrays dentro de arrays

console.log(varios[3][1]);
 */

//Metodos de arrays

let notas = [3, 5, 10, 9, 7, 8, 8, 8];
/* // metodo push
// agrega al a la posicion siguien del ultimo elemento de arrays
notas.push(1);

// metodo pop
// eliminia el ultimo elemento del arrays. 
// Tiene la particularidad de que se puede guardar ese elemento en otra variable
 let nota1 =notas.pop();
console.log(nota1) */

//Metodo shift y unshift
/* elimina el primer elemento del arrays */
notas.shift();
/* agrega en la primer posicion del arrays el valor que queremos */
notas.unshift(1);

/* Medodo indexOf 
    Busca el elemento de un arrays, y recorre el arrays desde la posicion
    0 y nos muestra en que posicion esta, 
    en caso de que no lo encuentre retorna -1
*/
let posicionDelOcho = notas.indexOf(8);

/* Metodo lastIndexOf 
    Busca el elemento de un arrays, pero comienza desde la ultima posicion,
    y muestra la posicion
*/
 let posicionDelOcho2 = notas.lastIndexOf(8)

/* Metodo join 
    Nos muestra el todo el contenido que tenga el arrays como un string
*/
let resultadoJuntado = notas.join('-');



console.log(resultadoJuntado);

console.log(posicionDelOcho);
console.log(posicionDelOcho2);

console.log(notas);
