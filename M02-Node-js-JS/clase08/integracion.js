function asientosDisponibles(asientos, asientoSolicitado) {
  for (let i = 0; i < asientos.length; i++) {
    if (asientos[i] === asientoSolicitado) {
      return (
        "Felicitaciones, el asiento número " +
        asientoSolicitado +
        " está disponible"
      );
    }
  }
  const asientosDisponibles = asientos.length;
  return (
    "Lo sentimos, el asiento número " +
    asientoSolicitado +
    " está ocupado, pero aún quedan " +
    asientosDisponibles +
    " asientos disponibles"
  );
}

// Ejemplo de uso
console.log(asientosDisponibles([15, 28, 44, 45, 70], 28));
/* console.log(asientosDisponibles([15, 28, 44, 45, 70], 50)); */

function laClaveSecreta(caracteres) {
  let array = caracteres.length;
  let clave = [];
  for (let i = array ; i >=0; i--) {
    if (caracteres[i] !== "*") {
      clave.push(caracteres[i]);
    }
  }

  return clave.join("");
}

console.log(
  laClaveSecreta([
    "a",
    "*",
    "d",
    "a",
    "r",
    "f",
    "*",
    "i",
    "c",
    "*",
    "s",
    "e",
    "d",
    " ",
    "e",
    "*",
    "v",
    "a",
    "l",
    "C",
  ])
);
