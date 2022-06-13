// Aula 11 - Switch...Case;


// Problema - Exercício: 

/* Dado um número, construir uma lógica para imprimir o nome do mês do número. 
Exemplo: 

1 - console.log("Janeiro"); 
2 - console.log("Fevereiro")

!== 12 - console.log("Mês inexistente") */

//Primeira maneira de resolver o exercício: 

const numeroDoMes = 0;

if (numeroDoMes === 1) {
    console.log("Janeiro")
} else if (numeroDoMes === 2) {
    console.log("Fevereiro")
}
if (numeroDoMes === 3) {
    console.log("Março")
} else if (numeroDoMes === 4) {
    console.log("Abril")
}
if (numeroDoMes === 5) {
    console.log("Maio")
} else if (numeroDoMes === 6) {
    console.log("Junho")
}
if (numeroDoMes === 7) {
    console.log("Julho")
} else if (numeroDoMes === 8) {
    console.log("Agosto")
}
if (numeroDoMes === 9) {
    console.log("Setembro")
} else if (numeroDoMes === 10) {
    console.log("Outubro")
}
if (numeroDoMes === 11) {
    console.log("Novembro")
} else if (numeroDoMes === 12) {
    console.log("Dezembro")
}
if (numeroDoMes >= 13) {
    console.log("Mês inexistente - Insira o valor de um mês válido")
} else if (numeroDoMes === 0) {
    console.log("Mês inexistente - Insira o valor de um mês válido")
}

//Eu poderia colocar 1 "if" no começo e depois colocar todos os meses como "else if"; 
//Se eu colocar o tipo errado, ou seja, colocar o número do mês como string, vai dar erro pois estamos utilizando o 3 sinais de igual (===)




//Segunda maneira de resolver o exercício - Reduzindo a quantidade de código. 

//Quando temos apenar uma linha de código dentro do "if" não precisamos colocar chaves. 
//Se tivermos por exemplo, 2 console.log, precisamos obrigatoriamente usar chaves.
//Exemplo abaixo:

const numeroDoMes2 = 0;

if (numeroDoMes2 === 1) console.log("Janeiro")
else if (numeroDoMes2 === 2) console.log("Fevereiro")

if (numeroDoMes2 === 3) console.log("Março")
else if (numeroDoMes2 === 4) console.log("Abril")

if (numeroDoMes2 === 5) console.log("Maio")
else if (numeroDoMes2 === 6) console.log("Junho")

if (numeroDoMes2 === 7) console.log("Julho")
else if (numeroDoMes2 === 8) console.log("Agosto")

if (numeroDoMes2 === 9) console.log("Setembro")
else if (numeroDoMes2 === 10) console.log("Outubro")

if (numeroDoMes2 === 11) console.log("Novembro")
else if (numeroDoMes2 === 12) console.log("Dezembro")

if (numeroDoMes2 >= 13) console.log("Mês inexistente - Insira o valor de um mês válido")
else if (numeroDoMes2 === 0) console.log("Mês inexistente - Insira o valor de um mês válido")




// Terceira maneira de resolver o exercício - Utilizando o SWITCH - CASE; 

//Utilizamos o switch - case quando temos vários "if" e "else if"; Ele é utilzado também para reduzir a quantidade de código para que ele fique melhor de entender e não fique tão repetitivo. 

// O switch são combinações da mesma coisa que podemos ter. Precisamos passar dentro de PARENTESES qual é a variável que vai ser comparada; E dentro das chaves nós colocamos as condições de comparação;
// No exemplo abaixo eu estou utilizando a mesma variável do exemplo acima;

//Como ler o switch - case? 
// Se a condição da variável for correspondente ao caso 1, você vai entrar no caso 1 e vai realizar a condição, logo em seguida você vai parar no break;
// É obrigatório ter o BREAK;
// Se esquecermos de usar o break a condição vai ficar sendo realizada ifinitamente entrando em todos os cases até achar o break


switch (numeroDoMes2) {
    case 1:
        console.log("Janeiro")
        break
    case 2:
        console.log("Fevereiro")
        break
    case 3:
        console.log("Março")
        break
    case 4:
        console.log("Abril")
        break
    case 5:
        console.log("Maio")
        break
    case 6:
        console.log("Junho")
        break
    case 7:
        console.log("Julho")
        break
    case 8:
        console.log("Agosto")
        break
    case 9:
        console.log("Setembro")
        break
    case 10:
        console.log("Outubro")
        break
    case 11:
        console.log("Novembro")
        break
    case 12:
        console.log("Dezembro")
        break
    case 13:
        console.log("Esse mês não existe")
        break
    case 0:
        console.log("Esse mês é inválido")
        break
    default:
        console.log("Mês inexistente")
        break
}

//Qual o real benefício de usar o SWITCH - CASE?
// É mais fácil de fazer modificações no código pois não precisamos mexer em casa "if" e "if else" que colocamos ao longo do código;

// Temos mais um caso importante aqu: 

// O USO DO "DEFAULT"
// O default corresponde a "não entrar em nenhum caso" o que fazer?
// O default também tem break; 
// No caso do meu código acima, ele substituíria o meu "case 13" e o meu "case 0";