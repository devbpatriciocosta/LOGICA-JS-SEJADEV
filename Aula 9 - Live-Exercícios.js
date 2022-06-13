// Aula 9 - Live de exercícios - Desafios

// Encontrar a partir do "if" e "else" executar se é verdadeiro ou falso. 

// Exercício 1 - Verificar se o número é divisível por 13, ou seja, se dividir o número por 13, dá resto 0; 

const numero = 30;

if (numero % 13 == 0) {
    console.log("É divisível por 13")
} else {
    console.log("Não é divisível por 13")
}

// Exercício 2 - Considerando que todos os meses possuem 30 dias, dado uma quantidade de dias, dizer qual mês e dia do mês esse dia vai cair. 
//OBS: Usar o Math.floor() para arredondar os números.

const dias = 30
const quantidadeMeses = Math.floor(dias / 30)
const quantidadaDiasTotal = quantidadeMeses * 30
const diasPassados = dias - quantidadaDiasTotal


console.log(quantidadeMeses);
console.log(quantidadaDiasTotal);
console.log(diasPassados);

if (quantidadeMeses == 1) {
    console.log("Estamos em Janeiro no dia ")
} else if (diasPassados == 0) {
    console.log("1")
}