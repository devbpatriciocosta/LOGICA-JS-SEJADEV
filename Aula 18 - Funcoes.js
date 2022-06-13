// Aula 18 - Funções 


// O exemplo abaixo seria como nós faríamos sem utilizar as funções;

const A = 1
const B = 2
const tipo = "soma"
let R = 0

if (tipo === "soma") {
    R = A + B
} else if (tipo === "Subtração") {
    R = A - B
}

// Porém, fazendo dessa maneira, o código acaba ficando muito bagunçado;
// O uso de funções vem pra facilitar;
// Pois, se nós precisarmos colocar mais informações, mais coisas, mais verificações, fica mais difícil de mexer; 

// Através das funções, nós conseguimos ISOLAR O ESCOPO.
// Uma função é uma pequena parte do nosso algoritmo que pode se repetir no nosso SCRIPT basta chama-la; 

// Ok, mas como fazer uma função em JS?
// Para fazer uma função nós temos uma palavra reservada chamada "function"
// Dentro do parenteses nós passamos os parâmetros, que seria no caso a variável que vai estar dentro da função

function ola() {
    console.log("Olá")
        //Uma função pode ou não ter um retorno, para isso precisamos usar a palavra "return"
        // O return fala pra gente que onde a função termina;
    return "ola"
    console.log("não chega aqui nem a pau")
        // ele pode retornar nada, basta não colocar nada depois do return;
}

// É importante notar que, toda função precisa ser CHAMADA, a maneira de chamar uma função é utilizando o exemplo a baixo:
ola()
    //Ao chamarmos uma função, ela vai executar tudo que está dentro dela. 
    // Se não chamarmos a função, ela não vai rodar nada.


// É parecido com a estrutura do "if" porém, aqui nós temos o nome "soma" ou qualquer outro nome;


//Se pegarmos uma variável e atribuir o valor dessa variável como oi para chamada de função isso é permitido, porém, se o return estiver vazio ele não vai retornar nada;
//No exemplo abaixo, colocamos um return de "oi", então ela vai sim retornar o valor da variável
// Exemplo: 
function oi() {
    return "Oi"
}

const variavel = oi()
console.log(variavel)

//Pra chamar a função É OBRIGATÓRIO COLOCAR OS PARENTESES NA FRENTE!!!

//CRIANDO UMA FUNÇÃO DE SOMA: 
function soma(A, B) {
    return A + B
}

function subtracao(A, B) {
    return A - B
}

function calculadora(tipo) {
    const A = 1
    const B = 2
    if (tipo === "soma") return soma(A, B)
    else if (tipo === "subtracao") return subtracao(A, B)
}

// const resultado = calculadora("subtracao")
// console.log(resultado)




/* 
Faça uma função que verifica se o número é par ou não
*/

function par(num) {
    return num % 2 === 0
}

const ePar = par(6)
console.log(ePar)

/*
Mostrar os números pares de 0 a 100;
*/

for (let i = 0; i < 100; i++) {
    if (par(i)) console.log(i)
}