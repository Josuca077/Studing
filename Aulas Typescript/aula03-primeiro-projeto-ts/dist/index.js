function sendSpaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada`);
    return spaceship;
}
function accelerate(newSpeed, spaceship) {
    if (spaceship.speed > newSpeed) {
        alert(`Reduzindo a velocidade de ${spaceship.name} de ${spaceship.speed} Km/h para ${newSpeed} Km/h`);
    }
    else if (spaceship.speed < newSpeed) {
        alert(`Aumentando a velocidade de ${spaceship.name} de ${spaceship.speed} Km/h para ${newSpeed} Km/h`);
    }
    else {
        alert(`Mantendo a velocidade ${newSpeed} Km/h`);
    }
    spaceship.speed = newSpeed;
}
const spaceshipName = prompt("Escreva o nome da nave:");
const spaceshipCaptain = prompt(`Escreva o nome do captão da ${spaceshipName}`);
const spaceship = sendSpaceship(spaceshipName, spaceshipCaptain);
const speed = Number(prompt("Escreva a velocidade da nave"));
accelerate(speed, spaceship);
