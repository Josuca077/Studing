function setPilot(newPilot, spaceship) {
    spaceship.pilot = newPilot;
}
function accelerate(speed, spaceship) {
    spaceship.speed += speed;
}
function inMission(spaceship) {
    spaceship.inMission = true;
}
var spaceship = {
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
