// Aula 28 - Tratamento de dados! 

// Como lidar e tratar os erros! 

// É saber como mostrar pro usuário que algo deu errado e dar uma chance pra ele corrigir ou não esse problema;
// Os erros que nós temos no site são erros que nós conseguimos lidar e corrigir.
// Como por exemplo, se o usuário inseriu uma senha muito curta, ou um e-mail inválido; 
// Esses erros nós conseguimos mostrar para o usuário e pedir para que ele repare esse erro;

// Porém, existem alguns erros que nós não temos acesso, ou seja, não conseguimos corrigir naquele tempo de execução;
// Por exemplo, o usuário ta criando um cadastro mas o banco de dados não está funcionando;
// Nesse caso não é algo que o usuário pode corrigir, mas precisamos mostrar pra ele que tem algo dando errado, que tem algo acontecendo e pedir pra que ele tente novamente mais tarde;

//A aula está no JS-Fiddle;

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data) // EU ANDO ESQUECENDO DE COLOCAR O CONSOLE LOG - EU NÃO POSSO ESQUECER DISSO!!!!!!!!!!!!!!!!
}

getUsers()

// Podemos escrever uma função assíncrona dessa maneira abaixo também: 
/* 
const getUsers = async () => {

}

Essa é a mesma função, só que escrita em "arrowFunction"
*/

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    try {
        const response = await fetch(API_URL)
        if (response.status === 404) throw new Error("Não encontrado")
        const data = await response.json()
        const emails = data.map(({ email }) => ({ email }))
        console.log(emails)
    } catch (error) {
        console.log(error.message)
    }

}

getUsers()

// O que foi feito no JS Fiddle está acima!