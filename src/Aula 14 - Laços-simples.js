//Aula 14 - Laços simples e repetições

//Os laços mantêm repitidamente a mesma coisa que eu escrever dentro da chave enquanto a condição for verdadeira
// Mantêm a condição rodando infinitamente 
// É necessário ter uma condição de saída; 
// Ver exemplos lá embaixo

/*

Cenário: 

Mostrar os números que estão dedntro de 100 a 200 que são pares

*/

// Utilizando o "WHILE" 
// Tem estrutura parecida com o "if"


/*
while (true) {
    console.log("Aqui dentro do while")
}

console.log("Aqui fora do while")
*/
//A condição acima vai acontecer tanta vezes que a própria IDE não deixa a condição que está fora acontecer. 
// As cores estão diferentes pois está comentado


while (false) {
    console.log("Aqui dentro do while")
}

console.log("Aqui fora do while")



// Fazendo um caso real: 

// Mostrar os número de 0 a 10; 

let num = 0

while (num <= 10) {
    console.log(num)
    num = num + 1
}

console.log("Aqui fora do while")

//Outra forma de somar um número: 
// É só utilizar o ++;
// Exemplo abaixo: 

let num2 = 0

while (num2 <= 10) {
    console.log(num2)
    num2++
}

console.log("Aqui fora do while")

//Por exemplo: num = num + 1 é a mesma coias de num++

// O while significa ENQUANTO, então se lê assim: 
// "Enquanto o número for menor do que 10, faça essa condição"



// Outra maneira de temos é o DO - O do é o faça. 

num3 = 0

do {
    console.log(num3)
    num3++
} while (num3 <= 10)

// O que aconteceu aqui é invertemos a ordem;
// O "do" é um "while" invertido


//Fazendo o exercício: 

/*

Cenário: 

Mostrar os números que estão dedntro de 0 a 10 que são pares



let num4 = 0

while (num4 <= 10)
    if (num4 % 2 === 0) {
        console.log(num4)
        num4++
    }

    */


// O último laço simples dessa aula é o "for";
//Ele é um pouco mais complexo; 
//Primeiro passa uma variável pra ele. Podemos passar essa variável dentro dele ou fora dele;
//Depois passamos uma condição de saída;
//Por fim, editamos a variável para que ela rode a quantidade de vezes que desejamos.

//Exemplo 1: 

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//Exemplo 2: Passando a variável fora do for; 

/*

let x = 0;

for (x <= 10; x = x + 2) {
    console.log(x)
}

*/

// O exemplo 2 pode ser a resolução do exercício;