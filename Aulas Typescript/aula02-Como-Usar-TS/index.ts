function setPilot (newPilot: string, spaceship: { name: string; pilot: string; speed: number; inMission: boolean }){
    spaceship.pilot = newPilot
}

function accelerate(speed: number, spaceship: { name: string; pilot: string; speed: number; inMission: boolean }){
    spaceship.speed += speed
}

function inMission(spaceship: { name: string; pilot: string; speed: number; inMission: boolean }) {
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