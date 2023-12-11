async function asyncSum (a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments must be type of number')
    }
    return a + b
}

async function asyncSub (a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments must be type of number')
    }
    return a - b
}

const sumResult = asyncSum(11, 1)
const subtractResult = asyncSub(50, null)

Promise.all([sumResult, subtractResult])
    .then(result => console.log(result))
    .catch(err => console.log(err))

const numbers = [1,2,3,4,5,6,7,8,9,10]

async function asyncSquare (x) {
    return x * x
}
 
Promise.all(numbers.map(numbers => asyncSquare(numbers))).then(results => console.log(results))