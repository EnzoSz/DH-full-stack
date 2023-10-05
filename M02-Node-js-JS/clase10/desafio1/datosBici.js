const fs = require("fs");

function importarDatos() {
  let datosBici = fs.readFileSync("./bicicletas.json", "utf-8");

  let datosBiciArray = JSON.parse(datosBici);

  return datosBiciArray;
}

console.log(importarDatos());


module.exports = importarDatos;
