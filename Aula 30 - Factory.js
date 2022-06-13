// Aula 30 - Factory! 

// Padrões de projetos que vão auxiliar a melhorar a qualidade do meu código; 
// Como lidar com dados diferentes mas que tem o mesmo tipo;

function Pessoa(nome, sobrenome) {
    let pessoa = {
        nome,
        sobrenome,
    }

    pessoa.nomeCompleto = `${nome} ${sobrenome}`
    return pessoa
}

const pessoaA = Pessoa("José", "Fortes")
const pessoaB = Pessoa("Bruno", "Debugger")

// Até aqui, criamos duas pessoas com dados diferentes mas que fazem parte da mesma estrutura; 

console.log(pessoaA, pessoaB)
console.log(pessoaA.nomeCompleto)

// Com isso, conseguimos selecionar tipos iguais de dados e ter mais clareza sobre o que vamos encontrar lá dentro;
// Isso facilita demais a criar objetos dentro do JS;