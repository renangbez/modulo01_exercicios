// Exercício 16

let numero = 100;
let contador = 0;

while (contador < 50) {
    if ((numero % 2 != 0) && (numero % 3 != 0)){
        console.log(numero);
        contador += 1;
    } 
    numero += 1;
}