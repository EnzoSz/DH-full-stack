//declaramos variables
let nombre = "Enzo";
let apellido = "Soliz";
let edad = 27;
let numeroTelefono = 2616668928;
let socio = true;
let fechaPartido = "25-09-23";
let horaPartido = "18hs";
let numeroSilla = 250;
let precioBoleto = 4500.0;

console.log(nombre);
console.log(apellido);
console.log("Edad: " + edad);
console.log("Numero de telefono: " + numeroTelefono);
console.log("socio: " + (socio ? "si" : "no"));
console.log("fecha: " + fechaPartido);
console.log("hora: " + horaPartido);
console.log("numero de silla: " + numeroSilla);
console.log("precio: " + precioBoleto);

console.log(" ");

console.log(`Nombre es de tipo: ${typeof nombre} \n
Apellido es de tipo: ${typeof apellido} \n
Edad es de tipo: ${typeof edad} \n
Numero de telefono es de tipo: ${typeof numeroTelefono} \n
Socio es de tipo: ${typeof socio} \n
Fecha es de tipo: ${typeof fechaPartido} \n
Hora es de tipo: ${typeof horaPartido} \n
Numero de silla es de tipo: ${typeof numeroSilla} \n
Precio es de tipo: ${typeof precioBoleto}`);
