// Aula 12 - Aula de prática com exercícios de lógica de programação

// Exercício 1: 

/*

João, um pescador, gostaria de controlar o seu rendimento diário no trabalho;

Toda vez que ele traz um peso de peixe maior do que o estabelecido pelo regulamento de pesca do estado de SP (50 quilos), ele deve pagar uma multa de R$ 4,00 
por quilo excedente. 

João precisa que você faça um SCRIPT pra ele que leia o peso de peixes que ele trouxe 
e verifica se há ou não excesso. 

Se houver excesso, gravar na variável "Excesso" e na veriável "Multa" o valor da multa que João deve pagar. 

*/

const quantidadeDePeixes = 70;
const quantidadeMaxDePeixes = 50;
const quantidadeDePeixesExcedente = quantidadeDePeixes - quantidadeMaxDePeixes;
const multaPorExcedente = 4;
const valorDaMulta = quantidadeDePeixesExcedente * multaPorExcedente;

if (quantidadeDePeixes <= quantidadeMaxDePeixes) {
    console.log("Não teve excedente na quantidade de peixe pescado hoje, logo, não haverá multas")
} else if (quantidadeDePeixes >= quantidadeDePeixes) {
    console.log("A quantidade de peixe foi superior a permitida por lei")
}

if (quantidadeDePeixes >= quantidadeMaxDePeixes) {
    console.log("A quantidade excedente foi de " + (quantidadeDePeixes - quantidadeMaxDePeixes) + " quilos de peixe")
}

if (multaPorExcedente * quantidadeDePeixesExcedente) {
    console.log("O valor da multa é de " + valorDaMulta + " reais")
}



//Maneira que o José fez: 

const limite = 50; // limite em kg definido
const oValorDaMulta = 4; // valor da multa em R$ definido
const pesoDePeixes = 60; // peso de peixes de João

let excesso = 0 //Excesso de peso
let multa = 0 // Valor da multa

if (pesoDePeixes > limite) {
    excesso = pesoDePeixes - limite
} else {
    excesso = 0
}

multa = excesso * oValorDaMulta
console.log("Excesso: ", excesso)
console.log("Multa: R$", multa)

// Enxugando o código: 

const limite2 = 50; // limite em kg definido
const oValorDaMulta2 = 4; // valor da multa em R$ definido
const pesoDePeixes2 = 60; // peso de peixes de João

let excesso2 = pesoDePeixes2 > limite2 ? pesoDePeixes2 - limite2 : 0 //Excesso de peso
let multa2 = 0 // Valor da multa


multa2 = excesso2 * oValorDaMulta
console.log("Excesso: ", excesso2)
console.log("Multa: R$", multa2)