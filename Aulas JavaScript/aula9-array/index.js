const arr = ['Joui' , 'Liz' , 'Thiago' , 'César' , 'Arthur']
const ordemPara = ['Daniel' , 'Alex']
console.log(arr)

// Adicionar Elementos ao Final do Array
// push
// A função "push" retorna para uma variável o tamanho da lista depois de ser alterada
let tamanho = arr.push('Cellbit')
console.log(arr)
console.log(tamanho)

// Adicionar Elementos ao Começo do Array
// unshift
// A função "unshift" retorna para uma variável o tamanho da lista depois de ser alterada
let tamanho2 = arr.unshift('Chris')
console.log(arr)
console.log(tamanho2)

// Remover Elementos do Final do Array
// pop
// A função "pop" retorna para uma variável o elemento retirado da lista
let retirado = arr.pop()
console.log(arr)
console.log(retirado)

// Remover Elementos do Começo do Array
// shift
// A função "shift" retorna para uma variável o elemento retirado da lista
let retirado2 = arr.shift()
console.log(arr)
console.log(retirado2)

// Procura Elementos de um Array
// includes
// A função "includes" retorna para uma variável o valor booleano sobre o elemento estar na lista
let inclui = arr.includes('César')
console.log(inclui)
inclui = arr.includes('Cellbit')
console.log(inclui)

// Procura o Index de um Elementos de um Array
// indexof
// A função "indexOf" retorna para uma variável o Índice de um elemento específico na lista
// Caso o elemento perguntado não esteja presente na lista retorna false para a variável
let index = arr.indexOf('César')
console.log(index)
index = arr.includes('Cellbit')
console.log(index)

// Copia uma parte do array e cola essa parte em outro array
// Não altera o array original
// slice
// Retorna para uma variável uma nova lista, com o conteúdo copiado
const fatia = arr.slice(0, 4)
console.log(fatia)

// Também pode referenciar com números negativos o final da lista
// Se não declarar o final ele vai até o final da lista
const final = arr.slice(-3)
console.log(final)

// Concatenar arrays: juntar 2 arrays
// concat
// Cria uma nova array que é = a junção de arrays e elementos
const ordem = ordemPara.concat(arr)
console.log(ordem)

// Substituição de elementos
// splice
// Devolve os elementos removidos dentro de um array, mesmo que seja apenas 1
index = ordem.indexOf('César')
const removido = ordem.splice(index , 1 , 'Cesar Cohen' , 'Christopher')
console.log(ordem)
console.log(removido)

// Iterar sobre os elementos
// passar pelos elementos de um array
// for
for (let i = 0 ; i <= ordem.length ; i++){
    console.log(ordem[i])
}