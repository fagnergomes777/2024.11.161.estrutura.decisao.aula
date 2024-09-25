// crie um algoritmo que solicite e
// informe se o numero é PAR ou ÍMPAR

const prompt = require('prompt-sync')()

const numero = 7;

const par = numero % 2 == 0;

if (par) {
    console.log(`numero PAR`);
} else {
    console.log(`Numero ÍMPAR`);
}
