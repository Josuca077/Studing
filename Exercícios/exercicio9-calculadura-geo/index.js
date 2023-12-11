function menu () {
    escolha = prompt('Escolha a Área que Você quer Calcular: \n\n' +
    '1- Área do Triângulo' + '\n2- Área do Retângulo' +
    '\n3- Área do Quadrado' + '\n4- Área do Trapézio' +
    '\n5- Área do Círculo' + '\n6- SAIR'
    )
    return escolha
}
function areaTriangulo () {
    let base = prompt('Escreva a base do triângulo:')
    while (isNaN(base)) {
        base = prompt('Escreva um número para a base:')
    }

    let altura = prompt('Escreva a altura do triângulo:')
    while (isNaN(altura)) {
        altura = prompt('Escreva um número para a altura:')
    }

    return base * altura / 2
}
function areaRetangulo () {
    let base = prompt('Escreva a base do retângulo:')
    while (isNaN(base)) {
        base = prompt('Escreva um número para a base:')
    }

    let altura = prompt('Escreva a altura do retângulo:')
    while (isNaN(altura)) {
        altura = prompt('Escreva um número para a altura:')
    }

    return base * altura
}
function areaQuadrado () {
    let base = prompt('Escreva o lado do quadrado:')
    while (isNaN(base)) {
        base = prompt('Escreva um número para o lado:')
    }

    return base * base
}
function areaTrapezio () {
    let baseMaior = prompt('Escreva a base maior do trapézio:')
    while (isNaN(baseMaior)) {
        baseMaior = prompt('Escreva um número para a base maior:')
    }

    let baseMenor = prompt('Escreva a base menor do trapézio:')
    while (isNaN(baseMenor)) {
        baseMenor = prompt('Escreva um número para a base Menor:')
    }

    let altura = prompt('Escreva a altura do trapézio:')
    while (isNaN(altura)) {
        altura = prompt('Escreva um número para a altura:')
    }

    return (parseFloat(baseMaior) + parseFloat(baseMenor)) * altura / 2
}
function areaCirculo () {
    let raio = prompt('Escreva o raio do círculo:')
    while (isNaN(raio)) {
        raio = prompt('Escreva um número para o raio:')
    }

    return raio * raio * 3.14
}

 area = 0

do {
    let escolha = menu()
    
    switch (escolha) {
        case '1':
            area = areaTriangulo()
            alert('Área do triângulo = ' + area)
            break
        case '2':
            area = areaRetangulo()
            alert('Área do retângulo = ' + area)
            break
        case '3':
            area = areaQuadrado()
            alert('Área do quadrado = ' + area)
            break
        case '4':
            area = areaTrapezio()
            alert('Área do trapézio = ' + area)
            break
        case '5':
            area = areaCirculo()
            alert('Área do círculo = ' + area)
            break
        case '6':
            alert('Fechando o Menu...')
            alert('Menu Fechado!')
            break
        default:
            alert('Opção Ínvalida!')
    }
} while (escolha !== '6')