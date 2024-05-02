// Exercício 6

const prompt = require('prompt-sync')();

let A = parseInt(prompt("Insira o comprimento do primeiro lado: "));
let B = parseInt(prompt("Insira o comprimento do segundo lado: "));
let C = parseInt(prompt("Insira o comprimento do terceiro lado: "));

if ((A < B + C) && (B < A + C) && (C < A + B)){
    if ((A === B) || (A === C) || (B === C)){
        console.log("Triângulo Isósceles.");
    } 
    if ((A !== B) && (B !== C)){
        console.log("Triângulo Escaleno.");
    }
    if ((A === B) && (B === C)){
        console.log("Triângulo Equilátero.");
    }
} else {
    console.log("As medidas não formam um triângulo.");
}