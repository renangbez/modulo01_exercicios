// Exercício 8

const prompt = require('prompt-sync')();

let valor_1 = parseInt(prompt("Insira um valor: "));
let valor_2 = parseInt(prompt("Insira um valor: "));

while (valor_2 === valor_1){
    valor_2 = parseInt(prompt("Insira um valor: "));
}

if (valor_1 < valor_2) {
    console.log(valor_1);
    console.log(valor_2);
} else {
    console.log(valor_2);
    console.log(valor_1);
}