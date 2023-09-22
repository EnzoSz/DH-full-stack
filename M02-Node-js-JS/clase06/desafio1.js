//declaracion de variables

let electrodomesticos = ['Tv', 'Lavarropas','Heladera','Microondas','Tostadora','Pc'];

//Mostramos los elementos del arrays de manera arbitraria

console.log(electrodomesticos[0]);
console.log(electrodomesticos[2]);
console.log(electrodomesticos[1]);
console.log(electrodomesticos[3]);
console.log(electrodomesticos[5]);
console.log(electrodomesticos[4]);

/* Extraer el primer elemento del arrays y colocarlo al final del mismo */

let primerElem = electrodomesticos.shift();
electrodomesticos.push(primerElem);

console.table(electrodomesticos);

/*Agregar al final del arrays dos nuevos elementos */

electrodomesticos.push('Plancha', 'Secador');
console.table(electrodomesticos);

/* Mostrar por la consola la cantidad de elementos que contiene el array. */

console.log(`La cantidad de elementos que contiene el arrays electrodomesticos es ${electrodomesticos.length}`)

/* Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”. */

let productoBuscado = 'A';

if (electrodomesticos.indexOf(productoBuscado) !== -1) {
    console.log(`Producto encontrado`);
}else {
    console.log(`El producto buscado no existe`);
}

/* Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco. */

let strArray = electrodomesticos.join(' ');
console.log(strArray);

/* Determinar la cantidad de elementos que posee la cadena de texto obtenida. */

console.log(`la cantidad de elementos que posee la cadena de texto es: ${strArray.length}`);

/* Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello. */

let palabra = 'Licuadora';
let palabraAreemplazar= 'Tv';
let textoModificado =strArray.replace(palabraAreemplazar,palabra);
console.log(textoModificado);

/* Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma. */
let arrayFinal = textoModificado.split(' ');
console.table(arrayFinal);
