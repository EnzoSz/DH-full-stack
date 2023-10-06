const fs = require("fs");
let datosBici = fs.readFileSync("./bicicletas.json", "utf-8");

let datosBiciArray = JSON.parse(datosBici);

module.exports = datosBiciArray;
