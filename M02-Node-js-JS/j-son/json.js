let amigos = ["Coco", "Pablo", "Gabi", "Leo"];

let amigosJSON = JSON.stringify(amigos);

// console.log(amigos);
// console.log(amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON);

// console.log(amigosOriginal);

let persona = {
    nombre: 'Carli',
    edad: 25,
    domicilio: 'Calle falsa 123'
}

let personaJSON = JSON.stringify(persona);

console.log(personaJSON);

let personaOriginal = JSON.parse(personaJSON);
console.log(personaOriginal);
