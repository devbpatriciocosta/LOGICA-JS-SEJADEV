// Live de Manipulação de dados em JS; 

// Dúvida! 
// Qual melhor usar: Async-Await ou .then?


// Exemplo da aula passada: 

// O exemplo abaixo é utilizado pra demonstrar a requisição de dados de um API através do uso do .then 
// Com isso, é possível perceber que o nosso código fica muito "encadeado" comprovando assim que a melhor alternativa seria o uso do ASYNC-AWAIT;

// https://jsonplaceholder.typicode.com/users

const URL = 'https://jsonplaceholder.typicode.com/users'

async function main() {
    try {
        fetch(URL)
            .then((response) => {
                response.json().then((data) => {
                    fetch(outraURL)
                        .then(() => {

                        })
                })
            })
    } catch (err) {

    }
}

main()

// Aqui é o exemplo acima mas utilizando o ASYNC - AWAIT;

async function main2() {
    try {
        console.log("Entrou aqui")
        const response = await fetch(URL)
        console.log(response)
        const data = await response.json()
        console.log(data)

    } catch (err) {

    }
}

main2()

// Qual usar? O Axios.get ou o FETCH? 
// O Fetch é mais fácil de entender;
// Mas o Axios é mais fácil de usar; 







// Começando a manipular os dados; 

// Demonstrando o forEach, Fetch, async-await;

const newURL = 'https://jsonplaceholder.typicode.com/users'

async function main3() {

    try {
        const response3 = await fetch(newURL)
        const data3 = await response3.json()

        console.log(data3) // Qual a diferença de utilizar esse console.log aqui e o console.log ali dentro da arrow function? 
            // Bom, a diferença é quase nenhuma, porém, aqui no console.log(data3) ele vai retornar os dados gerais em forma de ARRAY
            // O de dentro da arrow function (console.log(objUsuario)), vai nos mostrar um por um; 
            // Isso pq aqui fora é um array e lá dentro é um objeto;
            // SEMPRE PRESTAR ATENÇÃO  NO QUE É O DADO;

        // Ok, mas se eu quiser pegar só 1 dado específico daqueles usurários?

        let user
        data3.forEach((objUsuario) => {
            console.log(objUsuario)
            if (objUsuario.email === 'Reymon@gmail.com') // Se o e-mail for esse, retorne todos os dados do usuário
                user = objUsuario;
        })
        console.log(user) // Aqui, depois do if e com esse console.log ele vai retornar pra gente somente os dados do usuário que queremos;
            // Ok mas se eu quiser só o telefone? 
            // Eu entro com esse console.log abaixo: 
        console.log(user.phone)

    } catch (err) {

    }
}

main3()





//.find!

// AQUI PODEMOS USAR TAMBÉM O .FIND
// O find serve pra achar um dado de algum usuário dentro de um array; 
// O find RETORNA PRA GENTE UM OBJETO;
// A diferença é que no FOREACH ele só passa por todo mundo, enquanto no find ele RETORNA DADOS, ou seja o dado que estamos procurando;
// Aqui, é importante dizer que eu preciso colocar PARAMETROS true or false de acordo com o dado;
// Para isso eu utilizo o .find no lugar do forEach:

const user = data3.find((objUsuario) => {
    if (objUsuario.email === 'Reymon@gmail.com') {
        // Aqui é possível diminuir o código ainda mais; Verificar linha comentada abaixo;
        // return objUsuario.email === 'Reymon@gmail.com'; Isso vai fazer o JS retornar pra gente true or false,
        return true
    }
})

console.log(user)


// .findIndex - Ele retorna o INDEX desse usuário; Retorna a posição dele;



// .filter - Ele vai filtrar os dados de acordo com o que nós queremos;
// Sempre vai retornar um true ou false, não vai parar no primeiro e vai retornar um ARRAY;




// DESTRUCTOR - Serve para encurtar o código;

// Exemplo: 
// const usuarios = data.filter(({ id, email, phone }) => {
// return id >= 5 && id <= 7 && email === 'Maluco@gmail.com && phone === +5585099934882
//})
// console.log(usuarios)


// E se eu quiser só o telefone de todo mundo?
// MAP - .map - é a função mais utilizada dentro do JS; 
// O map retorna pra gente o que queremos a partir do dado; 
// Ele tem como parametro igual aos outros;
// Assim como o filter e como find ele vai passar por cada 1; 
// Ele retorna o que colocamos lá por isso é útil
// ELE RETORNA PRA GENTE UM OUTRO ARRAY;

const phones = objUsuario.map((usuarios) => {
    return usuarios.phone
})
console.log(phones)

// Se nós quisermos não só o telefone e sim o telefone e o sobrenome podemos criar um objeto: 

const phones2 = objUsuario.map((usuarios) => {
    return {
        email: usuarios.email,
        phone: usuarios.phone
    }
})
console.log(phones)

// Posso colocar com destructor: 

const phones2 = objUsuario.map(({ email, phone }) => {
    return {
        email,
        phone,
    }
})
console.log(phones)


// Exemplo de arrow function e função normal - maneira de escrever:
const batata = [10, 20, 30]
let soma = 0
    // A variável soma acima tem que ficar fora também da arrow function; 
    // Ela não funciona dentro pois as coisas estão dividadas; 

batata.forEach((objBatata) => {
    console.log(objBatata)
    soma = soma + objBatata
    console.log(soma)
})

//Se eu iver aqui no fim e escrever um console.log(objBatata), não vai funcionar pois o objBatata é uma variável da arrow function, então eu preciso colocar pra fora;


// Abaixo temos a forma comum de escrever uma arrow function utilizando o forEach;
batata.forEach(function() {

})

// VOLTANDO PARA O CONST NEWURL