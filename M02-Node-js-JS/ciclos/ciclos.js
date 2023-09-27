// ciclo for

for (let i = 0; i < 10; i++) {
  console.log(`El valor de i es igual a ${i}`);
}

function tablaDeMultiplicar(numero) {
  //Escribí tu código aquí
  let i = 0;
  while (i <= 10) {
    resultado = i * numero;
    console.log(`5 * ${i} = ${resultado}`);
    i++;
  }
}

tablaDeMultiplicar(5);

function saldosDeMesesConGanancia(unPeriodo) {
  let cantidad = [];
  for (let i = 0; i < unPeriodo.length; i++) {
    if (unPeriodo[i] > 0) {
      cantidad.push(unPeriodo[i]);
    }
  }
  return cantidad;
}

console.log(saldosDeMesesConGanancia([120,0,20,-1,30]));