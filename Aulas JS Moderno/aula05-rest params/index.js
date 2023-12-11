// rest params devem ser os últimos parâmetros, eles são os restos dos parâmetros
function sum(params, ...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1,1,4,5,56,4,4,6,45,45,346,2))

