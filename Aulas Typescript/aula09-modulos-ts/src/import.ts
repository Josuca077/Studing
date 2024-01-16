import { Spaceship } from "../src/export"
import * as _ from "lodash"

interface Battleship extends Spaceship {
    weapom: number
}

let xwing: Battleship = {
    name: "X-wing",
    pilot: "Luke Skywalker",
    speed: 10,
    weapom: 2
}

console.log(_.camelCase(xwing.pilot))