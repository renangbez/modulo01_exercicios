// Exercícios 1

const prompt = require('prompt-sync')();

let celsius = prompt("Digite a temperatura em Celsius que desejas transformar em Fahrenheit: ");
let fahrenheit = (celsius * 9/5) + 32;

console.log("Temperatura em Fahrenheit: ", fahrenheit);