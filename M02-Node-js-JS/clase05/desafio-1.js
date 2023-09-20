// declaracion de variables

let tipoVehiculo = "Mediano";
let diasAlquiler = 3;
let sillaBebe = true;

// Inicio calculo monto a pagar

function totalApagar(tipoVehiculo, diasAlquiler, sillaBebe) {
  let total = 0;
  switch (tipoVehiculo) {
    case "Compacto":
      total = diasAlquiler * 14000;
      break;
    case "Mediano":
      total = diasAlquiler * 17000;
      break;
    case "Camioneta":
      total = diasAlquiler * 28000;
      break;
    default:
      console.log("El tipo tipo de vehiculo no esta disponible");
      break;
  }

  if (sillaBebe == true && total !== 0) {
    total += 1200;
  }
  console.log(`EL total a pagar es de: $${total}`);
}

totalApagar(tipoVehiculo, diasAlquiler, sillaBebe);
