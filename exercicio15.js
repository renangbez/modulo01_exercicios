// Exercício 15

const prompt = require('prompt-sync')();

let decimal = 0;
let peso = 0;
let decimalXpeso = 0;
let nume = 0;
let deno = 0;
let mediaPonderada = 0;

decimal = parseFloat(prompt("Insira um número decimal ou 0 para finalizar o programa: "));

while (decimal != 0) {
    peso = parseInt(prompt("Insira o peso: "));
    decimalXpeso = decimal * peso;
    nume += decimalXpeso;
    deno += peso;

    decimal = parseFloat(prompt("Insira um número decimal ou 0 para finalizar o programa: "));
}

mediaPonderada = nume / deno;

console.log("A média ponderada é:", mediaPonderada);