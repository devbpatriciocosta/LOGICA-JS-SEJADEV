// Aula 29 - Callbacks e promises! 


// O callback é uma convenção de funções de funções que são parametros de outras funções;
// O callback serve pra passar uma função como parâmetro em uma outra função;
// Ou seja, ele permite que a gente passe uma função dentro da função;

/*
function nomeDaFuncao(callback) {
  //Corpo da função
  callback()
}

newArray.map((elemento) => {
  return elemento * 2
})

*/


// Exemplo de callback - Simulação de um upload de uma foto de usuário;
// O setTimeout é uma função nativa do JS; 
// O setTimeout tem um tempo definido por nós;
// Ele vai pausar/esperar o tempo de execução do JS (no caso o 2000) pra executar o que está dentro da nossa função;


function upload() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("02 - Upload CONCLUÍDO")
                resolve()
            }, 2000) //2 segundos pq aqui trabalhamos com milisegundos;
    })
}

async function uploadDeFoto() {
    console.log("01 - Iniciando UPLOAD")
    await upload()
    console.log("03 - Execução FINALIZADA")
}

uploadDeFoto()