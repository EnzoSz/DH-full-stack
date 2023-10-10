const collectibles = require("../desafio1/collectibles.js");

//creamos las variables para cada marca
let hotToys = collectibles.importar(1);
let bandai = collectibles.importar(2);
let starWars = collectibles.importar(3);

/* console.log(hotToys);
console.log(bandai);
console.log(starWars); */

//Creamos un unico array con todas las marcas

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

/* console.log("--------------");
console.log(unifiedCollectibles); */

/* Crear objeto literal que tenga como primer atributo figuras 
, y contenga la lista de todas las figuras importadas */

let collectiblesObj = {
  figuras: {
    hotToys: hotToys,
    bandai: bandai,
    starWars: starWars,
  },

  listFigures: function () {
    console.log(`Figuras de Hot toys`);
    this.figuras.hotToys.forEach((figura) => {
      console.log(`
            Marca: ${figura.marca}
            Nombre: ${figura.nombre}
            Precio: ${figura.precio}
            Stock: ${figura.stock}`);
    });
    console.log(`Figuras de Bandai`);
    this.figuras.bandai.forEach((figura) => {
      console.log(`
            Marca: ${figura.marca}
            Nombre: ${figura.nombre}
            Precio: ${figura.precio}
            Stock: ${figura.stock}`);
    });
    console.log(`Figuras de Starwars`);
    this.figuras.starWars.forEach((figura) => {
      console.log(`
            Marca: ${figura.marca}
            Nombre: ${figura.nombre}
            Precio: ${figura.precio}
            Stock: ${figura.stock}`);
    });
  },
  figuresByBrand: function (marca) {
    let todasLasMarcas =[];
    switch (marca) {
        case 'Hot Toys':
            todasLasMarcas = this.figuras.hotToys;
            break;
        case 'Bandai':
            todasLasMarcas = this.figuras.bandai;
            break;
        case 'Star Wars':
            todasLasMarcas = this.figuras.starWars;
            break;
    
        default:
            console.log(`Marca ${marca} no valida`)
            break;
    }
    //filtro las figuras por la marca y las retorno

    return todasLasMarcas.filter((figura)=> figura.marca ==marca);
  },
};

collectiblesObj.listFigures();

console.log(collectiblesObj.figuresByBrand('Star Wars'));
