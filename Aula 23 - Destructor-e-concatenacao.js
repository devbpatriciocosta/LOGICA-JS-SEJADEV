// Aula 23 - Destructor e concatenação! 

// É uma forma de ler dados dentro dos objetos e dentro dos arrays de maneira mais simples
// Sem a necessidade de passar aquelas casas como fizemos anteriormente. 


// O método abaixo é o método comum de pegar os dados de dentro de um objeto:
const pessoa = {
    nome: "Bruno",
    sobrenome: "Patrício",
    idade: 28,
    naturalidade: "Fortaleza"
}

const nome = pessoa.nome
const sobrenome = pessoa.sobrenome
console.log(nome)
console.log(sobrenome)

// Existe uma maneira mais fácil de fazer isso. Sem precisar de fazer "pessoa.sobrenome"
// Portanto, o JS criou o DESTRUCTOR - Que é uma forma de pegar esses valores dessas chaves

// O exemplo abaixo demonstra: 

const { idade, naturalidade } = pessoa // isso aqui é a mesma coisa que "const idade = pessoa.idade"

console.log(idade);
console.log(naturalidade)

// O destructor é representado pela chaves "{   }" bem abertas; 
// Dentro das chaves nós passamos o que queremos saber, como por exemplo: "nome", "idade"...


// Isso também funciona para ARRAYS

const array = [10, 20, 3, 4]
const [a, b] = array;

console.log(a)
console.log(b)



// Serve pra tudo que temos dentro do JS
// Se eu tenho que função que retorna pra gente um objeto eu consigo passar diretamente o destructor para a função; 


// Outra forma de fazer - Duplicar o valor dos objetos; Ou seja, pegar todos os elementes de um obejto já existente pra criar um novo objeto; 
// Para isso, basta eu usar o "..." dentro do objeto;
// Isso faz, de acordo com os exemplos usados aqui, a "pessoaComMaisDados" pegar todos os parâmetros da "pessoa";
// Exemplo abaixo
const pessoaComMaisDados = {
    ...pessoa
}

console.log(pessoaComMaisDados)

// Ok, mas pq isso é ÚTIL???
// Imagine que você vai editar o nome de uma pessoa dentro do banco de dados, fica mais fácil fazer assim do que buscar a pessoa

const pessoaAtualizada = {
    ...pessoa,
    idade: 29,
    sobrenome: "Costa"
}

console.log(pessoaAtualizada)

// A forma acima é uma forma alternativa de usar o destructor; 


// Outro exemplo com array: 

const array2 = [50, 100, 150, 200];
const [c, d] = array2;

const newArray = [0, ...array2, 250]

console.log(newArray)

// Posso inserir dados antes do "..." e no fim também; 


// Facilita muito a manipular dados!