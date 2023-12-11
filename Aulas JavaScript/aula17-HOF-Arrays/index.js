const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
console.log(personagens + '\n')
// Map
// Pega um array existente e cria outro array baseado nele

/*const nomes = []

  for (let i = 0; i < personagens.length; i++) {
      nomes.push(personagens[i].nome)
  }
  console.log(nomes)*/

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})
console.log(nomes)

// Filter
// Seleciona elementos específicos de um array existente e cria um array novo

/*const orcs = []

  for (let i = 0; i < personagens.length; i++) {
      if (personagens[i].raca === 'Orc')
      orcs.push(personagens[i])
  }
  console.log(orcs)*/


const orcs = personagens.filter(function (personagem) {
    return personagem.raca === 'Orc'
})
console.log(orcs)

// Reduce
// Transforma um array em outra coisa, seja um array, objeto, numero, string e etc
// O reduce é construido conforme passa pelo array
// 1 -> 2 -> 3 ...

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
} , 0)
console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)

// Sort
// Ordena o array baseado em algum critério
// Modifica o array chamado, não cria um novo

const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return b.nivel - a.nivel
})

console.log(personagens)
console.log(personagensOrdenados)