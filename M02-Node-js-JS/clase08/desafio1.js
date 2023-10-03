/*  calcular el monto a pagar por un alumno basándose en los cursos que
desea tomar en Digital House.*/

/* declaracion de variables de nombre y apellido del alumno */

let nombre = "Enzo";
let apellido = "Soliz";

/* Crear un array multidimensional que contenga los nombres de los cursos y su precio */

let cursosDisponibles = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000],
];

/* crear un array que contenga los cursos que el alumno quiere tomar con DH
deben estan escritos en Mayusculas */

let cursosInteresAlumno = ["HTML5", "REACT", "NODEJS"];

/* Crear un funcion que calcule y retorne el monto a pagar por el alumno
recibe como parametros array de cursos disponible y array de cursos de interes por el alumno */

function calcularMontoAPagar(cursosDisponibles, cursosInteresAlumno) {
  let montoTotal = 0;
  for (let i = 0; i < cursosDisponibles.length; i++) {
    for (let j = 0; j < cursosInteresAlumno.length; j++) {
      if (cursosDisponibles[i][0].toUpperCase() === cursosInteresAlumno[j]) {
        montoTotal += cursosDisponibles[i][1];
      }
    }
  }
  return montoTotal;
}

/* Crear una funcion que retorne el nombre y apellido del alumno y el monto a pagar
recibe como parametro el array de los cursos disponibles y el de interes por el alumno
tambien la funcion para calcular el monto a pagar*/

function informarAlmuno(
  nombre,
  apellido,
  cursosDisponibles,
  cursosInteresAlumno,
  calcularMontoAPagar
) {
  const montoTotal = calcularMontoAPagar(
    cursosDisponibles,
    cursosInteresAlumno
  );

  return `
  Estimad@ ${nombre} ${apellido} en funcion de los cursos seleccionados.
  El total a pagar de los cursos que seleccionó es de :
  ${montoTotal}
  Bienvenido a Digital House!`;
}

console.log(
  informarAlmuno(
    nombre,
    apellido,
    cursosDisponibles,
    cursosInteresAlumno,
    calcularMontoAPagar
  )
);
