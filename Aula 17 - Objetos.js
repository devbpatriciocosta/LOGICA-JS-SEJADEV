// Aula 17 - Objetos

// É um tipo de variável/ Um conjunto de variáveis - Um tipo novo do que vimos até agora, diferente;
// Objetos e arrays são os artefatos que mais utilizamos nos projetos;


// Primeiramente, quando queriamos declarar uma variável faziamos assim: 
const varr = 10

// Quando queríamos declarar um array faziamos assim: 
const arr = [10, 20]

// *As chaves e os colchetes significam objetos diferentes no JS*

//O parentêses usamos quando vamos fazer uma expressão matemática
const math = (10 + 10) / 20

//Agora, para declararmos objetos fazemos assim - Usando chaves 
const pessoa = {
    nome: "Bruno",
    idade: 28,
    casado: true,
    notas: [5, 8, 10],

}

// Quando delcaramos um OBJETOS, nós sempre temos que pensar em "CHAVE - VALOR"
// Enquanto no ARRAY nós pensamos em posições, nos OBJETOS nós pensamos em CHAVES;
// Como feito no exemplo acima, nós temos dentro das chaves diferentes variáveis;
// Portanto, lemos assim: 
// Dento do objeto pessoa, nós temos a variável nome, idade... e cada variável tem o seu valor. 
// IMPORTANTE FICAR ATENTO POIS É NECESSÁRIO COLOCAR O ":"
// Para colocar outras variáveis, basta colocar uma virgula, assim como no ARRAY;
// É importante verificar aqui que cada variável pode ter um tipo diferente, ou seja, pode ser string, pode ser number, pode ser booleano...
// É legal verificar também que podemos colocar um ARRAY dentro do objeto;

// Em outras palavras, nós temos uma CONSTANTE ÚNICA (objeto), que guarda todas as informações (VARIÁVEIS) que desejamos sobre aquele OBJETO.

// Mas e aí? Como que eu leio? Como que eu imprimo isso?

// Bom, aqui nós colocamos assim: 

console.log(pessoa["nome"]);

// Ou seja, enquanto no array nós colocavamos a posição que queríamos do array (console.log(array[2])), aqui nós colocamos o console.log seguido entre parenteses do nome do objeto e entre colchetes, a informação que nós queremos.

// Como que eu faria para pegar a idade então?

console.log(pessoa["idade"]);

// Como o notas descrito no exemplo acima é um array nós podemos pegar dados diferentes seguindo o exemplo abaixo: 
console.log(pessoa["notas"][2])
    // Assim, ele vai abrir o arrray, vai lá pegar a informação que está na posição 2 do nosso array e vai trazer pra gente;
    //

// O legal aqui no objetos é que nós podemos ter objetos dentro de objetos, como no exemplo abaixo: 

const Monica = {
    nome: "Mônica",
    sobrenome: "Ikeda",
    idade: 35,
    casada: true,
    gatos: true,
    cachorros: false,
    endereco: {
        rua: "Guilherme Bach",
        numero: 171,
        apto: 201
    }
}

// Temos um objeto dentro do objeto, mas como que eu pegaria o endereço???
// Simples: 

console.log(Monica["endereco"])
    // No exemplo acima, ele vai me dar o endereço completo, mas e se eu quiser só a rua? 
    // Simples: 
console.log(Monica["endereco"]["rua"])

// E se eu quiser o nome, sobrenome e a rua? 
console.log(Monica["nome"])
console.log(Monica["sobrenome"])

// Existem outras  maneiras de acessar essas informações;
console.log(Monica.idade)
    // Ou seja, basta colocar o nome do objeto e a chave que eu quero acessar; Sem a necessidade do uso de colchetes;
    //

// Porém, quando eu vou pegar um array e eu quero uma posição específica, aí sim eu preciso colocar os colchetes;
console.log(pessoa.notas)
console.log(pessoa.notas[1])

// Mas, quando é um obejto dentro do obejto, não existe a necessidade, por exemplo: 
console.log(Monica.endereco.rua)
    // Aqui ele vai me dar rua que é um objeto dentro do objeto



// Temos um detalhe importante: 
// - Se tivermos um array e quisermos passar um objeto pra dentro deles, nós podemos
// Basta utilizar o exemplo abaixo: 

const array = [pessoa, Monica]
console.log(array)