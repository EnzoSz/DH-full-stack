//if

let clima = "Soleado";
let dia = "Sabado";

if (clima == "Soleado" && dia == "Domingo") {
  console.log("Lindo dia para pasear");
} else if (clima == "Soleado" && dia == "Lunes") {
  console.log("Podria salir igual");
} else {
  console.log("Mejor me quedo en caso practicando JS");
}

//if ternario

let fruta = "naranja";

let resultado =
  fruta == "Manzana"
    ? "Buenisismo me gustan las manzanas"
    : "Ufa queria manzana";
console.log(resultado);

//switch

let semaforo = "amarillo";

switch (semaforo) {
  case "verde":
    console.log("Puedo cruzar");
    break;
  case "amarillo":
    console.log("Precaucion");
    break;
  case "rojo":
    console.log("No cruces, hay que esperar");
    break;
  default:
    console.log("No funciona el semaforo");
    break;
}

let rodadoMountainBike = 18;
let rodadoAurora = 24;
let comparacion = (rodadoMountainBike < rodadoAurora);
let marcaRodadoMasGrande = comparacion ?'Aurora':'Mountain Bike';

console.log("La bicicleta con  mayor rodado es la " + marcaRodadoMasGrande);
