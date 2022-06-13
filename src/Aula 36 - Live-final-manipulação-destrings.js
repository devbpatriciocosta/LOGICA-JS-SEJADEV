// Live - Manipulação de strings 


// Desafios da aula passada! 
/*
Você tem nessa url uma lista com 10 usuários;
1) Criar um array com esses usuários modificados de forma a adicionar um @ na frente de cada USERNAME;

2) Criar um array com esses usuários modificados de forma a add um objeto fullAdress com o endereço completo 
  (Street, suíte, city, zipcode)
*/

// API:  https://jsonplaceholder.typicode.com/users

// 1) Primeiro passo - Criar uma variável que armazene o link do API (dentro do API vai ter os dados que nós queremos, o nosso ARRAY);

const API = 'https://jsonplaceholder.typicode.com/users'


// 2) O segundo passo - Criar uma função assíncrona (utilizando Async - Await) para invocar os dados da nossa API através do FETCH;

async function getNewUsername() {
    const response = await fetch(API) // PRECISO PRIMEIRAMENTE BUSCAR OS DADOS DO API;
    const data = await response.json()
    console.log(data) // Esse console.log é pra testar se realmente está pegando os dados da API

    // 3) O terceiro passo - Criar uma variável com o nome dos novos dados que vamos modificar;
    // E dentro dela, usar o .map - obviamente, no data, que foi o que escrevemos na parte de cima, usado para puxar os dados;
    // Depois disso, criar uma arrow function (=>) que tenha como return o que nós queremos adicionar e ONDE nós queremos adicionar;
    // Aqui, não esquecer de passar os parametros dentro da arrow function;
    // No caso do desafio, add um @ no username;
    // Também, na hora de concatenar, não esquecer de que se coloca uma crase, um cifrão e chaves`${}`
    const newUsername = data.map((users) => {
        return `${"@"} ${users.username}` // Existem outras maneiras de escrever isso - Pode ser com aspas simples ou duplas, mas a diferença está na hora de concatenar - return '@ ' +users.username - É importante falar aqui podemos passar o cifrão e as chaves se quisermos passar ali dentro uma variável;
    })

    console.log(newUsername) // Esse console.log tem que vir dentro da função assíncrona;


    // Parte II do desafio 

    // 1) Primeiro passo - uma vez que ali em cima eu já chamei os dados da API, agora nos resta criar uma nova função, chamada fullAdress que é justamente o que nós queremos;
    function fullAdress({ address }) { // Aqui nós usamos o DESTRUCTOR - Aqui ele vai pegar todos os parametros que estão dentro do objeto ADDRESS; 
        // Essa função ela vai retornar pra gente através do return todas as informações que nós queremos concatenar;
        return `${address.street} ${address.suite} ${address.city} ${address.zipcode}`
    }

    let completeAddress = random.map((parametro) => {
        return {...paramento,
            fullAdress: fullAdress(parametro)
        }
    })
    console.log(completeAddress)
}

getNewUsername() // Não esquecer de INVOCAR A FUNÇÃO




/*
const URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
    const response = await fetch (URL) 
    const data = await response.json()
    console.log(data)

    const newUsername = data.map ((users) => {
	  return `${"@"} ${users.username}`
})
    console.log(newUsername)
    }
    
    getUsers()

    */


// 3 FUNÇÕES PRINCIPAIS PARA MANIPULAR STRINGS

// .split - Dividir
// .toUpperCase() - Casas altas - Letras maiúsculas
// .toLowerCase() - Casas baixas - Letras minúsculas; 
// .includes() - Retorna true ou false se você consegue encontrar uma substring dentro da string;

// Exemplo: 

const x = 10

const string1 = "aaa bbb " + x;
const string2 = 'aaa bbb ' + x;
const string3 = `aaa bbb  ${x} `;

// Se eu quiser dividir essa string eu passo um .split() - Dentro do parenteses vai um parametro, que indica qual caracter eu quero dividir;
console.log(string1.split(" "))
    // Se eu quiser transformar em um array e cada elemento deesse array seja um "palavra" da minha string, eu passo " " com um espaço(sem nada dentro);
    // Vai retornar ["aaa", "bbb", "10"]
    // Agora, se eu passo dentro do parenteses somente as aspas "" ele vai gerar um array com cada letrinha e espaço da string sendo um elemento do array;

// E se eu quiser colocar tudo maiúsculo eu uso o .toUpperCase
console.log(string2.toUpperCase())
    // Se eu não passo nada dentro do parenteses, fica a mesma string, só que com todas as letras maiúsculas; 
    //

// A mesma coisa acontece para o .toLowerCase()
console.log(string3.toLowerCase())

// O documento do mozilla mostra todas as funções de uma string; 


// Exemplo de includes;
console.log(string1.includes("AaA"))
    // Se eu quiser que ele deixe somente maiúsculo eu posso passar
console.log(string1.toUpperCase().includes("aAa"))

// EXERCÍCIOS;