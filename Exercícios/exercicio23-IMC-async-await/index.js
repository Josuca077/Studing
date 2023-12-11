async function calcIMC(height, weight) {
    
        console.log('Calculando IMC...')
        if (isNaN(height) || isNaN(weight)) {
            return Promise.reject('A altura e o peso devem ser números')
        } else {
            return weight / ((height/100)**2)
        }
    
}

async function showIMC(height, weight) {
    await calcIMC(height, weight).then(resultIMC => {
        let status = ''
        if (resultIMC < 18.5) status = 'magreza'
        else if (resultIMC < 25) status = 'normal'
        else if (resultIMC < 30) status = 'sobrepeso'
        else if (resultIMC < 40) status = 'obesidade'
        else status = 'obesidade grave'
        console.log(
`O resultado do seu teste foi: ${resultIMC.toFixed(2)}.
A sua situação é: ${status}`
        ) 
    })
    .catch(err => console.log(`calculo interrompido! Motivo: ${err}`))
    .finally(() => console.log("Calculo finalizado!"))
}

// Altura em cm

showIMC(190, 100)
showIMC('a', 89)
showIMC(200, 70)
showIMC(190, 75)
showIMC(160, 90)
showIMC(180, 'dsa')