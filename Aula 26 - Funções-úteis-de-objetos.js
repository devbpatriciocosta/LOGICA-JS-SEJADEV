// Aula 26 - Funções úteis de objetos! 

// Funções fundamentais para manipular OBJETOS


const person = {
    name: "Bruno",
    lastName: "Costa",
    chave: "valor"
}

// São 3 funções principais: 

// 1) .keys - Object.keys()
// Essa função vai retornar pra gente um array com todos as chaves que contém nesse objeto.
// Cria um array com todas as chaves do objeto;

console.log(Object.keys(person))

// Dentro do console.log passamos a função, e dedntro do parenteses nós chamamos o nome do objeto; No caso do exemplo acima é "person";


// 2) .values - Object.values()
// Essa função é exatamente o oposto;
// Ao invés de criar um array com todas as chaves, ele vai criar e retornar pra gente um array com todos os valores;

console.log(Object.values(person))


// 3) .entries - Object.entries()
//Já o entries, ele cria um array contendo um array de objetos e valores; 

console.log(Object.entries(person))

// Ou seja, o primeiro array tem a chave e o objeto - que no caso desse exemplo são name e Bruno;
// O segundo array tem lastName e Costa e o terceiro array tem chave e valor; 
// É um array de arrays; 
// Para entender melhor: 
// [[name, bruno], [lastname, costa], [chave, valor]];



// Mas como será útil pra mim???

// Exemplo: 
// Imagine que meu usurário está comprando livros na Livraria Curitiba.

const livros = {
    "Livro A": 19.90,
    "Livro B": 97.00,
    "Livro C": 20.00
}

// Imagine que queremos somar os valores dos 3 livros que estão na cesta de compras do meu usuário; 
// Poderíamos utilizar o Object.values;

const values = Object.values(livros).reduce((acumulado, elemento) => {
    return acumulado + elemento
}, 0)
console.log(values)


// Outra maneira de realizar o cálculo acima: 

const value = Object.values(livros);
const sum = value.reduce((acumulado, elemento) => {
    return acumulado + elemento
}, 0)

console.log(sum);

// Outra maneira de colocar ainda mais enxuto: 

const val = Object.values(livros).reduce((acumulado, elemento) => acumulado + elemento, 0)
console.log(values)