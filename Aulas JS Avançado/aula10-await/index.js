async function asyncSum (a,b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments must be type of number')
    }
    return a + b
}

/*async function execute () {
    asyncSum(50, 20).then(result => console.log(result))
}*/

async function execute () {
    const result = await asyncSum(50, 20)
    console.log(result)
}

execute()