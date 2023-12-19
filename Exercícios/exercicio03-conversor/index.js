const medida = prompt('Insira um valor em metros:')
const conversao = prompt('Escolha a nova medida:' +
'\n1- Milímetro (mm)' +
'\n2- Centímetro (cm)' + 
'\n3- Decímetro (dm)' + 
'\n4- Decâmetro (dam)' +
'\n5- Hectômetro (hm)' + 
'\n6- Quilômetro (km)'
)

switch (conversao) {
    case 'mm':
        alert(medida + ' metros é igual à ' + medida * 1000 + ' Milímetros')
        break
    case 'cm':
        alert(medida + ' metros é igual à ' + medida * 100 + ' Centímetros')
        break
    case 'dm':
        alert(medida + ' metros é igual à ' + medida * 10 + ' Decímetros')
        break
    case 'dam':
        alert(medida + ' metros é igual à ' + medida * 0.1 + ' Decâmetros')
        break
    case 'hm':
        alert(medida + ' metros é igual à ' + medida * 0.01 + ' Hectômetros')
        break
    case 'km':
        alert(medida + ' metros é igual à ' + medida * 0.001 + ' Quilômetros')
        break
    default:
        alert('Resposta Inválida...')
}