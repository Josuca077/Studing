const baralho = ['7c' , '3o' , 'Jp']
let escolha = 3
let i = 0
let novaCarta = ''
let puxarCarta = ''

do {
    escolha = parseFloat(prompt(
        'Número de Cartas no Baralho: ' + baralho.length + '\n\n' +
        'Ações: \n1- Adicionar Carta \n2- Puxar Carta \n3- SAIR'
    ))

    switch (escolha) {
        case 1: // Adicionar Carta
            novaCarta = prompt('Escreva a carta a ser adicionada:')
            baralho.push(novaCarta)
            break
        case 2: // Puxar Carta
            puxarCarta = baralho.pop()
            if (puxarCarta === undefined) {
                alert('O baralho está vazio!')
            } else{
                alert('Carta Puxada: ' + puxarCarta)
            }
            break
        case 3: // SAIR
            alert('Fechando o menu...')
            alert('Menu fechado')
        default:
    }
} while (escolha !== 3)