// Aula 22 - Hoisting! 

// IMPORTANTE PARA ENTREVISTA DE EMPREGO! 

// O que é hoisting ? ? ?

// O JS armazena tudo que nós escrevemos dentro da memória do computador. 


function ola() {
    console.log("Olá!")
}

ola()

// Na maioria das linguagens você primeiro descreve a função e chama a função; 

// No JS você pode CHAMAR a função ANTES DE DECLARAR!

helloWorld()

function helloWorld() {
    console.log("Hello CARAI DE ASA")
}

// Ué, mas como assim? 
// Como que o JS vai saber que função chamar e a gente chama a função antes de escrever a função?

// Bom, como dito, o JS salva tudo que escrevemos na memória do PC
// Então quando você roda o código, já está tudo lá na memória. 
// Isso é chamado de HOISTING!