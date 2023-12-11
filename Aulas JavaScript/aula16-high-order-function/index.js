function calcular (a, b, operacao) {
    console.log('Realizando uma operação.')
    const resultado = operacao(a, b)
    return resultado
}

function somar (x, y) {
    console.log('realisando soma')
    return x + y
}

console.log(calcular(5, 6, somar))

console.log(calcular(4, 2, function (x, y) {
    console.log('Realizando subtração')
    return x-y
}))

function exibirElemento (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ['Maçã', 'Banana', 'Laranja', 'Morango']

for (let i = 0; i < lista.length ; i++) {
    exibirElemento(lista[i], i, lista)
}
console.log('')

lista.forEach(exibirElemento)
console.log('')

lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
})