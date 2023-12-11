function execute() {
    return new Promise((resolve) => {
        console.log('A promise está sendo executada')
        setTimeout(() => {
            console.log('Resolvendo Promise...')
            resolve('Resultado')
        }, 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1500)