// declaracion de variables
let nombre = "Enzo";
let apellido = "Soliz";
let sueldoActual = 180000;
let porcentajeAumento = 25;
let calculoAumento = 0;
let nuevoSueldo = 0;

// Calculo del sueldo
calculoAumento = (sueldoActual * porcentajeAumento) / 100;
nuevoSueldo = sueldoActual + calculoAumento;
// Mostramos por pantalla el nombre del empleado con el sueldo actualizado

console.log(`Hola estimad@ ${nombre} ${apellido} \n En base a su sueldo actual: \n`);
console.log(`$${sueldoActual}\n`);
console.log(`Ha recibido un aumento del 25%: \n`);
console.log(`$${calculoAumento}\n`);
console.log(`y su nuevo sueldo es: $${nuevoSueldo}`);




