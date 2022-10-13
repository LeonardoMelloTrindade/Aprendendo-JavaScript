let numeros = [];
let numerosPar = [];
let numerosImpar = [];
console.log(numeros)

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um valor: "));

    if ((numeros[i] % 2 == 0)) {
        numerosPar.push(numeros[i]);
        console.log("Número adicionado na lista dos pares.");
    }
    else {
        numerosImpar.push(numeros[i]);
        console.log("Número adicionado na lista dos ímpares.");
    }
    numeros.push(numeros[i]);
            
}

console.log(numeros);
console.log("=-=-=-=-");
console.log(numerosPar);
console.log("=-=-=-=-");
console.log(numerosImpar);