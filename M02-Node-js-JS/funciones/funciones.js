//funciones expresadas

let sumar = function (numeroA, numeroB) {
  return numeroA + numeroB;
};

console.log(sumar(7, 9));

//funcion declarada

function restar(numeroC, numeroD) {
  return numeroC - numeroD;
}
console.log(restar(10, 3));

//ejemplo scope

let mensaje = "hola";

function saludar() {
  let mensaje = "chau";
  return mensaje;
}

console.log(mensaje);
console.log(saludar());

//Arrow functions

let laMitad = (numero) => numero / 2;
console.log(laMitad(8));

let dividir = (numero1, numero2) => numero1 / numero2;
console.log(dividir(20, 5));

let tengoQueTrabajar = (dia) => {
  if (dia == "Sabado" || dia == "Domingo") {
    return "No tenes que trabajar";
  } else {
    return "Si, Enzo tenes que trabajar";
  }
};

console.log(tengoQueTrabajar('Lunes'));
