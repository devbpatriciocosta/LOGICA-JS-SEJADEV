// Live sobre manipulação de funções! 

// É importante ter em mente aqui que uma função é um pequeno pedaço do código que NECESSITA DE TER UM SCOPO ESPECÍFICO!

// Um código pode até funcionar sem FUNÇÕES;
// Poderíamos deixar o código como o abaixo: 
const x = 10;
const y = 10;
const soma = x + y;
console.log(soma)
    // Porém, um código precisa ser desmenbrado em várias pequenas funções com diferentes características e SCOPOS diferentes;

// Nós quebramos os códigos em funções que realizam ações específicas;
// Quebramos o código em várias funções específicas, como abaixo:

function sum() { // A função propriamente dita é function XXX() {};
    const elemento1 = 100
    const elemento2 = 200
    return elemento1 + elemento2 // Precisa  ter um return do que nós queremos
}

const soma2 = sum() // Pra chamar a função - Precisamos chamar a função
console.log(soma2)

// Uma função pode receber parametros;

// As funções podem ser assíncronas, podem retornar promises;

// A função acima, contem consts, ou seja, valores constantes, que não podem ser alterados;
// Isso é ruim pois o nosso código não está "aberto" para receber outros valores; 
// Ela estipula dois números fixos;

// Imagine que queremos fazer uma soma de 100 + 200; Duplicaríamos o código?
// Não;
// Uma maneira de fazer isso para evitar duplicar o código é:

// Passar um parâmetro dentro da função;
// O parâmetro ele SÓ VAI FUNCIONAR dentro da função;

// Para resolver isso passamos os parâmetros dos elementos 1 e 2 dentro do parênteses da function;
// Porém, é importante notar que os parâmetros precisam estar definidos dentro dos parenteses; 
// Exemplo abaixo: 


function sum2(elemento3 = 1000, elemento4 = 2000) { // Isso se chama passar parâmetros DEFAULT;
    return elemento3 + elemento4
}

const soma3 = sum2()
const soma4 = sum2(2000)
console.log(soma3)
console.log(soma4)

// Com isso o código fica bem mais enxuto;

// O ponto chave nisso tudo acima, é que os PARAMETROS PODEM SER ALTERADOS;
// O exemplo disso vai na linha 50;
// O que acontece com a linha 50 é que o primeiro parametro, que no caso seria o elemento3 = 1000, ele vai receber o valor que eu passei na linha 50;
// Ou seja, ele vai receber o valor de 2000 ao invés de 1000;
// Mas e se eu quiser passar só o valor do elemento4? O que eu faço?
// Bom, eu passo por exemplo, const soma5 = sum2(undefined, 4000)


// Bom, dentro da função eu posso passar qualquer coisa que eu quiser;
// Eu posso por exemplo passar uma função dentro da função;
// Posso passar objeto ou um array; 


// Porém, é necessário que a função SEJA PREPARADA;



// Mas e se eu passar uma chave dentro de uma variável? 
// Eu estarei passando um objeto! Com destructor! 

// Exemplo abaixo: 

// Eu quero uma função que me retorne o nome completo do usuário;

const usuario = {
    nome: "Mônica",
    sobrenome: "Ikeda",
    email: 'monica.ikeda@yahoo.com.br',
    idade: 35
}

function fullName({ nome, sobrenome, email, idade }) {
    return `${nome} ${sobrenome} ${email} ${idade}`
}

const nomeCompleto = fullName(usuario);

console.log(nomeCompleto)



// CALL BACK! Mais uma função JS
// É o nome que se dá para funções dentro de funções;

// Exemplo: 

function calculadora(x, y, callback) {
    const soma = x + y;
    callback(soma)
}

calculadora(1000, 2000, (obj) => { console.log(obj) })

// É uma função que é parâmetro de outra função;
// E vai fazer o que eu quiser que seja feito;