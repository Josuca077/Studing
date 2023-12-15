const spaceship = {
    name: 'ship1',
    speed: 0,
    index: 1
}

function accelerate(spaceship: { name: string; speed: number; index: number }, speed: number) {
    spaceship.speed = speed
}

accelerate(spaceship, 50)