const planets = []

function savePlanet (name: string, coordinates: [number, number, number, number], situation: "habitado" | "habitável" | "inabitável" | "inexplorado") {

    const planet = {
        name,
        coordinates,
        situation,
        satellites: []
    }

    planets.push(planet)
}

savePlanet("planet1", [1,1,1,1], "habitado")

console.log(planets)