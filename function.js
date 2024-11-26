
// Tarea 6 Stephanie Silva - Fibonaci

//parte 1 , generar secuencia de finonacci hasta el 1000.
function calcularFibonacci() {
    //estoy creando una constante que se llama "Fibo Const" para poder calcular los numeros fibonacci hasta lo que diga la constante tope.
    const fiboConst = [0, 1];
    const tope = 1000;

    while (true) { //mi while va a estar iterando hasta que le de un quiebre más abajo con "break".
        let siguienteNumero = fiboConst[fiboConst.length - 1] + fiboConst[fiboConst.length - 2];
        if (siguienteNumero > tope) break; // acá lo fuerzo para que termine conforme a la variante tope que vale 1000.
        fiboConst.push(siguienteNumero);
    }
    console.log("Secuencia de Fibonachi:", fiboConst); //con este console log muestro el calculo del fibonacci hasta menos de 1000.


    // parte 2, separar numeros pares de la secuencia entre 0 y 1000

    const fiboPares = fiboConst.filter(numero => numero % 2 === 0); // acá creé la constante de los pares.  se llama "fiboPares"
    const fiboImpares = fiboConst.filter(numero => numero % 2 !== 0); // acá creo la constante para los impares, se llama "fibopares"

    console.log("Números pares de la secuencia de fibonacci hasta el", tope, " : ", fiboPares);
    console.log("Números impares de la secuencia de fibonacci hasta el", tope, " : ", fiboImpares);

    return {
        fib: fiboConst,
        pares: fiboPares,
        impares: fiboImpares
    };

}
calcularFibonacci();


