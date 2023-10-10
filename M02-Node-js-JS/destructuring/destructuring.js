let cursos = ['Programacion', 'MKT', 'UX', 'Data Science', 'UI']

// Destructuracion de arrays

let [programacion, mkt]=cursos;

console.log(cursos);
console.log(programacion);
console.log(mkt);

//Destructuracion de objetos literales

let persona = {
    nombre: 'Enzo',
    edad: 27,
    domicilio: 'Belgrano 1104'
}

let {nombre, edad}= persona;

console.log(persona);
console.log(nombre);
console.log(edad);

