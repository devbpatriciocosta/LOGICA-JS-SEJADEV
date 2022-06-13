// Aula 19 - Arrow Function

function ola() {
    console.log("Olá!")
}

ola()

// A Arrow Function nada mais é do que forma mais "enxuta" de criar uma função;

// Porém, utilizamos uma constante ("const")

const arrowOla = () => {
    console.log("Arrow Olá!")
}

// Essas duas funções escritas acima são EQUIVALENTES! Fazem exatamente a mesma coias!
// Chamaria do mesmo jeito! 

arrowOla()

// Existem alguns nuances diferentes na "Arrow Function"; 
// Esses nuances não serão detalhados agora; 

// Como deixar o Arrow Function ainda mais enxuto? 

const soma = (A, B) => {
    return A + B
}

console.log(soma(10, 20))

// Como a função só tem uma execução, como no exemplo acima, não precisamos usar CHAVES e nem colocar o RETURN
// Isso está IMPLICITO
// Vide o exemplo acima, embaixo mais enxuto:

const soma2 = (A, B) => A + B
const ePar = num => num % 2 === 0

console.log(soma2(10, 20))
console.log(ePar(5))
console.log(ePar(4))