let salarioMensual = 130000;
let cantDiasTrabajados = 30;
let cantHorasxDia = 8;

const valorXhora = (salarioMensual, cantDiasTrabajados, cantHorasxDia) => {
    precioXhora = (salarioMensual/cantDiasTrabajados)/cantHorasxDia
    return precioXhora;
}

console.log(`El precio por hora es de: $${valorXhora(salarioMensual,cantDiasTrabajados, cantHorasxDia)}`);