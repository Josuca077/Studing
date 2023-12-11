let opcao = String()
const vagas = [{
                index: 1,
                nomeVaga: 'Dev Front-end',
                descricao: 'Trabalhar como desenvolvedor front-end',
                dataLimite: '31/10/2023',
                Candidatos: [' Enzo', ' Mateus', ' Josué']
              },
              {
                index: 2,
                nomeVaga: 'Dev Back-end',
                descricao: 'Trabalhar como desenvolvedor back-end',
                dataLimite: '31/10/2023',
                Candidatos: [' Pedro', ' João', ' Jonas']
              }]


function exibirMenu () {
    let opcao = prompt(
                       'Menu Principal:\n' +
                       '\n1- Listar vagas disponíveis' +
                       '\n2- Criar um nova vaga' +
                       '\n3- Visualizar uma vaga' +
                       '\n4- Inscrever um candidato em uma vaga' +
                       '\n5- Excluir uma vaga' +
                       '\n6- Sair \n'
                      )
    return opcao
}
function listarVagas (listaDeVagas) {

    if (listaDeVagas.length === 0) {
        alert('Não existem vagas!')
        alert('Returnando para o Menu...')
        return
    }

    const vagasEmTexto = listaDeVagas.reduce(function (textoFinal, lista) {
        return textoFinal += (lista.index + '- ' + lista.nomeVaga + ' - ' + 'Número de Candidatos: ' + lista.Candidatos.length + '\n')
    }, '')
    alert(vagasEmTexto)

    /*const indices = listaDeVagas.map(function (lista) {
        return lista.index
    })

    const nomes = listaDeVagas.map(function (lista) {
        return lista.nomeVaga
    })
    
    let mensagem = String()
    for (let i = 0; i < nomes.length; i++) {
        mensagem += (indices[i] + '- ' + nomes[i] + ' - Número de Candidatos: ' + listaDeVagas[i].Candidatos.length + '\n')
    }
    alert (mensagem)*/

}
function criarVaga (listaDeVagas) {

    const vaga = {}
    vaga.index = listaDeVagas.length + 1
    vaga.nomeVaga = prompt('Escreva o nome da vaga:')
    vaga.descricao = prompt('Descreva a vaga:')
    vaga.dataLimite = prompt('Escreva a data limite da vaga (dd/mm/aaaa):')
    vaga.Candidatos = []

    if (confirm('Adicionar a Seguinte Vaga:\n' + 
                '\níndice: ' + vaga.index + 
                '\nNome da Vaga: ' + vaga.nomeVaga + 
                '\nDescrição da Vaga: ' + vaga.descricao + 
                '\nData Limite: ' + vaga.dataLimite)) {
        listaDeVagas.push(vaga)
    } else {
        alert('Voltando para o Menu...')
    }
}
function viewVaga (listaDeVagas) {

    if (listaDeVagas.length === 0) {
        alert('Não existem vagas!')
        alert('Returnando para o Menu...')
        return
    }

    let indice = prompt('Escreva o índice da vaga que deseja deletar:')

    do {
        while (isNaN(indice) || indice === ''){
            indice = prompt('Escreva um número:')
        }
        while (indice > listaDeVagas.length || indice <= 0) {
            indice = prompt('Escreva o índice entre 1 e ' + listaDeVagas.length)
        }
    } while (indice > listaDeVagas.length || indice <= 0 || isNaN(indice) || indice === '')

    alert('Vaga de índice ' + indice + '\n' +
          '\nNome da vaga: ' + listaDeVagas[indice - 1].nomeVaga + 
          '\nDescrição: ' + listaDeVagas[indice - 1].descricao +
          '\nData limite: ' + listaDeVagas[indice - 1].dataLimite +
          '\nNúmero de candidatos: ' + listaDeVagas[indice - 1].Candidatos.length +
          '\nCandidatos: ' + listaDeVagas[indice - 1].Candidatos)
}
function inscreverCandidato (listaDeVagas) {

    if (listaDeVagas.length === 0) {
        alert('Não existem vagas!')
        alert('Returnando para o Menu...')
        return
    }

    const nomeCandidato = prompt('Escreva o nome do candidato:')

    let indice = prompt('Escreva o índice da vaga que deseja deletar:')

    do {
        while (isNaN(indice) || indice === ''){
            indice = prompt('Escreva um número:')
        }
        while (indice > listaDeVagas.length || indice <= 0) {
            indice = prompt('Escreva o índice entre 1 e ' + listaDeVagas.length)
        }
    } while (indice > listaDeVagas.length || indice <= 0 || isNaN(indice) || indice === '')

    if(confirm('Vaga de índice ' + indice + '\n' +
               '\nNome da vaga: ' + listaDeVagas[indice - 1].nomeVaga + 
               '\nDescrição: ' + listaDeVagas[indice - 1].descricao +
               '\nData limite: ' + listaDeVagas[indice - 1].dataLimite +
               '\nNúmero de candidatos: ' + listaDeVagas[indice - 1].Candidatos.length +
               '\n\nAdicionar ' + nomeCandidato + ' a essa vaga?'
    )) {
        listaDeVagas[indice - 1].Candidatos.push(' ' + nomeCandidato)
    } else {
        alert('Voltando para o Menu...')
    }
}
function delVaga (listaDeVagas) {
    
    if (listaDeVagas.length === 0) {
        alert('Não existem vagas!')
        alert('Returnando para o Menu...')
        return
    }

    let indice = prompt('Escreva o índice da vaga que deseja deletar:')

    do {
        while (isNaN(indice) || indice === ''){
            indice = prompt('Escreva um número:')
        }
        while (indice > listaDeVagas.length || indice <= 0) {
            indice = prompt('Escreva o índice entre 1 e ' + listaDeVagas.length)
        }
    } while (indice > listaDeVagas.length || indice <= 0 || isNaN(indice) || indice === '')

    if(confirm('Vaga de índice ' + indice + '\n' +
               '\nNome da vaga: ' + listaDeVagas[indice - 1].nomeVaga + 
               '\nDescrição: ' + listaDeVagas[indice - 1].descricao +
               '\nData limite: ' + listaDeVagas[indice - 1].dataLimite +
               '\nNúmero de candidatos: ' + listaDeVagas[indice - 1].Candidatos.length +
               '\n\nDeletar essa vaga?'
    )) {
        listaDeVagas.splice((indice - 1), 1)
    } else {
        alert('Voltando para o Menu...')
    }
}
function exit () {
    alert('Fechando Menu...')
    alert('Menu Fechado!')
}

do {
    for (let i = 0; i < vagas.length; i++) {
        vagas[i].index = (i + 1)
    }
    opcao = exibirMenu()

    switch (opcao) {
        case '1':
            listarVagas(vagas)
            break
        case '2':
            criarVaga(vagas)
            break
        case '3':
            viewVaga(vagas)
            break
        case '4':
            inscreverCandidato(vagas)
            break
        case '5':
            delVaga(vagas)
            break
        case '6':
            exit()
            break
        default:
            alert('Entrada Inválida!!')
    }
} while (opcao !== '6')