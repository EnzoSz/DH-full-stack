//funcion para calcular el total a pagar
const calcularTotalHamburguesa = (
  tipoHamburguesa,
  jamon,
  queso,
  salsaDeTomate,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla
) => {
  let precioBase = 0;
  //calculo el precio base
  switch (tipoHamburguesa) {
    case "Carne a la parrilla":
      precioBase = 1800;
      break;
    case "Pollo":
      precioBase = 1500;
      break;
    case "Vegetariana":
      precioBase = 1200;
      break;
    default:
      precioBase = 0;
      break;
  }

  let costoAdicional = 0;

  jamon ? (costoAdicional += 30) : 0;
  queso ? (costoAdicional += 25) : 0;
  salsaDeTomate ? (costoAdicional += 5) : 0;
  mayonesa ? (costoAdicional += 5) : 0;
  mostaza ? (costoAdicional += 5) : 0;
  tomate ? (costoAdicional += 15) : 0;
  lechuga ? (costoAdicional += 10) : 0;
  cebolla ? (costoAdicional += 10) : 0;

  //cacular el total a pagar
  const totalApagar = precioBase + costoAdicional;
  return totalApagar;
};

//funcion mostrar el mensaje al usuario

function mostrarMensaje(
  nombre,
  apellido,
  tipoHamburguesa,
  jamon,
  queso,
  salsaDeTomate,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla
) {
  const totalApagar = calcularTotalHamburguesa(
    tipoHamburguesa,
    jamon,
    queso,
    salsaDeTomate,
    mayonesa,
    mostaza,
    tomate,
    lechuga,
    cebolla
  );
  console.log(
    `Estimad@ cliente: ${nombre} ${apellido}, el monto a pagar es de: ${totalApagar}`
  );
}

//Ejemplo

mostrarMensaje(
  "Enzo",
  "Soliz",
  "Pollo",
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  true
);
