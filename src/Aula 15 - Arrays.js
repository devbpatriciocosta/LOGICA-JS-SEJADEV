// Aula 15 - Arrays

// Array é uma forma de criar listas dentro do nosso código; 


//Você coloca "let" como se fosse criar uma variável e em seguida coloca a palavra "array", seguida de colchetes;
// Dentro você passa quais são os elementos do array;
// Os elementos de um array pode ser dos mais diversos tipos - podem ser number, boolean, string...

// Para colocar um elemento dentro de um array podemos colocar: [true, false, 10, 42, "Seja Dev", "Niguiri"]
// Um array carrega uma lista de valores, ou seja, ele é uma variável que carrega uma lista de valores; 
// Nas aulas anteriores nós criavamos uma única variável e colocavamos apenas 1 valor dentro dela, enquanto no array nós podemos colocar vários valores dentro de uma variável;
// Podemos colocar uma variável dentro dela também, como no exemplo abaixo


//Exemplo de criação de array: 

const variavel = 10
let array = [variavel, true, false, true, true, 0, 1, 2, 93, "string aqui", "nois"]

// Mas e se dermos um console.log no array pra ver o que acontece? 

console.log(array);

// Ele vai retornar pra gente tudo que tem dentro do array. 
// No caso desse array colocado como exemplo ele tem 11 elementos. 
// Onde tem a variável, o console.log vai imprimir o valor que foi dado para aquela variável.


// Como ler um valor dentro do array?
// Ora, se dermos um console.log(array) nós conseguimos ler todos os valores, mas e se eu quiser ler só 1?
// Basta eu colocar console.log(array[AQUI DENTRO EU COLOCO A POSIÇÃO QUE EU QUERO])
// É importante lembrar que um array começa no 0 - por exemplo, 0 - 1 - 2 - 3 - 4....

// Exemplo abaixo:
console.log(array[8])
    // É MUITO IMPORTANTE TER CUIDADO COM ISSO!!!

// Quando tentamos encontrar um espaço no array que ainda não está preenchido/não foi declarado, ele vai retornar pra gente um valor "undefined";
// Exemplo abaixo: 

console.log(array[12])

//Além disso, podemos passar um valor NULL de propósto;


//Um array pode ser uma constante ("const"), porém, não conseguimos modifica-lo, somente ler... para modificar nós temos que declara um array como "let"
//Por isso no exemplo acima foi colocado como "let"

// E se eu quiser modificar esse array? 
// Inicialmente nós podemos modificar o array INTEIRO... exemplo abaixo: 

array = [1, 20, 0223, "não sei mais o que colocar aqui", "ta pegando fogo bixo!", true, "da", true]
console.log(array)

// Ou seja, perdemos todos os valores anteriores trocando-os por novos valores. 

// Além disso, nós podemos editar apenas 1 elemento do nosso array... exemplo abaixo: 
array[0] = true
console.log(array)

// Com isso, nós podemos adicionar o que quisermos dentro deste array e até colocar coisas novas. 
// Mas pera? Como eu faço pra colocar coisas novas?

array[8] = 1000
array[9] = "grau"

console.log(array)


// Existem outras formas de editar um array sem ser de forma DIRETA... POR EXEMPLO:
// Vamos supor que queremos add uma nova variável dentro do array mas não sabemos com certeza o número do array;
// Nós podemos simplismente digital o "push"... por exemplo:

array.push("mais de", 5000); // Add um elemento na última posição;
console.log(array)

//Além disso, podemos remover a última opção - remover o último espaço - o último elemento;
// Para isso, utilizamos o "pop" como artifício; 

array.pop() //Remove o último elemento;
console.log(array)

array.push(5000) // Add um elemento na última posição;
console.log(array)


// Para entrar dentro do array e ler automaticamente cada um dos elementos. Para fazer isso eu preciso chamar uma função dentro do array pra enxergar o tamanho desse array
// Para enxergar o tamanho do array nós utilizamos o "length";
// Exemplo abaixo:

let newArray = [10, 20, 30]
console.log(newArray.length)

// Ele vai retornar exatamente o tamanho do nosso array. No caso do exemplo acima, 3; 
// Para passar por dentro do array, de acordo com as últimas aulas nós usamos os laços simples como "while", "do - while" ou o "for";
// Exemplo: 

let i = 0;
while (i < newArray.length) {
    console.log(i)
    console.log(newArray[i])
    i++
}

// Isso serve pra me dizer o que é o que e quem está em cada posição do  meu array; 


// Outra forma de fazer isso é usando o "for"

for (let pos = 0; pos < newArray.length; pos++) {
    console.log(newArray[pos])
}

// Existem também outras formas de iterar por dentro do array; 
// As formas de cima são as mais difíceis; 
// As demais formas abaixo são mais simples do que as que estão acima.

// O primeiro é o "for in";
// O segundo é o "for of";

//No "for in": 

for (let pos in newArray) {
    console.log(pos)
    console.log(newArray[pos])
}

// O que isso nós diz?
// Isso nós diz que eu quero pegar todas as posições do array e salvar nesse pós (que no caso é nossa variável). 
// E o que vai acontecer?
// O pos vai seguir exatamente igual ao for ali de cima, no exemplo logo depois do while. 
// Ou seja, começa com 0 e segue enquanto o array estiver posição disponível;

//No "for of": 

// é a mesma coisa que a de cima:

for (let arr of newArray) {
    console.log(arr)
}

// Ele facilita bastante, pois diferente do in, ele vai pegar direto o valor de dentro array, então aqui não vai ser a posição;




// Exercício: 
/*
Dado um array com X números, encontre a média desses números;
*/

const arrayDoExercicio = [10, 20, 30, 40, 50, 100, 100];
let sum = 0

for (let numb of arrayDoExercicio) {
    sum = sum + numb
}
const media = sum / arrayDoExercicio.length
console.log(media)