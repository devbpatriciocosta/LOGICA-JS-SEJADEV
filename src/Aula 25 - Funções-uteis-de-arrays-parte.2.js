// Aula 25 - Funções úteis de arrays - PARTE 2;

// Criando um novo array; 


const newArray = [1, 2, 3, 4, 5]



// 6) SPLICE - Forma de quebrar o array em um array MENOR sem utilizar vírgula e o destructor;
// O splice é uma função; Não precisamos passar nada dentro dele; 
// Passamos primeiro a posição em que queremos começar o corte
// Divido por vírgula, o que vem a pós, é a quantidade de elementos queremos cortar, obviamente, vai definir o tamanho que queremos;
// O primeiro parâmetro é o início e o segundo é a quantidade;

console.log(newArray.splice(2, 2));



// AS MAIS IMPORTANTES VEM ABAIXO: 



// 7) Map - É uma forma de modificar todas as casas que estão dentro do array; 
// Ou seja, supondo que queremos trocar aqueles números que estão lá dentro do array por letras, podemos usar o "map";
// ALTERA OS VALORES DENTRO DO ARRAY SEGUINDO UMA REGRA!!!
// Precisamos de uma arrowFunction;
// Na arrowFunction, a primeira posição dentro do parenteses é o elemento;


console.log(newArray.map((elemento) => {
    return 0
}))

// No exemplo acima, no return nós colocamos os elementos que queremos colocar no lugar; Ou seja, o novo elemento;
// Ficando assim, 0 em todos os elementos;

// Então, o que fazemos aqui é colocar uma regra, exemplo de regra abaixo:

console.log(newArray.map((elemento) => {
    return elemento * 2;
}))

//Obs: Aqui ele está retornando menos elementos pois o console.log do SPLICE não está ativado;



// 8) Filter - Ele vai filtrar os elementos dentro do array;
// Diferente do find que vai apenas encontrar os elementos dentro do array, o filter vai filtrar os elementos de acordo com uma regra;
// Por exemplo: VAMOS FILTRAR TODO MUNDO QUE É PAR DENTRO DO ARRAY; 

// Aqui decidi criar uma nova array; 

// É necessário o uso do arrowFunction, como sempre; 

const newArray2 = [1, 3, 4, 6, 10, 21, 24]

console.log(newArray2.filter((elemento) => {
    return elemento % 2 === 0
}))

// Se quiser usar como exemplo filtrar TODO MUNDO QUE É PAR: 

console.log(newArray2.filter((elemento) => {
    return elemento % 2 !== 0
}))




// Última função - É o último e mais completo; Usamos menos; 

// 9) Reduce - Reduz o array pra alguma outra coisa; Algum outro elemento;
// Um exemplo é fazer a soma de forma mais elegante utilizando o reduce


console.log(newArray2.reduce((acumulado, elemento) => {
    return acumulado - elemento
}, 100))