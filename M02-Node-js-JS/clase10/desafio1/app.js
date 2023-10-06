let bicicletasArray = require("./datosBici");

// console.log(bicicletasArray);

let dhBici = {
  bicicletas: bicicletasArray,
  buscarBici: function (id) {
    let buscar = this.bicicletas.filter((bici) => {
      //la variable buscar guardara un array con el elemento encontrado
      return bici.id == id;
    });
    if (buscar == "") {
      return null;
    } else {
      return buscar;
    }
  },
  venderBici: function (id) {
    let encontrar = this.buscarBici(id);
    if (encontrar == null) {
      return `Bicicleta no encontrada`;
    } else {
      encontrar[0].Vendida = true;
      return encontrar[0];
    }
  },
  biciParaLaVenta: function () {
    let biciEnVenta = this.bicicletas.filter((bici) => {
      return bici.Vendida == false;
    });
    return biciEnVenta;
  },
  totalDeVentas: function () {
    let ventas = this.bicicletas.reduce((total, bici) => {
      if (bici.Vendida == true) {
        return total + bici.Precio;
      }
      return total;
    }, 0);
    return `Total de ventas ${ventas}`;
  },
  aumentoBici: function (aumento) {
    let bicisConAumento = this.bicicletas.map((bici) => {
      let aumentoPrecio = (bici.Precio * aumento) / 100;
      bici.Precio += aumentoPrecio;
      return bici;
    });
    return bicisConAumento;
  },
  biciPorRodado: function (rodado) {
    let biciRodado = this.bicicletas.filter((bici) => {
      return bici.Rodado == rodado;
    });
    return biciRodado;
  },
  listarTodasLasBici: function () {
    console.log("Listado de todas las bicicletas registradas:");
    for (const bici of this.bicicletas) {
      console.log(
        `Marca: ${bici.Marca}
         Modelo: ${bici.Modelo}
         Rodado: ${bici.Rodado} 
         Año de fabricación: ${bici.Anio}
         Color: ${bici.Color}
         Peso en Kilogramos: ${bici.Peso}
         Tipo: ${bici.Tipo}
         Precio: ${bici.Precio}
         Vendida: ${bici.Vendida ? "Sí" : "No"}`
      );
      console.log("-----------------------------");
    }
  },
};

console.log(dhBici.buscarBici(3));
console.log(dhBici.venderBici(1));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());
console.log(dhBici.aumentoBici(20));
console.log(dhBici.biciPorRodado(29));
dhBici.listarTodasLasBici();
