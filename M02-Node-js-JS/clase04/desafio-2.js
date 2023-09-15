// declaracion de variables
let pagoMes = 4000.0;
let consumoKWH = 450;
let aumento = 1.2

// Verificar si se aplica aumento
pagoMes = consumoKWH > 300 ? pagoMes * aumento : pagoMes;

if (consumoKWH > 300) {
  console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario
    (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
    cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoMes}`);
} else {
  console.log(`El total a pagar es ${pagoMes}`);
}
