const setPilot = async (newPilot, spaceship) => {
    spaceship.pilot = newPilot;
};
const accelerate = async (speed, spaceship) => {
    spaceship.speed += speed;
};
const inMission = async (spaceship) => {
    spaceship.inMission = true;
};
const spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false
};
spaceship.name = 'ship1';
setPilot('Jonas', spaceship);
accelerate(50, spaceship);
inMission(spaceship);
console.log(spaceship);
