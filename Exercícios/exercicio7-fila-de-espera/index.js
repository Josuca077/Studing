const listaDePacientes = ['Mateus' , 'Lucas' , 'Rafael']
let escolha = 3
let i = 0
let mensagem = ''
let novoPaciente = ''
let consulta = ''

do {
    mensagem = ''
    for (i = 0 ; i < listaDePacientes.length ; i++){
        mensagem += ((i + 1) + '- ' + listaDePacientes[i] + '\n')
    }

    escolha = parseFloat(prompt(
        'Lista de Pacientes:\n' + mensagem + '\n' +
        'Ações: \n1- Adicionar Paciente \n2- Consultar Paciente \n3- SAIR'
    ))

    switch (escolha) {
        case 1: // Adicionar Paciente
            novoPaciente = prompt('Escreva o nome do novo paciente:')
            listaDePacientes.push(novoPaciente)
            break
        case 2: // Consultar Paciente
            consulta = listaDePacientes.shift()
            if (consulta === undefined) {
                alert('A lista de pacientes está vazia!')
            } else{
                alert(consulta + ', chegou sua vez')
            }
            break
        case 3: // SAIR
            alert('Fechando o menu...')
            alert('Menu fechado')
        default:
            alert('Opção Inválida!')
    }
} while (escolha !== 3)