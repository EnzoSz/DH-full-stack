/* Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se pueda
visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar algunos de los
ciclos o bucles aprendidos: for - while o do while, */

function tablasMultiplicar() {
  for (let i = 1; i <= 10; i++) {
    console.log(`-----Tabla del ${i} ------`);
    for (let j = 1; j <= 10; j++) {
      const resultado = i * j;
      console.log(`${i} x ${j} = ${resultado}`);
    }
  }
}

tablasMultiplicar();
