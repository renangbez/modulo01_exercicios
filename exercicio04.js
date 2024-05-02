// Exercício 4

const prompt = require('prompt-sync')();

let nota_1 = parseFloat(prompt("Digite a primeira nota: "));
let nota_2 = parseFloat(prompt("Digite a segunda nota: "));

let mediaSemestral = (nota_1 + nota_2) / 2;

if (mediaSemestral >= 6.0){
    console.log("PARABÉNS! Você foi aprovado.");
}