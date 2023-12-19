let sair = false

do {
    let escolha = prompt(
        'Insira o número de uma das seguintes opções:' +
        '\n1- Opção 1' +
        '\n2- Opção 2' +
        '\n3- Opção 3' +
        '\n4- Opção 4' +
        '\n5- Encerrar'
       )

    switch (escolha){
        case '1':
            alert('Opção 1 escolhida!')
            break
        case '2':
            alert('Opção 2 escolhida!')
            break
        case '3':
            alert('Opção 3 escolhida!')
            break
        case '4':
            alert('Opção 4 escolhida!')
            break
        case '5':
            sair = true
            break
        default:
            alert('Escolha inválida')
    }
} while (sair === false)

alert('Menu Fechado!')