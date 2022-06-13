// Live de PROMISES e Async - Await

// Promises são promessas; 
// Imagina que quando saíamos com as nossas mães e pedíamos para comprar uma bala; 
// Ela sempre dizia, na volta a gente compra; 
// Essa é uma PROMESSA; Uma promisse; 

// No JS a promises também é isso, porém, levando para o lado do código; 
// Quando você promete a leitura de um dado que você ainda não tem naquele momento mas vai ter;


// Estamos acostumados a escrever: 

const x = 10;
if (x === 10) {
    console.log("Entrou aqui")
}

// Esse código é sequencial;
// Dentro desse código o JS tem todas as respostas que ele precisa; 
// Pois não pedimos para o JS pesquisar nada ou buscar informações de fora; 

// Lembra do site do hotel? Pois é, todas as informações estavam salvas no nosso PC; 
// Não foi feita nenhuuma requisição para o JS buscar em algum outro lugar, logo ele tinha todas as informações ali, a pronta entrega;

// A promessa é um objeto no JS
// Pra criar a promessa temos várias formas de fazer
// Abaixo vamos utilizar uma em forma de função; 

function temporizador() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Main2")
            resolve("Seja Dev")
        }, 1000)
    })
}

async function main() {
    // Imagine que nesse código eu queira colocar um temporizador para chamar o "main2";
    // O código vai ter que parar antes de continuar a execução; 
    // Para isso, nós utilizamos o SET TIME OUT (setTimeout())
    console.log("Main1")
    const tempo = temporizador()

    // EXISTE A POSSIBILIDADE DE ESPERAR ELE EXECUTAR TUDO DE UMA VEZ PARA QUE ASSIM NÃO TENHAMOS ESPERAS MUITO LONGAS;
    // Para isso podemos usar: 
    // Promise.all([AQUI PASSAMOS A LISTA DE TODAS AS PROMESSAS]);
    const tempo2 = temporizador()
    const tempo3 = temporizador()
    const resposta = await Promise.all([tempo, tempo2, tempo3])
        // Aqui nós podemos pedir para retornar uma resposta através de uma variável;
    console.log(resposta)
    console.log("Main3")

}

// O  Promise.all vai retornar uma promise com todas as promessas, e assim podemos executar tudo ao mesmo tmepo; 

main();

// Aqui já não é tão sequencial pois precisa ser chamado; 
// Ou seja, toda função precisa ser chamada;

// Em uma promises é OBRIGATÓRIO TER O ASYNC AWAIT, se não tiver, o código vai passar reto sem esperar por nada;



// Try - Catch; UTILIZADO PRA TRATAR ERROS
// É utilizado quando temos coisas dentro do nosso código que podem dar errado
// Geralmente são utilziados para prevenir erros;
// Tenta (try) - se der errado, você pega (catch) e mostra pro usuário o que fazer;
// Quando usamos o reject ali  na promise, nós precisamos utilizar um try - catch


/*
// Exemplo:

function temporizador2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject()
        }, 2000)
    })
}

async function rua2() {
    try {
        console.log("Rua 1")
        const tempo = await temporizador2()
        console.log("Rua 3")
    } catch (err) {
        console.log("ERRO")
    }
}

rua2();

*/

// O ASYNC AWAIT É UMA FUNÇÃO DA PROMISE!!!!




// NOVO EXECÍCIO - EXEMPLO UTILIZANDO API!!

//Link da API: https://jsonplaceholder.typicode.com/
// A API é um endeereço que retorna dados pra gente; 


async function maind() {
    // Pra gente pesquisar um dado como por exemplo um api nós utilizamos a função FETCH
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/')
        // A função FETCH retorna pra gente sempre uma PROMISE;
        // Portanto, o JS precisa de um tempo pra pegar esses dados.
        // Como nós temos uma PROMISE, obviamente precisamos utilizar o ASYNC - AWAIT;
        // Para armazenar os dados da API nós precisamos de uma variável; No caso foi nossa APIRESPONSE
        // Só que até aqui, ele ainda não puxou os dados pq não demos o console.log
    console.log(apiResponse);
    // Pra pegar um dado dentro dessa pesquisa nós criamos uma variável para armazenar esses dados;
    // Lembrar de colocar o AWAIT - Chamar a variável da execução colocando .json;
    const data = await apiResponse.json();
    console.log(data);
    // Aqui ele não vai puxar, é necessário fazer ajustes ou jogar esse código no JS FIDDLE;
}

main()

// Existe uma outra forma de fazer isso funcionar, uma forma mais antiga, essa forma faz uso do THEN; 

function teste() {
    const response2 = fetch('https://jsonplaceholder.typicode.com/albums').then((data) => {

    })
}

// AO USAR O FETCH, ELE BUSCA OS DADOS BRUTOS, ENQUANTO O JSON ELE COLOCA DE FORMA QUE NÓS CONSEGUIMOS LER;

// AQUI AINDA FALTA TRATAR ESSES DADOS