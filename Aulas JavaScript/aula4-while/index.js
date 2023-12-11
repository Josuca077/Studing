const medida = prompt('Insira um valor em metros:')
let conversao; repeticao = 0
while (repeticao === 0){
    conversao = prompt('Escolha a nova medida:' +
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
            repeticao = 1
            break
        case 'cm':
            alert(medida + ' metros é igual à ' + medida * 100 + ' Centímetros')
            repeticao = 1
            break
        case 'dm':
            alert(medida + ' metros é igual à ' + medida * 10 + ' Decímetros')
            repeticao = 1
            break
        case 'dam':
            alert(medida + ' metros é igual à ' + medida * 0.1 + ' Decâmetros')
            repeticao = 1
            break
        case 'hm':
            alert(medida + ' metros é igual à ' + medida * 0.01 + ' Hectômetros')
            repeticao = 1
            break
        case 'km':
            alert(medida + ' metros é igual à ' + medida * 0.001 + ' Quilômetros')
            repeticao = 1
            break
        default:
            alert('Resposta Inválida...')
    }
}
