/* declaracion de la variable  */

let pelis = [
  "Turno de dia",
  "30 noches con mi ex",
  "Bestia",
  "El monte",
  "Top gun maverick",
  "Elvis",
  "Thor: amor y trueno",
];

/* seleccionamos la pelicula mas vista */

let peliMasVista = 'Thor: amor y trueno';
function peliMayus (peliMasVista) {
    let peliselecc = pelis.pop()
    peliselecc.toUpperCase;
    pelis.unshift(peliselecc);
}

peliMayus()
