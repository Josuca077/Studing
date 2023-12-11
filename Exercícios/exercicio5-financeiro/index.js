let dinheiro = parseFloat(prompt('Qual o dinheiro inicial?'))
let sair = false

do {
    let escolha = parseFloat(prompt(
        'Dinheiro atual: R$' + dinheiro + '\n\n' +
        '1- Adicionar Dinheiro' + '\n' +
        '2- Remover Dinheiro' + '\n' +
        '3- SAIR'
       ))

    switch (escolha){
        case 1:
            let adicionar = parseFloat(prompt(
                'Dinheiro atual: R$' + dinheiro + '\n\n' +
                'Digite o valor a adicionar:'
            ))
            dinheiro += adicionar
            alert('Dinheiro atual: R$' + dinheiro)
            break
        case 2:
            let remover = parseFloat(prompt(
                'Dinheiro atual: R$' + dinheiro + '\n\n' +
                'Digite o valor a remover:'
            ))
            dinheiro -= remover
            alert('Dinheiro atual: R$' + dinheiro)
            break
        case 3:
            sair = true
            break
        default:
            alert('Entrada Inválida!')

    }


} while(sair === false)

alert('Fechando o aplicativo')
alert('Dinheiro atual: R$' + dinheiro + '\n\n' + 'Menu Encerrado!')