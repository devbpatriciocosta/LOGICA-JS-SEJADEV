// Live de correção de exercícios. 

// Esses exercícios não vão rodar aqui, mas sim, no JS Fiddle; 

// Os links vão estar abaixo de cada exercício; 




/*

1) 

Crie uma função para verificar se uma palavra é palíndromo

Palíndromo: Diz-se de ou frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.

Exemplos:

1. Ana
2. ovo
3. arara
4. Reinier
5. aibofobia

*/


// O primeiro passo nesse exercício é criar uma função que vá deixar todas as letras minúsculas ou maiúsculas; 
// Começar utilizando  o .toLowerCase() - A pegadinha inicial é que todas as palavras possuem algumas letras maiúsculas e minúsculas. Isso causa  mpacto e diferencia na hora que ele for ler letra por letra. 
// Em seguida, separar a palavra em letra por letra utilizando a função .split(); 
// Porém aqui temos um problema; Seria mais trabalhoso pois precisaríamos comparar LETRA POR LETRA;
// É importante lembrar que dentro dos parenteses do .split() nós temos que colocar como n´[os queremos que a palavra "quebre";
// O pulo do gato aqui é que se você passa uma string em branco ('') nós separaremos por caracter, exatamente o que queríamos, porém, se nós passarmos em branco, ele vai passar um undefined na palavra. 

// A partir daqui, o que podemos fazer?
// Começar a verificar se o primeiro elemento do array é igual ao útilmo e assim por diante;
// Porém isso é muito trabalhoso;

// Como solucionar de forma mais simples? 
// Inverter os arrays e então, comparar os elementos dos arrays;
// Fazer uma verificação; 

// Ok, mas como eu faço a inversão?
// Simples, eu utilizo a função de array, o .reverse() no array; 
// Essa função vai inverter todas as posições do array, ou seja, o que é último, se torna o primeiro e assim por diante; 

// E agora? o que fazer?
// Comparar o array invertido com o array normal; 
// Só que aí temos outra pegadinha! 

// A pegadinha aqui é que no JS nós não conseguimos comparar dois arrays entre si! Mesmo que eles sejam IGUAIS em tudo;

// Ta, e como resolver?
// Voltar o array pra string e aí sim comparar! 
// Pra isso a gente usa outra função específica do array, o .join();
// Essa função faz exatamente o oposto do .reverse(); Tranforma o array em palavra/string;


const checkPalindromo = (palavra) => {
    const pMinusculo = palavra.toLowerCase();
    // console.log(pMinusculo);

    const pArray = pMinusculo.split('').reverse()
        // console.log(pArray);

    const verificacao = pArray.join('') === pMinusculo

    // Para evitar o do console e ficar visualmente melhor podemos retornar a função de verificação e lá fora passar um console.log() com a palavra que vai ser verificada;
    return verificacao;

    // console.log(pArray.join(''))
    //console.log(verificacao)

    if (verificacao === true) {
        console.log("A palavra é palíndromo")
    } else {
        console.log("Não é palídromo!")
    }

}


console.log(checkPalindromo("Reinier"));
// Aqui podemos passar todas as palavras; 
// Que então vai imprimir do jeito que a questão pede;
console.log(checkPalindromo("Ovo"));
console.log(checkPalindromo("Pokemon"));

// DEIXANDO O EXERCÍCIO MAIS ENXUTO! 

/*
const checkPalindromo = (palavra) => {
  const pMinusculo = palavra.toLowerCase()
  return pMinusculo.split('').reverse().join('') === pMinusculo
}
*/


/*

2) 

Dado uma frase, encontre a quantidade de cada letra e armazene em um objeto.
Obs.: Não se preocupe com acentuação, mas as letras maiúsculas e minúsculas devem ser contadas no mesmo grupo.

Exemplos:

Frase: "eEe"
Saída:
{
	e: 3
}

Frase: "Eu quero ser um desenvolvedor profiçççsssçional"
Saída:
{
   : 5,
  a: 1,
  d: 2,
  e: 6,
  f: 1,
  i: 2,
  l: 2,
  m: 1,
  n: 2,
  o: 5,
  p: 1,
  q: 1,
  r: 4,
  s: 5,
  u: 3,
  v: 2,
  ç: 4
}

*/

// Primeiro passo aqui é criar uma função que vai verificar a quantidade;


function verificarQuantidade(frase) {
    const fraseMinuscula = frase.toLowerCase()
        // console.log(fraseMinuscula)

    const fraseArray = fraseMinuscula.split('')
        // console.log(fraseArray)

    let contador = {}

    fraseArray.forEach((letra) => {
        // console.log(letra)

        contador[letra] ? contador[letra]++ : contador[letra] = 1


        // É possível fazer também utilizando o if ternário: 
        // contador.e ? contador.e++ : contador.e = 1; - If ternário!
    })

    console.log(contador)
}

verificarQuantidade("Eu quero ser um desenvolvedor profiçççsssçional")



// Teste de git hub



//