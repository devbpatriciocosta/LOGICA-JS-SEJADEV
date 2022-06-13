// Aula 20 - Exercícios sobre funções

/* 
Crie um algoritmo para calcular o fatoral de um número (n!)

Obs: O fatorial de um número é calculado pela multiplicação desse número
por todos os seus antecessores até chegar ao número 1;

Exemplos: 
2! = 2 * 1;
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
*/

function fatorial(n) {
    let i = n
    let fatorial = 1

    while (i >= 2) {
        fatorial = fatorial * i
        i--
    }

    return fatorial
}

const number = 3
const resposta = fatorial(number)
console.log(resposta)