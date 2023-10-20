/* Requerir modulo de autos */

const autosImportados = require("./autos");

const concesionaria = {
  autos: autosImportados,

  buscarAuto: function (patente) {
    /* Implementamos el metodo find para el array, que nos devuelve el primer elemento de 
    array que cumpla con la condicion proporcionada */
    let autoBuscado = this.autos.find((auto) => auto.patente === patente);
    return autoBuscado || null;
  },
  venderAuto: function (patente) {
    let encontrarAuto = this.buscarAuto(patente);
    if (encontrarAuto != null) {
      encontrarAuto.vendido = true;
      return encontrarAuto;
    }
  },
  autosParaLaVenta: function () {
    let autoEnVenta = this.autos.filter((auto) => auto.vendido == false);
    return autoEnVenta;
  },
  autosNuevos: function () {
    let autoEnVenta = this.autosParaLaVenta().filter((auto) => auto.km < 100);
    return autoEnVenta;
  },
  listaDeVentas: function () {
    let ventas = this.autos.filter((auto) => auto.vendido === true);
    let precios = ventas.map((auto) => auto.precio);
    return precios;
  },
  totalDeVentas: function () {
    let ventas = this.listaDeVentas();
    if (ventas.length === 0) {
      return 0;
    } else {
      return ventas.reduce((total, precio) => total + precio, 0);
    }
  },
  puedeComprar: function (auto, person) {
    // Verificar si el costo total del auto es mayor que la capacidad de pago total de la persona
    if (auto.precio > person.capacidadDePagoTotal) {
      return false;
    }

    // Verificar si el costo de una cuota del auto es mayor que la capacidad de pago en cuotas de la persona
    if (auto.precio / auto.cuotas > person.capacidadDePagoEnCuotas) {
      return false;
    }

    // Si ambas condiciones se cumplen, la persona puede comprar el auto
    return true;
  },
  autosQuePuedeComprar: function (person) {
    let autoEnVenta = this.autosParaLaVenta();

    let autoQuePuedeComprar = autoEnVenta.filter((auto) =>
      this.puedeComprar(auto, person)
    );
    return autoQuePuedeComprar;
  },
};

let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 100000,
};

// console.log(concesionaria.buscarAuto("APL121"));
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());
console.log(concesionaria.puedeComprar("Ford", persona));
