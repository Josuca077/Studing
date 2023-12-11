const nome = prompt('Escreva seu nome')
let cidades = ' '
let contagem = 0

let continuar = prompt('Você ja visitou alguma cidade? sim/não')

while(continuar === 'sim'){
    let cidade = prompt('Escreva o nome da cidade')
    cidades += ('\n' + '- ' + cidade)
    contagem++
    continuar = prompt('Você visitou alguma outra cidade? sim/não')
}

alert(nome + ' visitou ' + contagem + ' cidades:' + cidades)