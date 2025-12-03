// Escreva um programa para criar uma Collection Array do tipo number, 
// inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário,
// que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, 
// exiba na tela a posição deste número na Collection. 
// Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: 
// O número NN não foi encontrado!

// Veja o exemplo abaixo:

//            ENTRADA                            SAÍDA
//-----------------------------     -----------------------------------------
// Index 0 1 2 3 4 5 6 7 8  9       O número 7 está localizado na posição: 6
// Array 2 5 1 3 4 9 7 8 10 6
//
// Digite o número que você 
// deseja encontrar: 7
//
//                                  

// Index 0 1 2 3 4 5 6 7 8  9       O número 40 não foi encontrado!
// Array 2 5 1 3 4 9 7 8 10 6
//
// Digite o número que você 
// deseja encontrar: 40
//


//  * Os números em vermelho representam o índice (posição) na Collection Array.

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Laços Condicionais
// Laços de Repetição
// Collection Array	

// Cabeçalho
console.log('===============================================================')
console.log('=============    atividade2-Collection-Array    ===============')
console.log('===============================================================')

//importação de Biblioteca
import read = require("readline-sync")

// Declaração de Variaveis
const listaNumeros: Array<number> = new Array<number>
let numero: number, numeroPesquisado: number

// Laço de repetição com entrada de dados
for (let i = 0; i < 10; i++) {
    numero = read.questionInt("Digite um número: ")
    listaNumeros.push(numero)
}

// Entrada de dados com estrutura de decisão e impressão de resposta em terminal
numeroPesquisado = read.questionInt("\nDigite o número que desenja encontrar: ")
if (numeroPesquisado in listaNumeros) {
    console.log(`-------------------------------------------------
O número ${numeroPesquisado} está localizado na posição: ${listaNumeros.indexOf(numeroPesquisado)}`)
} else {
    console.log(`--------------------------------------------
O número ${numeroPesquisado} não foi encontrado!`)
}