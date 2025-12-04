// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, 
// para organizar uma fila por ordem de chegada dos Clientes de um Banco. 
// O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
//
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
//
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia 
// ao tentar retirar (chamar) um cliente da fila.

// * Para resolver este exercício, não se esqueça de criar a Classe Queue
// Veja os exemplos abaixo:

//       ENTRADA                        SAÍDA
// ----------------------    -------------------------
// Digite uma opção: 3         A Fila está vazia!

//----------------------------------------------------
// Digite uma opção: 1         Fila: João
// Digite o nome: João         Cliente Adicionado!

//----------------------------------------------------
// Digite uma opção: 1         Fila: João Maria
// Digite o nome: Maria        Cliente Adicionado!

//----------------------------------------------------
// Digite uma opção: 1         Fila:João Maria Ana
// Digite o nome: Ana          Cliente Adicionado!

//----------------------------------------------------
// Digite uma opção: 2         Lista de Clientes na Fila: João Maria Ana

//----------------------------------------------------
// Digite uma opção: 3         Fila: Maria Ana
//                             O Cliente foi Chamado!

//----------------------------------------------------
// Digite uma opção: 0         Programa Finalizado!



// Inportação de Bibliotecas
import read = require("readline-sync")
import { Queue } from "./Queue"

// Declaracao de Variaveis
let opcao: number, cliente: string, pergunta: string
const listaclientes: Queue<string> = new Queue<string>

// Loop com estrutura de decisão e impressão de dados no Terminal
do {
  // Tela com opções
  console.log(`---------------------------------------------------------

[ 1 ] - Adicionar Clientes na Fila
[ 2 ] - Listar todos os Clientes
[ 3 ] - Retirar Clientes da Fila
[ 0 ] - Sair

---------------------------------------------------------`)
  // Entrada de dados da tela
  opcao = read.questionInt("Entre com a opção desejada: ")
  //estrutura de decisão
  switch (opcao) {

    case 1:
      // Entrada de dados com o nome do cliente
      cliente = read.question("digite o nome do cliente: ")
      // Adicioona o nome do cliente na lista
      listaclientes.enqueue(cliente)
      console.log("\nFila: ")
      // Retorna lista no terminal
      listaclientes.printQueue()
      // Confima se o Cliente foi cadastrado na lista 
      if (listaclientes.contains(cliente) === true) console.log(`\nCliente ${cliente} Cadastrado!`)
      break

    case 2:
      if (listaclientes.count() === 0) console.log("A Fila está vazia!")
      else console.log(`Lista de Clientes na Fila: ${listaclientes.printQueue()}\n`)
      break


    case 3:
      // Se a lista estiver vazia ele retorna "A Fila está vazia!" no Terminal
      if (listaclientes.count() === 0) console.log("A Fila está vazia!\n")

      // remove primeiro da fila
      else console.log(`Cliente chamado: ${listaclientes.dequeue()}`)
      console.log("\nFila: ")

      // Retorna no terminal lista
      listaclientes.printQueue()

      break
    // Tratamento para oção invalidas
    default:
      console.log("Opção invalida!\n")
      break

  }

} while (opcao !== 0)