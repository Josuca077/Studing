/*
function asyncSum (a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract (a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 1)
const subtractResult = asyncSubtract(50, 1)

Promise.all([sumResult, subtractResult])
    .then(result => console.log(result))
    .catch(err => console.log(err)) 
*/


const numbers = [1,6,43,23,12,43]

function asyncSquare(x) {
    return new Promise((resolve, reject) => resolve(x * x))
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => console.log(squares))