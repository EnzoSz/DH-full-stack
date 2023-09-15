// declaracion de variables
let stringSpain = 'Enzo';

// inicio

switch (stringSpain.toLowerCase()) {
    case 'gato':
        console.log('cat');
        break;
    case 'perro':
        console.log('dog');
        break;
    case 'puerta':
        console.log('door');
        break;
    case 'ventana':
        console.log('window');
        break;
    case 'mesa':
        console.log('table');
        break;
    default:
        console.log('La palabra ingresada es incorrecta');
        break;
}
