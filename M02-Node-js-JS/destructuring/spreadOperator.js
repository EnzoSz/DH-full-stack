let peliculasAccion = ['End Game', 'Iron Man 3','Capitan America'];
let peliclasComedia = ['Mi pobre angelito', 'Que paso ayer'];

let peliculas = [...peliculasAccion, ...peliclasComedia];

console.log(peliculas);

// objeto

let generoComedias = {
    nombreGenero: 'Comedia',
    popularidad: 3
}

let miPobreAngelito = {
    nombre: 'Mi pobre Angelito',
    duracion: 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre: 'Que paso ayer',
    duracion: 110,
    ...generoComedias
}

console.log(miPobreAngelito);
console.log(quePasoAyer);


// function

function peliculasVistas (...nombreDePeliculas) {
    for (let i = 0; i < nombreDePeliculas.length; i++) {
        console.log(`La persona ya vio ${nombreDePeliculas[i]}`);
        
    }
}

peliculasVistas('End game','Iron man 3', 'Mi pobre angelito');