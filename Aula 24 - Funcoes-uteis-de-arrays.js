// Aula 24 - Funções úteis de arrays


// Funções fundamentais para manipular em arrays

const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]


// 1) forEach - Passa por todos os elementos do array;
// A primeira função visa SUBSTITUIR o "FOR" - ou seja, laços diferentes, laços simples; 
// A função é "forEach"! Essa função só existe para array. Só funciona para array;

array.forEach((elemento, posicao) => {
    //console.log(elemento) // Aqui nós temos exemplos de console.log(mais simples)
    //console.log(posicao)

    // Aqui abaixo vamos ter um console.log melhor para esse tipo de situação, deixando o código mais enxuto e concatenando as strings;
    console.log(`${elemento} - posição ${posicao}`)

    // Aqui em cima nós temos uma nova maneira de juntar "strings"/"elementos" através da concatenação;
    // É importante colocar o `` e dentro dele passar um $ seguido de {} e dentro das chaves colocamos os parâmetros que desejamos concatenar;
    // Essa, nada mais é do que uma nova forma de ITERAR por dentro do array sem a necessidade de usar o "for in" ou o "for of"

})

// Dentro nós passamos uma função que vai pegar os elementos do array e mostrar pra gente;
// Podemos fazer isso através do uso de uma "arrow function" () => {};
// Passaremos uma função que é "parâmetro" de outra;
// O primeiro parâmetro, ou seja, no primeiro parenteses, nós passamos o elemento do array, e o segundo parâmetro é a posição;



// 2) find - Serve para encontrar algo dentro do array; RETORNA O ELEMENTO;
// Exemplo usando a array lá de cima: ENCONTRAR O NÚMERO 10;

const valor = array.find((elemento) => {

    // if (elemento === 10) return true
    // else return false // Esse ELSE aqui é opicional; 
    return elemento === 10
})

console.log(valor)

// Precisamos de uma variável para armazenar o array;
// Aqui é o seguinte: Precisamos passar uma arrowFunction; Dentro do primeiro parênteses nós temos o elemento, que no caso é o que desejamos achar; 
// Em seguida, como nós queremos encontrar um valor específico, nós precisamos fazer um "if" lá dentro, só que direto no return;
// O find vai retornar aqui um booleano;



// 3) findIndex - Ele retorna qual que é a POSIÇÃO do elemento;

// PRIMEIRA MANEIRA DE FAZER: Maneira mais enxuta;
const index = array.findIndex((elemento) => {
    return elemento === 10
})

console.log(index)

// SEGUNDA MANEIRA DE FAZER: Maneira mais longa;
const index2 = array.findIndex((elemento) => {
    if (elemento === 12) return true
})

console.log(index2)

// TERCEIRA MANEIRA DE FAZER: Maneira mais CURTA AINDA;
const index3 = array.findIndex(elemento => elemento === 10)
console.log(index3)
    // ESSA MANEIRA MAIS CURTA SERVE TAMBÉM PARA O "SOME" E PARA O "EVERY";

// TEM QUE TER O RETURN!!!!!!!!
// TEM QUE TER O CONSOLE.LOG!!!!!!!!! EU ESTOU ESQUECENDOOOOOOOO DO CONSOLEEEEEEEE.LOGGGGGGGGGGGGGGG



//4) some - Aqui nós descobrimos se tem pelo menos um elemento que satisfaz a nossa condição estabelecida através do "if";
// Ou seja, retorna true se pelo menos uma das condições forem verdadeiras!

// Exemplo:
const some = array.some((elemento) => {
    if (elemento >= 32) return true
    return false
})

console.log(some)



// 5) every - é muito parecido com o some, porém, aqui ele vai tornar verdade se todos os elementos do array satisfizerem a condição! 
// Vai retornar TRUE se todos respeitaram a condição imposta através do "if"

const every = array.every((elemento) => {
    if (elemento >= 1) return true
    return false
})

console.log(every)