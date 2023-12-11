console.log('Programa iniciado')

const timeoutId = setTimeout(() => {
    console.log('3 segundos depois...')
    clearTimeout(timeoutId)
}, 1000 * 3)

let seconds = 0
const intervalId = setInterval(() => {
    seconds += 1
    console.log(`Se passaram ${seconds} segundos`)
    if (seconds >= 10) {
        clearInterval(intervalId)
    }
}, 1000);