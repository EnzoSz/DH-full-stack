/*  Necesitan un código que permita determinar el
promedio de alumnos egresados por curso*/

/* Crear cuatro variables */

let graduadosDeHtml5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosDeCss3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosDeJavascript = "70 65 58 45 23 57 34 17 72";
let graduadosDeNodejs = "45 56 73 34 65 72 70 32";

/*  a cada una de las variables que contienen las cadenas de texto convertilas
a arrays separando cada elemento con una coma */

const arrayGraduadosHtml5 = graduadosDeHtml5.split(" ");
const arrayGraduadosCss3 = graduadosDeCss3.split(" ");
const arrayGraduadosJavascript = graduadosDeJavascript.split(" ");
const arrayGraduadosNodejs = graduadosDeNodejs.split(" ");

// console.log(arrayGraduadosHtml5);

/* Crear una funcion que calcule y retorne el promedio de graduados
que recibira como parametros los cuatro arrays y un numero entre 1 y 4 */

function calculoPromGraduados(
  arrayGraduadosHtml5,
  arrayGraduadosCss3,
  arrayGraduadosJavascript,
  arrayGraduadosNodejs,
  numero
) {
  let promedio = 0;
  let curso = null;
  switch (numero) {
    case 1:
      curso = arrayGraduadosHtml5;
      break;
    case 2:
      curso = arrayGraduadosCss3;
      break;
    case 3:
      curso = arrayGraduadosJavascript;
      break;
    case 4:
      curso = arrayGraduadosNodejs;
      break;
    default:
      console.log(`El curso seleccionado no existe.
            Por favor selecciona unos de los cursos disponibles:
            1- HTML5
            2-CSS3
            3-JAVASCRIPT
            4-NODESJS`);
      break;
  }

  if (curso !== null) {
    let arrayDeNumeros = curso.map((elemento)=> Number(elemento));
    let suma = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      suma += arrayDeNumeros[i];
    }
    promedio = suma / curso.length;
    console.log(
      `El promedio de graduados del curso de es de: ${promedio}`
    );

  }

}

calculoPromGraduados( arrayGraduadosHtml5,
    arrayGraduadosCss3,
    arrayGraduadosJavascript,
    arrayGraduadosNodejs,
    3);


