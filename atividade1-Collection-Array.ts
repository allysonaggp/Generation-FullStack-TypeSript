// Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores 
// e deverá adicioná-las individualmente no Array. 
// Em seguida, faça o que se pede:
//
// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

// Veja o exemplo abaixo:

// ENTRADA             SAÍDA
//=============================================
//                     Listar todas as cores: 
// Azul                        Azul
// Verde                       Verde
// Amarelo                     Amarelo
// Branco                      ranco
// Laranja                     Laranja
//
//
//                       Ordenar as cores:
//                             Amarelo
//                             Azul
//                             Branco
//                             Laranja
//                             Verde


// Na construção do Algoritmo, utilize os seguintes conteúdos:
// Entrada e Saída de dados
// Laços de Repetição
// Collection Array

// Cabeçalho
console.log('===============================================================')
console.log('=============    atividade1-Collection-Array    ===============')
console.log('===============================================================')

// Importação da biblioteca
import read = require("readline-sync")

// Declaracao das Constantes e Variaveis
const lista: Array<string> = new Array<string>
let cores:string

// Loop com entrada de dados
do {
    cores = read.question("Digite o nime de uma cor: ")
    lista.push(cores)
} while (lista.length < 5)

// Impressão no terminal    
console.log(`Listar todas as cores: ${lista.join(" ")}`)
console.log(`Listar todas as cores: ${lista.sort().join(" ")}`)