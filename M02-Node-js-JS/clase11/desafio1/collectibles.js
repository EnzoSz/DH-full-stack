const fs = require("fs");

function importar(marca) {
  //define la ruta al archivo JSON correspondiente a la marca
  const rutaArchivo = `../desafio1/datos/figuras${marca}.json`;

  //verifica si el archivo existe
  if (!fs.existsSync(rutaArchivo)) {
    throw new Error(`No se encontro el archivo para la marca ${marca}`);
  }

  //Lee el archivo JSON y conviertelo en un array de objetos

  const datos = JSON.parse(fs.readFileSync(rutaArchivo, "utf-8"));

  return datos;
}

module.exports = {
  importar
};
