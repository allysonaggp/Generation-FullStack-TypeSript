// Escreva um programa para criar uma Collection Set do tipo number. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos 
// e adicione-os individualmente na Collection Set. 
// Em seguida, faça o que se pede:

// Mostre na tela todos os elementos da Collection Set. 
// Veja o exemplo abaixo:

//       ENTRADA                       SAÍDA
//-----------------------      ------------------------------
// Set 2-5-1-3-4-9-7-8-10-6         Listar dados do Set 
//                                  1-2-3-4-5-6-7-8-9-10
//
// Set 2-5-10-3-4-2-2-3-10-5        Listar dados do Set
//                                       2-3-4-5-10
//

// * Lembre-se que a Collection Set não aceita valores repetidos.

// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Collection Set

// Cabeçalho
console.log('===============================================================')
console.log('=============     atividade3-Collection-Set     ===============')
console.log('===============================================================\n')

// Importa~]ao da Biblioteca
import read = require("readline-sync")

// Declaração de Constantes e Variaveis
const setNumeros: Set<number> = new Set<number>
let pergunta: number

// Entrada de dados
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)
pergunta = read.questionInt("Digite um numero: ")
setNumeros.add(pergunta)

// Loop com Impressao de dados no Terminal
console.log("/n---------------------------------------------");
for (let numero of setNumeros) {
    console.log(numero);
}
