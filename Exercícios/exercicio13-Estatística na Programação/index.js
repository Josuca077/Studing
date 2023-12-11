// Média
const average = (...numbers) => {
    return numbers.reduce((accum, num) => accum + num, 0) / numbers.length
}

// Média Ponderada
const weiAverage = (...grades) => {
    return grades.reduce((accum, grade) => accum + (grade.n * (grade.p ?? 1)), 0) / grades.reduce((accum, grade) => accum + (grade.p ?? 1), 0)
}

// Mediana
const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if(orderedNumbers.length % 2 === 0){
        return average(orderedNumbers[middle], orderedNumbers[middle - 1])
    } else {
        return orderedNumbers[middle]
    }
}

// Moda
const mode = (...numbers) => {
    let count = {}
    let moda;
    let biggerCount = 0

    numbers.forEach(num => {
        if(count[num]) {
            count[num]++
        } else {
            count[num] = 1
        }
    })
    for (let number in count) {
        if(count[number] > biggerCount) {
            moda = number
            biggerCount = count[number]
        }
    }
    return moda
}

console.log(
`Média Aritmética: ${average(1, 5, 6, 56, 2, 6, 4, 10, 2, 8)}
Média Ponderada: ${weiAverage({n:3, p:4}, {n:3, p:7}, {n:3,})}
Mediana: ${median(1, 2, 3, 4, 5, 6)}
Moda: ${mode(2, 5, 1, 6, 3, 99, 99, 99, 99, 99, 99, 2, 1, 5, 2, 6, 3, 2)}`)