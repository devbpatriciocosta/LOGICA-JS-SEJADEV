// Aula 13 - Operadores lógicos - Incrementando o nosso "if" e "else";

/* 
Elabora um algoritmo que dada a idade de um nadador, 
classifique-o em uma das seguintes categorias: 

Infantil A = 5 a 7 anos
Ifantil B = 8 a 11 anos

Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos

Adultos = Maiores de 18 anos
*/

const idade = 12
    /*
    if (idade >= 5) {
        if (idade <= 7) {
            console.log("Este nadador pertence a categoria INFANTIL A")
    } else if (idade >= 8 <= 11) {
        console.log("Este nadador pertence a categoria INFANTIL B")
    }

    if (idade >= 12 <= 13) {
        console.log("Este nadador pertence a categoria JUVENIL A")
    } else if (idade >= 14 <= 17) {
        console.log("Este nadador pertence a categoria JUVENIL B")
    }

    if (idade >= 18) {
        console.log("Este nadador pertence a categoria ADULTO")
    } else if (idade <= 4) {
        console.log("Este nadador não pertence a nenhuma categoria pois ele é UNDER AGE")
    }
    */

//Abaixo temos a maneira correta e FORMOS COLOCAR TUDO COM IF E ELSE IF


if (idade >= 5) {
    if (idade <= 7) {
        console.log("Infantil A")
    } else if (idade <= 11) {
        console.log("Infantil B")
    }
}


//Para concatenar esse código deixando ele mais enxuto nós utilizamos os operadores lógicos.
// São eles: 

// OU = || - A condição é verdadeira se UM ou OUTRO for verdadeiro;
// E = && - A condição é verdadeira se TODOS forem verdadeiros;


//A maneira abaixo demonstra o &&: 
if (idade >= 5 && idade <= 7) {
    console.log("Infantil A")
}

//A maneira abaixo demonstra o ||: 
if (idade === 5 || idade === 6 || idade === 7) {
    console.log("Infantil A")
}

//Na maneira acima temos que colocar TUDO EXPLICITAMENTE!!!!


//Resolvendo o exercício propriamente dito: 

if (idade >= 5 && idade <= 7) {
    console.log("Infantil A")
} else if (idade >= 8 && idade <= 11) {
    console.log("Infantil B")
} else if (idade >= 12 && idade <= 13) {
    console.log("JUVENIL A")
} else if (idade >= 14 && idade <= 17) {
    console.log("JUVENIL B")
} else if (idade >= 18) {
    console.log("ADULTOS")
}