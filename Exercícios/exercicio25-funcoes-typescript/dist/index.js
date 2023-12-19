let spaceships = [];
function createSpaceShip(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: new Array(crewLimit),
        inMission: false
    };
    return spaceship;
}
function addCrew(spaceshipName, crewName, spaceships) {
    let spaceshipExists = false;
    let spaceship;
    for (let i = 0; i < spaceships.length; i++) {
        if (spaceships[i].name === spaceshipName) {
            spaceshipExists = true;
            spaceship = spaceships[i];
            break;
        }
    }
    if (spaceshipExists) {
        if (spaceship.crew[spaceship.crewLimit - 1] === undefined) {
            for (let i = 0; i < spaceship.crew.length; i++) {
                if (spaceship.crew[i] === undefined) {
                    spaceship.crew[i] = crewName;
                    break;
                }
            }
        }
        else {
            console.log("a tripulação dessa nave já está cheia");
        }
    }
    else {
        console.log('Essa nave não existe');
    }
}
function sendInMission(spaceshipName, spaceships) {
    let spaceshipExists = false;
    let spaceship;
    for (let i = 0; i < spaceships.length; i++) {
        if (spaceships[i].name === spaceshipName) {
            spaceshipExists = true;
            spaceship = spaceships[i];
            break;
        }
    }
    const crewRegistered = spaceship.crew.reduce((prev, crewmate) => {
        if (crewmate !== undefined) {
            return prev + 1;
        }
    }, 0);
    if (crewRegistered >= Math.floor(spaceship.crew.length / 3)) {
        if (spaceshipExists) {
            spaceship.inMission = true;
        }
    }
    else {
        console.log('tripulação insuficiente para enviar em missão');
    }
}
function outMission(spaceshipName, spaceships) {
    let spaceshipExists = false;
    let spaceship;
    for (let i = 0; i < spaceships.length; i++) {
        if (spaceships[i].name === spaceshipName) {
            spaceshipExists = true;
            spaceship = spaceships[i];
            break;
        }
    }
    if (spaceshipExists) {
        spaceship.inMission = false;
    }
}
function listSpaceShips(spaceships) {
    spaceships.forEach((item) => console.log(item));
}
spaceships.push(createSpaceShip("nave1", "piloto1", 10));
spaceships.push(createSpaceShip("nave2", "piloto2", 20));
spaceships.push(createSpaceShip("nave3", "piloto3", 30));
spaceships.push(createSpaceShip("nave4", "piloto4", 40));
spaceships.push(createSpaceShip("nave5", "piloto5", 50));
spaceships.push(createSpaceShip("nave6", "piloto6", 60));
addCrew('nave1', 'joao0', spaceships);
addCrew('nave1', 'joao0', spaceships);
addCrew('nave1', 'joao0', spaceships);
addCrew('nave2', 'joao0', spaceships);
addCrew('nave2', 'joao0', spaceships);
addCrew('nave2', 'joao0', spaceships);
addCrew('nave2', 'joao0', spaceships);
addCrew('nave2', 'joao0', spaceships);
addCrew('nave2', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave3', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave4', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave5', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
addCrew('nave6', 'joao0', spaceships);
sendInMission('nave1', spaceships);
sendInMission('nave2', spaceships);
sendInMission('nave3', spaceships);
sendInMission('nave4', spaceships);
sendInMission('nave5', spaceships);
sendInMission('nave6', spaceships);
listSpaceShips(spaceships);
