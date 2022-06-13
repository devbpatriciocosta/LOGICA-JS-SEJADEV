// Aula 7 - Comparativos 

// Aprender a comparar valores. 

// Lembrando da piada do ovo e do leite. 

//Supondo que temos 10 ovos disponíveis, e SE (if) ovos disponpiveis, levaremos para casa, 6 leites. 



// Primeira maneira = usando NUMBER

const ovosDisponiveis = 10
if (ovosDisponiveis > 0) {
    console.log("Leve 6 ovos para casa, por favor.")
}



// Segunda maneira = Usando BOOLEAN

const ovosDisponiveis2 = true
if (ovosDisponiveis2) {
    console.log("Leve 6 ovos para casa, por favor!")
}

// É IMPORTANTE LEMBRAR QUE: 

// Depois da nossa comparação, ou seja, depois do uso do IF (), temos uma chave. Dentro destas chaves nós vamos executar através do console.log() se a ação do if() for verdadeira; 



// Terceira maneira - Se não for verdadeiro. 

const ovosDisponiveis3 = false;
if (ovosDisponiveis3) {
    console.log("Leve 6 ovos para casa, por favor!")
} else {
    console.log("Não tinham ovos disponíveis, porém, trouxe 1 litro de leite.")
}

// Aqui é importante salientar que nós temos 2 comparativos. O "if" e o "else". O if é o SE e o else é o SE NÃO. Ou seja, o "Else" vai ser sempre o contrário do comportamento esperado pelo "IF";



// Quarta maneira - Somente para entendimento.

const ovosDisponiveis4 = 9;
if (ovosDisponiveis4 >= 10) {
    console.log("Leve apenas 6 ovos para casa. É o suficiente para a receita")
} else {
    console.log("Traga todos os ovos que estiverem disponíveis.")
}

// Aqui nós usamos os comparativos. Esses comparativos são os símbolos matemáticos como: 

// = - Igual;
// >= - Maior ou igual;
// <= - Menor ou igual;
// / - Divisão; 
// % - Resto;


// O que é interessante de se fazer aqui é fazer uma comparação através da divisão. 
// Comparação de números divisíveis. 

// Para isso basta usar o %. Exemplo abaixo: 

const resto = 10 % 5;
console.log(resto);

// Usando o IF

const numero = 4;
if (numero % 2 == 0) {
    console.log("O número é divisível por 2, ou seja, é par.")
} else {
    console.log("Não é divisível por 2, ou seja, é ímpar")
}

// Aqui é importante lembrar da relação entre "="; "==" e "==="; São coisas completamente diferentes. 
// O "==" significa que o número ou os valores atribuidos são iguais. Retorna verdadeiro caso os operandos sejam iguais.
// O "===" Significa que os número ou os valores são iguais e do mesmo tipo. 
// O "!=" siginifca que os operandos não são iguais. 
// O "!==" significa que os operandos não são iguais e nem tem o mesmo tipo.


// Para fazermos uma comparação mais elaborada podemos utilizar o "ELSE IF". 
// Imagine que agora eu quero saber se é par, e se não for par, eu quero saber se ele é divisível por 3. 

const numeroA = 5;
if (numeroA % 2 == 0) {
    console.log("O número é divisível por 2, ou seja, é par.")
} else if (numeroA % 3 === 0) {
    console.log("É divisível por 3")
} else {
    console.log("Não é divisível por nenum dos dois, porém, é ímpar.")
}