alert('Vamos Iniciar sem Cadastro!')
const primeiroNome = prompt('Escreva seu Primeiro Nome:')
const sobreNome = prompt('Agora Escreva seu Sobrenome:')

const nomeCompleto = primeiroNome + ' ' + sobreNome
console.log(nomeCompleto)

const estudo = prompt('Escreva sua Área de Estudo:')

const nascimento = prompt('Escreva seu ano de Nascimento:')


alert(
    'Cadastro Realizado com Sucesso.' + 
    '\n Nome Completo: ' + nomeCompleto +
    '\n Campo de Estudo: ' + estudo +
    "\n Idade: " + (2023 - nascimento))