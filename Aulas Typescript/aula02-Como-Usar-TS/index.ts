const setPilot = (newPilot: string, spaceship: { name: string; pilot: string; speed: number; inMission: boolean }) => {
    spaceship.pilot = newPilot
}

const accelerate = (speed: number, spaceship: { name: string; pilot: string; speed: number; inMission: boolean }) => {
    spaceship.speed += speed
}

const inMission = (spaceship: { name: string; pilot: string; speed: number; inMission: boolean }) => {
    spaceship.inMission = true
}

const spaceship = {
    name : '',
    pilot : '',
    speed : 0,
    inMission : false
}

spaceship.name = 'ship1'
setPilot('Jonas', spaceship)
accelerate(50, spaceship)
inMission(spaceship)
console.log(spaceship)