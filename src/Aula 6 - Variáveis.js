//Aula 6 - Variáveis 

//Implementação das variáveis no nosso código. 

//Como armazenar algumas varáveis dentro do nosso código - Armazenar variável dentro de um código é basicamente colocar uma informação nele. Uma informação que vamos precisar no momento ou no futuro. 
//Armazenar um pedaço de informação; 

//Serve para tudo, a coisa mais simples é uma soma. 

//Existem variáveis em tudo, e portanto, vamos utilizar variáveis para tudo dentro do JS; 

//No JS temos algumas diferenças de algumas outras tecnologias. Aqui não precisamos falar qual o tipo da nossa variável. Podemos criar uma variável sem especificar o que é aquela variável. 

//var - é uma palavra reservada utilizada para dizer que é uma variável

//Exemplo: 

var primeiraVariavel;
var segundaVariavel;

//Não podemos usar espaço na variável. Devemos também usar um padrão de escrita, como por exemplo, o CAMEL CASE (primeira letra maiúscula); Isso é utilizado para padronizar as variáveis do nosso código. 
//Sempre colocar o que a variável é ou o que ela faz para não causar confusão. Sempre identificar da maneira mais clara possível!!! 

// O JS tem uma tipagem FRACA! Não precisamos falar o que é a variável. 

//Exemplo: 

var x = 10;

// var x é do tipo "NUMBER"

//Se quisermos passar uma palavra precisamos colocar ela entre aspas como por exemplo: 

var y = "Esse aqui é um exemplo de string"

//var y é do tipo "STRING"

//Se dermos um console.log(y) / ou seja, um console.log na minha variável, nós vamos ter no nosso console O VALOR que foi ATRIBUIDO para a minha VARIÁVEL, como por exemplo: 


console.log(x);
console.log(y);
//Olhar console

//Ao invés de colocar a nossa frase dentro do console.log("Esse aqui é um exemplo de string"), nós podemos simplesmente passar a nossa variável. 
//Serve justamente para isso, substituir uma frase ou um valor dentro do nosso código. 

//var é uma forma antiga de colocar uma variável. Se escrevermos JS puro, precisamos usar o VAR pois alguns navegadores só entendem/interpretam o VAR; 

//O var é problemático. Portanto podemos usar o "Let" ou o "Const"

//Porém, algumas bibliotecas trocam o VAR por "LET" ou "CONST"; Por exemplo: 

var umaVariavel = "var";
const constante = 10;
let novaVariavel = "É melhor usar o let do que o var"

//São praticamente a mesma coisa: 
//var
//const
//let

//O "var" possui SCOPO GLOBAL, enquanto o "LET" possui SCOPO LOCAL; 

// Já o "const" é quando temos uma variável que não vai mudar ao longo do nosso código; Enqunanto o "let", pode mudar;
//Por exemplo - Se dermos um console.log(novaVariavel) vamos ter a nossa string original "É melhor usar o let do que o var", porém, se colocarmos simplesmente novaVariavel = "Esse daqui é um exemplo de como posso mudar o let no decorrer do código", podemos verificar a diferença entre o "let" e o "const";

console.log(novaVariavel);
novaVariavel = "Esse daqui é um exemplo de como posso mudar o let no decorrer do código";
console.log(novaVariavel);

//Se tivermos uma constante, nós não pudemos fazer isso. Vai der um Uncaught Type Error acusando que não posso trocar uma variável constante dentro do meu código; 



//Um pouco mais SOBRE OS TIPOS: 

// 1) Palavra - String 

let palavra = "String";

// 2) Número - Number

let number = "Number";

// 3) Decimal = Nuumber

let decimal = 10.10;

// 4) Boolean = True or False 

let boolean = true;
let newBoolean = false;


// 5) Undefined = Indefinido

let undef = undefined;

// 6) Null = Nulo

let nullExample = null;




//Exemplos para teste de entedimento: 


let newNumber = 10;
let NumberOficial = 90;

const sum = newNumber + NumberOficial;

// console.log(newNumber + NumberOficial);

console.log(sum);