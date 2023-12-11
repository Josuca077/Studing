const name1 = prompt('Escreva o nome do primeiro carro: ')
const velocidade1 = parseFloat(prompt('Escreva a velocidade do primeiro carro: '))

const name2 = prompt('Escreva o nome do segundo carro: ')
const velocidade2 = parseFloat(prompt('Escreva a velocidade do segundo carro: '))

if (velocidade1 > velocidade2) {
    alert('O carro do ' + name1 + ' está mais rápido que o carro de ' + nome2)
} else if (velocidade1 < velocidade2) {
    alert('O carro do ' + name2 + ' está mais rápido queo carro de ' + nome1)
} else {
    alert('O carro do ' + name1 + ' e o carro do ' + name2 + ' estão na mesma velocidade')
}