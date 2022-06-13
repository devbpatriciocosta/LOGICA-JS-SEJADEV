// Aula 27 - Funções assíncronas!

// Algumas funções do JS precisam buscar de fora, ou seja, em uma espécie de servidor, as informações para executar as ações que nós mandamos;
// Imagine que agora nós temos uma função que vai fazer uma requisição de dados em outro servidor
// Quando essa função chama esse servidor, não vamos ter uma resposta rápida; 
// Então ele vai ter que aguardar a resposta para continuar a execução do código;
// Esses dados vão voltar pra mim como um array para começar a trabalhar com esses dados buscados; 
// Se isso não acontecer, esse intervalo para conseguir pegar os dados não acontecer, vai quebrar o nosso código inteiro; 
// Ou seja, o nosso código não vai ter dado nenhum para dar continuidade;

// Quando nós temos essa situação de ter que esperar por uma resposta, esperar por dados, nós chamamos de FUNÇÕES ASSÍNCRONAS;
// Por definição, função assíncrona é essa que tem um formato especial de buscar os dados e aguardar o recebimento desses dados para dar seguimento ao código; 


// Existe uma forma específica de declarar essa função assíncrona;
// Nós usamos a palavra "ASYNC"
// Essa palavra nos diz que essa função tem a propriedade assíncrona e que ela precisa esperar, ou seja, não é uma função que vai ocorrer sequencialmente;
// Nós podemos dizer em qual linha nós queraemos que espere e qual linha não precisa esperar;


// Exemplo prático utilizando a API do JSON.PLACEHOLDER;
//  https://jsonplaceholder.typicode.com/users
// Esse API está funcionando como um back-end já pronto;

// Nesse caso da API acima, ela retorna pra gente um array com vários outros objetos dentro dele e até mesmo outra array dentro do objeto;
// Temos 10 usuários; 

// Para aprender a buscar esses dados e trabalhar com essa API nós vamos utilizar o JS.Fiddle; O link está abaixo; 
// https://jsfiddle.net/devbpatriciocosta/4g3orh2u/32/