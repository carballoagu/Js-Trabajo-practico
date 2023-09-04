// 1. Función para verificar si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par");
    } else {
        console.log(numero + " es un número impar");
    }
}

// 2. Función para determinar cuál de dos números es mayor
function numeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log("Ambos números son iguales");
    }
}

// 3. Función para verificar si un número es múltiplo de 5
function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " es múltiplo de 5");
    } else {
        console.log(numero + " no es múltiplo de 5");
    }
}

// 4. Función para imprimir números desde 0 hasta un número dado
function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

// 5. Función para imprimir una palabra repetida n veces
function imprimirPalabraVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

// 6. Función para imprimir los valores de un array
function imprimirValoresArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// 7. Función para imprimir todos los valores de un array excepto el de la 5ta posición
function imprimirValoresExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) { // La 5ta posición corresponde al índice 4
            console.log(array[i]);
        }
    }
}

// 8. Función para multiplicar cada número de un array por un número dado
function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    }
}

// Ejemplos de uso de las funciones
esParOImpar(7);
numeroMayor(10, 20);
esMultiploDe5(25);
imprimirNumerosHasta(5);
imprimirPalabraVeces("Hola", 3);

const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirValoresArray(miArray);
imprimirValoresExceptoQuinto(miArray);
multiplicarArrayPorNumero(miArray, 2);
