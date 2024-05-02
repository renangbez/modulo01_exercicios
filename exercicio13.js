// Exercício 13

const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
    N = parseInt(prompt("De qual número você deseja saber a tabuada? "));
    for (let j = 1; j <= 10; j++){
        console.log(`${j} x ${N} = ${j * N}`);
    }
}