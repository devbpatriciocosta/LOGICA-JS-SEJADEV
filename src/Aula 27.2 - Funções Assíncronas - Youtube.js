// Aula do youtube sobre funções assíncronas; 

// Try...Catch - Utilizado para tratamento de erros; 


// Como funciona? 
// Colocamos o código dentro do try {} catch (err);
// Se acontecer algum problema no nosso código, ele entra no CATCH, que no nosso caso vai ser um console.log(err)

// Exemplo 1 abaixo: 

const getUserInfo = async(id) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/${id}")
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

getUserInfo(1)


//Exemplo 2:


async function getUserInfo2(id2) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/${id}")
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}





// Exemplo 3

const getUserInfo3 = async(id) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/${id}')
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
    }
}


(async() => {
    Promise.all([
        await getUserInfo3(1),
        await getUserInfo3(2),
        await getUserInfo3(3)
    ])
    console.log(userData)
})()