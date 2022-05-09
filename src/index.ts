let numero: number;
let cantPositivos: number = 0;
let cantTotal: number = 0;
let porcPositivos: number = 0;

numero = Number(prompt("Ingrese un numero"));

while (numero !== 0) {
  if (numero > 0) {
    cantPositivos++;
  } else {
    cantTotal++;
    numero = Number(prompt("Ingrese un numero"));
  }

  porcPositivos = (cantPositivos * 100) / cantTotal;
  console.log(
    "La cantidad de numeros positivos es " +
      cantPositivos +
      "y el porcentaje de positivos respecto del total es " +
      porcPositivos
  );
}
