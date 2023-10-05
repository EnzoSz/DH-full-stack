/* Metodos de arrays */

let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaEl100 = notas.map((numero) => {
  return numero * 10;
});

// console.log(notasHastaEl100);

let notasAprobadas = notas.filter((numero) => {
  return numero >= 7;
});

// console.log(notasAprobadas);

let sumaNotas = notas.reduce((estado, numero) => {
  return estado + numero;
});

// console.log(sumaNotas);

notas.forEach((valor, indice)=>{
    console.log(`En la posicion ${indice} tengo el valor ${valor}`);
    
})
