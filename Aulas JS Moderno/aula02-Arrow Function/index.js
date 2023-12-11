function normalSum (a,b) {
    return a + b
}

const anonymousSum = function (a, b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

// se for só uma linha a função pode ser escrita assim
const subtract = (a, b) => a - b

// se for só um parâmetro não precisa de ()
const double = n => `O Dobro de ${n} é = ${n*2}`

// arrow functions são bem úteis para usar com as callback functions como .forEach, .map e etc
const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(
`Soma com Função Normal: ${normalSum(3, 5)}
Soma com Função Anônima: ${anonymousSum(4, 6)}
Soma com Arrow Function: ${arrowSum(3, 8)}
Sub  com Arrow Function: ${subtract(10, 3)}
${double(5)}
Cidades Começando com P: ${startingWithP}`
)