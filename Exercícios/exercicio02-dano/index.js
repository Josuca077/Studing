const nome1 = prompt('Escreva o nome do personagem atacante')
const ataque = parseFloat(prompt('Escreva o poder de ataque de ' + nome1))

const nome2 = prompt('Escreva o nome do personagem defensor')
const vidaInicial = parseFloat(prompt('Escreva os pontos de vida de ' + nome2))
const defesa = parseFloat(prompt('Escreva os pontos de defesa de ' + nome2))
const escudo = prompt(nome2 + ' tem escudo? sim ou não')

let dano = 0
let vida = vidaInicial

if (ataque > defesa && escudo === 'sim') {
    dano = (ataque - defesa)/2
} else if (ataque > defesa) {
    dano = (ataque - defesa)
}

vida = vidaInicial - dano
if (vida < 0) {
    vida = 0
}

alert(
'O dano foi: ' + dano +
'\n\npersonagem 1 \n' + 'Nome: ' + nome1 + 
'\nAtaque: ' + ataque +
'\n\npersonagem 2 \n' + 'Nome: ' + nome2 + 
'\nDefesa: ' + defesa +
'\n Vida inicial: ' + vidaInicial +
'\nVida atual: ' + vida +
'\nEscudo: ' + escudo
)