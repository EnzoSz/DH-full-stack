/* Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes. */

/* let num = 10;

const numerosSucesivos = (num) => {
    console.log(`Los 10 numeros siguientes a ${num} son:`)
    for (let i= 0;  i <10 ; i++) {
        num +=1;
        console.log(num);
        
    }
}

numerosSucesivos(num); */

/* Imprimir los números entre el 1 y el 57, saltando de tres en tres. */

/* const saltandoDeTres = () => {
    for (let i = 1; i <= 57; i+=3) {
        console.log(i);
        
    }
}

saltandoDeTres();
 */
/* Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
100. */

/* const sumatoria = () => {
    let sumador = 0;
    for (let i = 0; i <= 100; i++) {
        sumador += i;
        // console.log(sumador);
    }
    console.log(sumador);
}

sumatoria(); */

/* Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase. */
/* let texto = "practicando el uso de los ciclos o bucles";
const conversionMayus = (texto) => {
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toUpperCase();
    console.log(letra);
  }
};

conversionMayus(texto); */

/* Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2. */

let numerosPositivos = [1, 2, 43, 50, 60, 100, 10, 20, 23, 25,11];

const numerosPares = (numerosPositivos) => {
  const numPares = [];
  for (let i = 0; i < numerosPositivos.length; i++) {
    if (numerosPositivos[i] % 2 === 0) {
      numPares.push(numerosPositivos[i]);
    }
  }
  return numPares;
};

console.log(numerosPares(numerosPositivos));


/* Esta es otra forma de resolver este ejercicio utilizando el metodo filter.
Este metodo retorna un nuevo array con la condiciones que nosotros necesitemos  */
const numPares = numerosPositivos.filter(numero => numero %2 ===0);
console.log(numPares);