// Aula 21 - Funções RECURSIVAS

// A função recursiva executa o que está dentro da função (ou faz o cálculo) de uma maneira diferente
// Uma função recursiva chama a função novamente/repetidamente até você ter uma resposta;
// Não é muito utilizado mas pode cair em PROCESSO SELETIVO;

// Exemplo prático de função recursiva;

/* 
Crie um algoritmo para calcular o fatoral de um número (n!)

Obs: O fatorial de um número é calculado pela multiplicação desse número
por todos os seus antecessores até chegar ao número 1;

Exemplos: 
2! = 2 * 1;
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
*/

// O importante de uma função recursiva é você sempre ter UM CRITÉRIO DE PARADA;

function fatorial(n) {
    if (n <= 2) return n // Este é o meu critério de parada; 
    return fatorial(n - 1) * n
}

/*
n = 5 
fatorial de (5) = fatorial (5 - 1) * 5

n = 4
fatorial de (4) = fatorial (4 - 1) * 4

n = 3
fatorial de (3) = fatorial (3 - 1) * 3

n= 2
fatorial de (2) = 2 
*/

const numero = 2
const resposta = fatorial(numero)
console.log(resposta)