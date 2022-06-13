// Aula 10 - Condicionais. 

// Exercício da aula anterior - Para saber se um número é ímpar ou par.

const numero = 9

if (numero % 2 == 0) {
    console.log("Esse número é par")
}
if (numero % 3 == 0) {
    console.log("Esse número é divisível por 3")
}


// Meu exercício - Para saber se um número é ímpar ou par.

const numero2 = 9;

if (numero2 % 2 == 0) {
    console.log("Esse número é par");
} else if (numero2 % 3 == 0) {
    console.log("Esse número é ímpar");
}

// Exercício de cima, porém utilizando somente o else.

const numero3 = 2;

if (numero % 2 == 0) {
    console.log("Esse número é par");
} else {
    console.log("Esse número é ímpar");

}

// Agora utilizando as condicionais - Os condicionais, sempre retornam pra gente um booleano (true ou false); 

const numero4 = 2;
const condicional = numero % 2 == 0;

if (condicional) {
    console.log("é par")
} else {
    console.log("é ímpar")
}

// Na condicional usamos 2 sinais de = ("=="), aqui, comparamos só se o número é igual, não o tipo, porém, no JS podemos também utilizar 3 sinais de = ("==="), a diferença é que os valores serão iguais em tudo (tipo e valor). 
// Vendo o exemplo abaixo e comparando com o de cima:

const numero5 = 2;
const numero6 = "Realmente, não são iguais";

if (numero5 == numero6) {
    console.log("São iguais")
} else {
    console.log("Não são iguais.")
}

//O exemplo acima eu utilizei um tipo string e um tipo number; 

// Neste exemplo abaixo vou utilizar o "==="; 

const numero7 = 10
const numero8 = "10 - São iguais?"

if (numero7 === numero8) {
    console.log("Eles são iguais tanto de valor quanto de tipo")
} else {
    console.log("Eles não são iguais")
}

// Agora e seu somar os dois? Vamos ver no exemplo abaixo: 

const numero9 = 10;
const numero10 = "11";

if (numero9 === numero10) {
    console.log(numero9 + numero10)
} else {
    console.log("Eles não são iguais e não tem o mesmo tipo, portanto, não posso realizar a soma")
}

//Não precisamos tipar as variáveis, porém, ele tem um tipo implicito. EXIGE CUIDADOS!

// Mas e se nós quisermos forçar o usuário a passar um valor no input que seja igual ao valor que vamos somar? (ISSO É FEITO PARA EVITAR ERROS)

// Simples, passamos o tipo antes. Veja no exemplo abaixo: 

const numero11 = 12;
const numero12 = Number("12");

if (numero11 === numero12) {
    console.log("É igual e vou soma-los")
    console.log(numero11 + numero12)
} else {
    console.log("Não são iguais, logo, não posso soma-los")
}

// O "Number" ali em cima é uma função. Lembrar que o Number precisa ter o N maiúsculo;

// Usar o === ao invés do ==; Porque? Porque o uso dos 3 sinais de = barra muitos erros que podem acabar acontecendo involuntariamente.

// Ah, mas se quisermos colocar como diferente? Colocamos !==;



// Agora temos mais um exemplo de "if" e "else" pois queremos troca-los por algo mais enxuto, mais simples, deixando o código menor e com uma menor quantidade de linhas; 
// Aqui vamos utilizar o OPERADOR CONDICIONAL TERNÁRIO;

const numero14 = 3

if (numero14 % 2 === 0) {
    console.log("É par")
} else {
    console.log("É ímpar")
}

// Aqui embaixo temos a mesma maneira de escrever o código acima: 

const numero13 = 2
numero13 % 2 === 0 ? console.log("É par") : console.log("É ímpar");