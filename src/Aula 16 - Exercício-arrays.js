// Aula 16 - Exercícios do ARRAY

/* 

A prefeitura possui uma lista com a idade de cada morador e quer saber
a quantidade dee moradores que são eleitores obrigatórios, facultativos, 
ou não eleitores de acordo com as informações abaixo: 

Obrigatório: Entre 18 e 69 anos;
Facultativo: Entre 16 e 17 anos ou acima de 70 anos; 
Não eleitor: Abaixo de 16 anos ou inadiplente; 

*/

const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99];

let obrigatorio = 0;
let facultativo = 0;
let naoEleitor = 0;

for (let idade of lista) {
    if (idade >= 18 && idade <= 69) obrigatorio++
        else if (idade < 16) naoEleitor++
            else facultativo++
}

console.log("Obrigatório ", obrigatorio);
console.log("Facultativo ", facultativo);
console.log("Não eleitor ", naoEleitor);