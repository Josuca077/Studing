const planets = [];
document.getElementById('btn').addEventListener('click', openMenu);
function findPlanet(name) {
    const planet = planets.find((planet) => planet.name === name);
    if (planet) {
        return planet;
    }
    else {
        throw new Error(`O planeta ${name} não está registrado!`);
    }
}
function registerPlanet(name, coordinates, situation) {
    const planet = {
        name,
        coordinates,
        situation,
        satellites: []
    };
    planets.push(planet);
}
function updateSituation(name, situation) {
    try {
        const planet = findPlanet(name);
        planet.situation = situation;
    }
    catch (error) {
        console.log(error.message);
    }
}
function addSatellite(name, satellite) {
    try {
        const planet = findPlanet(name);
        planet.satellites.push(satellite);
    }
    catch (error) {
        console.log(error.message);
    }
}
function removeSatellite(name, satellite) {
    try {
        const planet = findPlanet(name);
        planet.satellites = planet.satellites.filter((item) => item !== satellite);
    }
    catch (error) {
        console.log(error.message);
    }
}
function listPlanets() {
    alert(planets.reduce((mensage, planet) => {
        return (`${mensage}
${planet.name}:

Coordenadas: ${planet.coordinates}
Situação: ${planet.situation}
Satélites: ${planet.satellites}
        
`);
    }, ""));
}
function openMenu() {
    const choice = parseFloat(prompt(`Escolha a Ação:

1- Registrar Planeta
2- Atualizar Situação
3- Alterar Satélites
4- Listar Planetas

0- SAIR`));
    switch (choice) {
        case 1:
            choice1();
            break;
        case 2:
            choice2();
            break;
        case 3:
            choice3();
            break;
        case 4:
            choice4();
            break;
        case 0:
            exit();
            break;
        default:
            alert("Escolha uma opção válida");
            openMenu();
    }
}
function choice1() {
    const name = prompt("Digite o nome do planeta a ser registrado:");
    try {
        findPlanet(name);
    }
    catch {
        const coordinates1 = parseFloat(prompt("Digite o primeiro das coordenadas:"));
        const coordinates2 = parseFloat(prompt("Digite o segundo das coordenadas:"));
        const coordinates3 = parseFloat(prompt("Digite o terceiro das coordenadas:"));
        const coordinates4 = parseFloat(prompt("Digite o quarto das coordenadas:"));
        let situation;
        let choice;
        do {
            choice = parseFloat(prompt(`Escolha a situação do planeta:

1- Habitado
2- Habitável
3- Inabitável
4- Inexplorado
`));
            switch (choice) {
                case 1:
                    situation = "habitado";
                    break;
                case 2:
                    situation = "habitável";
                    break;
                case 3:
                    situation = "inabitável";
                    break;
                case 4:
                    situation = "inexplorado";
                    break;
            }
        } while (choice !== 1 && choice !== 2 && choice !== 3 && choice !== 4);
        registerPlanet(name, [coordinates1, coordinates2, coordinates3, coordinates4], situation);
    }
    openMenu();
}
function choice2() {
    const name = prompt("Escreva o nome do planeta que deseja alterar a situação:");
    openMenu();
}
function choice3() {
}
function choice3A() {
}
function choice3B() {
}
function choice4() {
    listPlanets();
    openMenu();
}
function exit() {
    alert("Fechando Menu...");
    alert("Menu Fechado!");
}
