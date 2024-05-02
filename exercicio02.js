// Exercício 2

const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt("Digite o número de eleitores: "));
let votos_brancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
let votos_nulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let votos_validos = parseInt(prompt("Digite a quantidade de votos válidos: "));

let p_brancos = (votos_brancos * 100) / eleitores;
let p_nulos = (votos_nulos * 100) / eleitores;
let p_validos = (votos_validos * 100) / eleitores;

console.log("Percentual de votos brancos: ", p_brancos);
console.log("Percentual de votos nulos: ", p_nulos);
console.log("Percentual de votos válidos: ", p_validos);