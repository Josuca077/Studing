function renderGame (gameData) {
    const game = document.createElement('article')
    game.classList.add('game')
    game.id = `game-${gameData.id}`

    const title = document.createElement('h2')
    title.classList.add('title')
    title.id = gameData.title
    title.textContent = gameData.title

    const gender = document.createElement('div')
    gender.classList.add('gender', gameData.gender)
    gender.innerHTML = `<b>Gender:</b> ${gameData.gender}`

    const publisher = document.createElement('div')
    publisher.classList.add('publisher', gameData.publisher)
    publisher.innerHTML = `<b>Publisher:</b> ${gameData.publisher}`

    game.append(title, gender, publisher)
    document.getElementById('games').appendChild(game)
}

async function fetchGame() {
    const games = await fetch("http://localhost:3000/games").then(res => res.json())
    
    games.forEach(renderGame)
}

const form = document.querySelector('form')
form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const gameData = {
        title: document.querySelector('#name').value,
        gender: document.querySelector('#gender').value,
        publisher: document.querySelector('#publisher').value
    }

    const response = await fetch("http://localhost:3000/games", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
    })

    const savedGame = await response.json()
    form.reset()
    renderGame(savedGame)

    console.log(savedGame)
})

document.addEventListener('DOMContentLoaded', () => fetchGame())