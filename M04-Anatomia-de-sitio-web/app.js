const express = require("express");
const path = require("path");
const app = express();
// console.log(app);
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

/* app.get("/", (req, res) => {
  res.send("Bienvenido a mi sitio web");
}); */

/* app.get("/contacto", (req, res) => {
  res.send("Dejanos tu contacto");
});

app.get("/un-array", (req, res) => {
  res.send(["Lunes", "Martes", "Miercoles"]);
});
app.get("/un-objeto", (req, res) => {
  res.send({ nombre: "Juan", apellido: "Perez" });
});
let producto = {
  tipoProducto: null,
  precio: null,
};
app.get("/producto/agregar", (req, res) => {
  res.send(producto);
}); */

// sendFile


app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './Express/index.html');
    
    res.sendFile(htmlPath);
});
