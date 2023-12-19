const num = parseFloat(prompt('Insira o número para calcular a tabuada'))
let tabuada = 'Tabuada:\n'

for (let i = 1 ; i <= 20 ; i++){
    tabuada += (num + 'x' + i + ' = ' + (num * i) + '\n')
}

alert(tabuada)