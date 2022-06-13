// Live sobre FUNÇÕES - Fazendo desafios; 

// Explicando o que é o console.log
// É um artifício útil para verificar se o nosso código está funcionando; 

// O console.log("") é uma função;

console.log("Console log só pro teste maroto")
console.log("É assim que se usa o console.log")



// Dentro do JS outra coisa que vamos utilizar bastante são as variáveis;
// As variáveis podem ser que variem ou não;
// É um conjunto que nós vamos distribuir que pode receber ou não valor, receber ou armmazenar informações; 


// Var - Primeira variável do JS; 
var nome = "Essa é a variável var que recebeu o nome de VAR";
console.log(nome)

// Uma variável pode receber valores como STRING, NUMBER OU BOOLEAN;

var number = 100;
console.log(number)

// IMPORTANTE: 
// NÃO UTILIZAR O VAR! 
// PQ NÃO? PQ PODE DEIXAR O CÓDIGO MAIS CONFUSO; UMA VEZ QUE PODE FACILITAR A PERDA DE DADOS E VARIÁVEIS COM O MESMO NOME; 


// Outras maneiras de colocar variáveis: 
// Podemos utilizar o let ou o const! 

let firstName = "Bruno"; //Atribuiu
console.log(firstName); // Imprimiu
firstName = "Mônica" // Atribuiu
console.log(firstName) // Imprimiu

const surname = "Patrício";
console.log(surname);


// DESAFIO I!!!! 

// VERIFICAR SE OS NÚMEROS SÃO PARES OU NÃO;

const numero = 11;
// Condição
if (numero % 2 === 0) { // 2 iguais compara, 3 iguais compara tudo, até o tipo;
    console.log("É par")
        // Negação;
} else {
    console.log("Não é par")
}


// DESAFIO II!!! 
// VERIFICAR SE O NÚMERO É POSITIVO OU NEGATIVO;

const numero2 = 5;

if (numero2 >= 0) {
    console.log("É positivo");
} else {
    console.log("É negativo")
}


// DESAFIO III!!!
// SUPONDO QUE TEMOS UM ARRAY COM VÁRIOS NÚMEROS, DIZER QUAIS SÃO POSITIVOS E QUAIS SÃO NEGATIVOS; 

const array = [10, 20, -5, 30, 0.00002342, -1.453, 100];
let quantidadeDePositivos = 0;
let quantidadeDeNegativos = 0;

for (const x of array) { //Quando coloco o const x eu crio um nova variável; Porém, posso declarar essa variável antes ou dentro do for();
    // Só funciona o const x of array pq é um array; 
    if (x >= 0) {
        quantidadeDePositivos++ // Mesma coisa que escrever quantidadeDePositivos = quantidadeDePositivos + 1;
    }
    if (x < 0) {
        quantidadeDeNegativos++
    }
}
console.log(quantidadeDePositivos);
console.log(quantidadeDeNegativos);

//Para cada número eu preciso fazer uma verificação; 
// Pra isso eu preciso criar uma variável que salve a quantidade de números positivos;



// ENTRANDO EM FUNÇÕES;


// OUTRA FORMA DE FAZER O DESAFIO III;
// Utilizar o for each 

array.forEach((x) => {
    if (x >= 0) {
        quantidadeDePositivos++ // Mesma coisa que escrever quantidadeDePositivos = quantidadeDePositivos + 1;
    }
})
console.log(quantidadeDePositivos) // Aqui no caso ele somou todos (5+5);


// Podemos utilizar o .map/.filter/.reduce; 

//Calcular 20% off no somatório dos produtos;

let array2 = [20, 50, 100, 30]

const desconto = 0.8

array2.forEach((num, pos) => {
    console.log(num);
    console.log(pos);
    array2[pos] = num * desconto;
})
console.log(array2)

//Utilizando o .map - Ele vai fazer isso: array2[pos] = num * desconto; automaticamente;

array2.map((num) => {
    return num * desconto;
})

console.log(array2)

// OK, mas se eu quiser somar tudo que tem dentro do array e depois fazer o desconto? 
// Precisamos usar uma outra função, o for ou o reduce
// Vamos lá! 

// Primeira maneira de fazer: 

let carrinhoDeCompras = [100, 119.90, 199.90, 39.99];
const desconto2 = 0.7;
let soma = 0;


for (const produto of carrinhoDeCompras) {
    soma = soma + produto
}

console.log(soma * desconto2)

// Segunda maneira de fazer: 
//Utilizando o .reduce! 

let soma2 = carrinhoDeCompras.reduce((valor, valorAtual) => {
    return valor + valorAtual
}, 0)

console.log("O valor com desconto será de " + soma2 * desconto2);


// Imaginando que a pessoa só tem uma cédula de 1000 reais pra pagar e eu quero calcular o troco; 

let soma3 = carrinhoDeCompras.reduce((valor, valorAtual) => {
    return valor - valorAtual
}, 1000);

console.log("O troco será de " + soma3);