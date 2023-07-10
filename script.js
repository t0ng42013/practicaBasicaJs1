//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parImpar(number) {
  if (number % 2 == 0) {
    console.log("el numero de la función es Par");
  } else {
    console.log("El numero de la función es Impar");
  }
}

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function esMayor(number1, number2) {
  if (number1 > number2) {
    console.log("numero " + number1 + " es mayor");
  } else if (number1 < number2) {
    console.log("numero 2 es mayor");
  } else {
    console.log("son iguales");
  }
}

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de 5.");
  } else {
    console.log(numero + " no es múltiplo de 5.");
  }
}

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimaNumeros(numero) {
  for (let i = 0; i < numero; i++) {
    console.log(i + 1);
  }
}

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function imprimirArray(arreglo) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function excepto5to(arreglo) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) console.log(array[i]);
  }
}

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

let arrreglo = [0, 1, 2, 3, 4, 5];

function multiNumeros(arrreglo, numero) {
  for (let i = 0; i < arrreglo.length; i++) {
    console.log(i + " * " + numero + " = " + arrreglo[i] * numero);
  }
}
