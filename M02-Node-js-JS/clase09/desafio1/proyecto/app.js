// importamos el module peliculas

let peliculas = require("./peliculas");

//mostramos el usuario cada la informacion de cada pelicula

function informacionPeliculas(peliculas) {
  for (let i = 0; i < peliculas.length; i++) {
    console.log(`
    La pelicula ${peliculas[i].nombre} contiene la siguiente iformacion:
    ID: ${peliculas[i].id} 
    Rating: ${peliculas[i].rating} 
    Premios: ${peliculas[i].awards} 
    Duracion: ${peliculas[i].length} 
    Precio: ${peliculas[i].price} 
    Género: ${peliculas[i].genre}`);
  }
}

/* console.log(peliculas); */

/* Ejecutamos la funcion para mostrar por concola la info de cada peli */
informacionPeliculas(peliculas);

/* Desafio 2 */

/* module nativo de node File System */
let fs = require("fs");
let mensaje = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8");

console.log(mensaje);
