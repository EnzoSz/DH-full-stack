let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [num1, , num3, , num4] = numeros;

let numRestantes = [...numeros];
/* utilizamos el metodo splice que nos permite eliminar un elemento del array
indicandole la donde quiere empezar a eliminar y el otro parametro para decirle
cuantos elementos eliminar  */
numRestantes.splice(0, 1);
numRestantes.splice(1, 1);
numRestantes.splice(2, 1);
console.log(num1, num3, num4);
console.log(numRestantes);

//Crear un objeto literal para almacenar los datos de nuestra mascota

let mascota = {
  nombre: "Lola",
  tipoDeMascota: "Perro",
  color: "Blanco",
  raza: "Caniche",
};

let { nombre, tipoDeMascota, color, raza } = mascota;

console.log(
  `Hola les presento a mi mascota, su nombre es ${nombre}, es un hermoso ${tipoDeMascota},
  de color: ${color} y su raza es: ${raza}`
);
