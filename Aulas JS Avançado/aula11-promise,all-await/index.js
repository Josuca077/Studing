const waitFor = async seconds => new Promise((resolve) => setTimeout(() => resolve(), seconds * 1000))

/*
const squares = numbers.map(async number => {
    await waitFor(2)
    return number * number
}) 

console.log(squares)

Promise.all(squares).then(results => {
    console.log(results)
})
*/

async function execute(seconds) {
    console.time('map')

    const numbers = [4, 5, 9, 13, 77]

    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(seconds)
        return number * number
    }))

    console.log(squares)
    console.timeEnd('map')
}

execute(3)