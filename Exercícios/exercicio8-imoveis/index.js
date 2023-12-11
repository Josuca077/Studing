let escolha = ''
const listaDeImoveis = []

do {
    escolha = prompt(
        'Imóveis Cadastrados: ' + listaDeImoveis.length + '\n\n' +
        'Menu:' + 
        '\n1- Adicionar Imóvel' +
        '\n2- Lista de Imóveis' +
        '\n3- SAIR'
    )

    switch (escolha) {
        case '1': // Adicionar Imóvel
                const imovel = {}
                imovel.Proprietario = prompt('Digite o nome do proprietário:')
                imovel.Quartos = prompt('Quantos quartos tem no imóvel?')
                imovel.Banheiros = prompt('Quantos banheiros tem no imóvel?')
                imovel.Garagem = prompt('O imóvel possúi garagem? SIM/NÃO')

                let confirma = confirm('Deseja salvar este imóvel?\n' +
                                      '\nProprietário: ' + imovel.Proprietario +
                                      '\nNúmero de quartos: ' + imovel.Quartos +
                                      '\nNúmero de banheiros: ' + imovel.Banheiros +
                                      '\nPossúi garagem: ' + imovel.Garagem)
                if (confirma === true) {
                    listaDeImoveis.push(imovel)
                } else {
                    alert('Voltando para o menu...')
                }
            break
        case '2': // Lista de Imóveis
            for (i = 0 ; i < listaDeImoveis.length ; i++){
                alert('Ímovel ' + (i + 1) + '\n' +
                      '\nProprietário: ' + listaDeImoveis[i].Proprietario +
                      '\nNúmero de quartos: ' + listaDeImoveis[i].Quartos +
                      '\nNúmero de banheiros: ' + listaDeImoveis[i].Banheiros +
                      '\nPossúi garagem: ' + listaDeImoveis[i].Garagem)
            }
            break
        case '3': // SAIR
            alert('Fechando Menu...')
            alert('Menu Fechado')
            break
        default:
            alert('Entrada Inválida')
    }
} while (escolha !== '3')