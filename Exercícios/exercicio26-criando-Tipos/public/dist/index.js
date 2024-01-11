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
function updateSituation(planet, situation) {
    planet.situation = situation;
}
function addSatellite(planet, satellite) {
    planet.satellites.push(satellite);
}
function removeSatellite(planet, satellite) {
    if (planet.satellites.includes(satellite)) {
        planet.satellites = planet.satellites.filter((item) => item !== satellite);
    }
    else {
        alert(`O satélite ${satellite} não está registrado no Planeta ${planet.name}`);
        alert("Retornando para o menu...");
    }
}
function listPlanets() {
    alert(planets.reduce((mensage, planet) => {
        return (`${mensage}
${planet.name}:

Coordenadas: ${planet.coordinates[0]} ${planet.coordinates[1]} ${planet.coordinates[2]} ${planet.coordinates[3]}
Situação: ${planet.situation}
Satélites: ${planet.satellites.reduce((list, satellite) => {
            return (`${list}${satellite}  `);
        }, "")}
        
`);
    }, ""));
}
function chooseSituation() {
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
                return "habitado";
            case 2:
                return "habitável";
            case 3:
                return "inabitável";
            case 4:
                return "inexplorado";
        }
    } while (choice !== 1 && choice !== 2 && choice !== 3 && choice !== 4);
}
function openMenu() {
    const choice = parseFloat(prompt(`Escolha a Ação:

1- Registrar Planeta
2- Atualizar Situação
3- Adicionar Satélite
4- Remover Satélite
5- Listar Planetas

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
        case 5:
            choice5();
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
    let coordinates1;
    let coordinates2;
    let coordinates3;
    let coordinates4;
    let confirmation;
    try {
        findPlanet(name);
    }
    catch {
        do {
            coordinates1 = parseFloat(prompt("Digite o primeiro das coordenadas:"));
            coordinates2 = parseFloat(prompt("Digite o segundo das coordenadas:"));
            coordinates3 = parseFloat(prompt("Digite o terceiro das coordenadas:"));
            coordinates4 = parseFloat(prompt("Digite o quarto das coordenadas:"));
            confirmation = true;
            if (isNaN(coordinates1) || isNaN(coordinates2) || isNaN(coordinates3) || isNaN(coordinates4)) {
                alert("Todas as coordenadas devem ser números!");
                confirmation = false;
            }
        } while (!confirmation);
        const situation = chooseSituation();
        registerPlanet(name, [coordinates1, coordinates2, coordinates3, coordinates4], situation);
    }
    openMenu();
}
function choice2() {
    const name = prompt("Escreva o nome do planeta que deseja alterar a situação:");
    try {
        updateSituation(findPlanet(name), chooseSituation());
    }
    catch (error) {
        alert(error.message);
        alert("Voltando para o Menu...");
    }
    openMenu();
}
function choice3() {
    const name = prompt("Escreva o nome do planeta que deseja adicionar um satélite:");
    try {
        addSatellite(findPlanet(name), prompt(`Escreva o nome do Satélite de ${name}:`));
    }
    catch (error) {
        alert(error.message);
        alert("Voltando para o Menu...");
    }
    openMenu();
}
function choice4() {
    const name = prompt("Escreva o nome do planeta que deseja remover um satélite:");
    try {
        removeSatellite(findPlanet(name), prompt(`Escreva o nome do Satélite que deseja remover de ${name}:`));
    }
    catch (error) {
        alert(error.message);
        alert("Voltando para o Menu...");
    }
    openMenu();
}
function choice5() {
    listPlanets();
    openMenu();
}
function exit() {
    alert("Fechando Menu...");
    alert("Menu Fechado!");
}
