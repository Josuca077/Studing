const palavra = prompt('Escreva uma palavra')
let palavraContrario = ''

for (let i = palavra.length - 1 ; i >= 0 ; i--) {
    palavraContrario += palavra[i]
}

if (palavra === palavraContrario) {
    alert('A palavra: ' + palavra + ' é um palíndromo \n' + 
          'Original = ' + palavra + '\n' + 
          'Palavra ao contrário = ' + palavraContrario)
} else {
    alert('A palavra: ' + palavra + ' não é um palíndromo \n' + 
    'Original = ' + palavra + '\n' + 
    'Palavra ao contrário = ' + palavraContrario)
}