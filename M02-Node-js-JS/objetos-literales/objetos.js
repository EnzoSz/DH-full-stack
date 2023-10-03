// objeto literal

let curso = {
  cantidadAlumnos: 32,
  docentes: ["Nacho", "Javier"],
  horario: "de 19 a 21hs",
  notificaciones: function () {
    return `El horario de la cursada es de ${this.horario}`;
  },
};

/* Funcion constructora */
function Curso(cantidadAlumnos, docentes, horario) {
    this.cantidadAlumnos = cantidadAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramacion = new Curso(50, ['Javier', 'Enzo'], 'de 19 a 21hs');
let cursoDeMarketing = new Curso(60, ['Guido', 'Enzo'], 'de 16 a 19hs');

console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);
/* console.log(curso.docentes);
console.log(curso.notificaciones());
 */