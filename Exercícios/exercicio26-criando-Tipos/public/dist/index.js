const planets = [];
function savePlanet(name, coordinates, situation) {
    const planet = {
        name,
        coordinates,
        situation,
        satellites: []
    };
    planets.push(planet);
}
savePlanet("planet1", [1, 1, 1, 1], "habitado");
console.log(planets);
