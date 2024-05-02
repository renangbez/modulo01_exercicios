// Exercício 14

const prompt = require('prompt-sync')();

let decimais = 0;
let numerador = 0;
let denominador = 0;

decimais = parseFloat(prompt("Insira os números para fazer a média aritmética e 0 para finalizar o programa: "));
while (decimais != 0) {
    numerador += decimais;
    denominador += 1;
    decimais = parseFloat(prompt("Insira os números para fazer a média aritmética e 0 para finalizar o programa: "));
}

let mediaAritmetica = numerador / denominador;

console.log("A média aritmética dos números inseridos é: ", mediaAritmetica);