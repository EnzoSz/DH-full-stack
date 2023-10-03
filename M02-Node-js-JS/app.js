/* let saludo = 'Hola mundo';
console.log(saludo); */
let fs = require('fs');

let moment = require('moment');

let heroes = require('./superheroes')

console.log(moment().format('MMM Do YYYY'));
console.log(heroes);

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

console.log(datos);