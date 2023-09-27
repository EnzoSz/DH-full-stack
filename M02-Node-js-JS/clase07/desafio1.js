/* El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. */

//declarar un array con los movimientos de la cuenta bancaria del cliente

let ingresosEgresos = [10000, 100, -5000, -400, -200];

// creamos una funcion para calcular los saldos

function calcularSaldos(array) {
  let depositos = 0;
  let extracciones = 0;
  let saldoActual = 0;

  for (let i = 0; i < array.length; i++) {
    saldoActual += array[i];

    if (array[i] > 0) {
      depositos += array[i];
    } else {
      extracciones -= array[i];
    }
  }
  return { depositos, extracciones, saldoActual };
}

// creamos funcion para recopilar la informacion del cliente
function mostrarInformacion(nombre, apellido, movimientos, calculadorSaldos) {
  let saldos = calculadorSaldos(movimientos);

  return `
    Estimado ${nombre} ${apellido} 
    El monoto total de los depositos es de : ${saldos.depositos}
    EL monto total de los retiros es de: ${saldos.extracciones}
    Por lo tanto, sul saldo actual en la cuenta es de ${saldos.saldoActual}`;
}

//Mostramos por consola la informacion del cliente ejecutando la funcion mostrarInformacion 
console.log(
  mostrarInformacion("Enzo", "Soliz", ingresosEgresos, calcularSaldos)
);
