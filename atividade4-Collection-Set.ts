// Escreva um programa para criar uma Collection Set do tipo number, 
// inicializada com 10 valores inteiros. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro 
// e caso ele seja encontrado na Collection Set, exiba na tela a mensagem: 
// O Número NN foi encontrado! 
// Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: 
// O número NN não foi encontrado!

// Veja o exemplo abaixo:

//         ENTRADA                                SAÍDA
//-----------------------------      -------------------------------------
// List: 2-5-1-3-4-9-7-8-10-6            O número 7 foi encontrado!
//
// Digite o número que você 
// deseja encontrar: 7
//

// List: 2-5-1-3-4-9-7-8-10-6            O número 40 não foi encontrado!
//
// Digite o número que você 
// deseja encontrar: 40
//

// * Lembre-se que a Collection Set não aceita valores repetidos.

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Laços Condicionais
// Laços de Repetição
// Collection Set

// Cabeçalho
console.log('===============================================================')
console.log('=============     atividade4-Collection-Set     ===============')
console.log('===============================================================\n')

// Importação da Biblioteca
import read = require("readline-sync")

// Declaração de Variaveis
const listaNumeros: Set<number> = new Set<number>
let numero: number, pergunta: number

// Entrada de dados
for (let i = 0; i < 10; i++) {
    numero = read.questionInt("Digite um numero: ")
    listaNumeros.add(numero)
}
pergunta = read.questionInt("\nDigite o numero que deseja encontrar: ")

// Estrutura de decisão e impressao de dados no terminal
if (listaNumeros.has(pergunta) == true) {
    console.log(`--------------------------------------------
O número ${pergunta} foi encontrado!`)
} else {
    console.log(`--------------------------------------------
O número ${pergunta} não foi encontrado!`)
}


