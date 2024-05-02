// Exercício 11

const prompt = require('prompt-sync')();

let valor = parseInt(prompt("Insira um valor para saber se é PAR ou ÍMPAR e 0 para finalizar o programa: "));
while (valor > 0){
    if (valor % 2 === 0){
        console.log("O valor é PAR.");
    } else {
        console.log("O valor é ÍMPAR.");
    }
    valor = parseInt(prompt("Insira um valor para saber se é PAR ou ÍMPAR e 0 para finalizar o programa: "));
}