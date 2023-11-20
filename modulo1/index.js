//Escribir un programa con JavaScript que resuelva el siguiente problema: Dada una lista (o array) de números enteros, encontrar el número más grande de la lista y mostrarlo en consola. 
function max (array){
let maximo = array [0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }
  return maximo;
}

const numeros = [3, 8, 2, 15, 4, 7];
const maximoEncontrado = max(numeros);
console.log("El número más grande es:", maximoEncontrado);

//2. Escribir una función en JavaScript que tome dos números como argumentos y devuelva su suma.

/* const suma = (a , b) =>{
return a + b
}
const num = suma (5,3)
const numeroSuma = suma(num);
console.log("El número de la suma es:", numeroSuma); */
