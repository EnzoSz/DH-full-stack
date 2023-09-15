// declaracion de variables
let numero2 = 0;
let operador = "/";
let resultado = 0;
// inicio : realizar operacion matemática

switch (operador) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      console.log(`No se puede dividir por 0`);
    }
    break;
  default:
    console.log(
      "Las operaciones aceptadas son: sumar-restar-multiplicar-dividir"
    );
    break;
}
// Muestra el resultado
console.log(`El resultado de la cuenta es: ${resultado}`);
