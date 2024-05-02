// Exercício 7

const prompt = require('prompt-sync')();

let quantidade = parseInt(prompt("Digite a quantiade de maças: "));
let valorTotal;

if (quantidade < 12){
    valorTotal = quantidade * 0.30;
} else {
    valorTotal = quantidade * 0.25;
}

console.log("Valor total das maças: ", valorTotal);