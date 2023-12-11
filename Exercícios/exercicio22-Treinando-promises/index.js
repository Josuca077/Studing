function calcIMC(height, weight) {
    return new Promise((resolve, reject) => {
        console.log('Calculando IMC...')
        if (isNaN(height) || isNaN(weight)) {
            reject('A altura e o peso devem ser números')
        } else {
            let seconds = 4
            const intervalId = setInterval(() => {
                seconds -= 1
                if (seconds < 1) {
                    resolve(weight / ((height/100)**2))
                    clearInterval(intervalId)
                } else{
                    console.log(`${seconds}...`)
                }
            }, 1000)
        }
    })
}

function showIMC(height, weight) {
    calcIMC(height, weight)
    .then((result) => {
        let status = ''
        if (result < 18.5) status = 'magreza'

        else if (result < 25) status = 'normal'

        else if (result < 30) status = 'sobrepeso'

        else if (result < 40) status = 'obesidade'

        else status = 'obesidade grave'
        console.log(
`O resultado do seu teste foi: ${result.toFixed(2)}.
A sua situação é: ${status}`
        )
    })
    .catch((err) => console.log(`calculo interrompido! Motivo: ${err}`
    ))
    .finally(() => console.log("Operação finalizada!"))
}

// Altura em cm

showIMC(190, 100)
showIMC('a', 89)
showIMC(200, 70)
showIMC(190, 75)
showIMC(160, 90)
showIMC(180, 'dsa')