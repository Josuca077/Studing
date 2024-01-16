function first(array) {
    return array[0]
}

function last<ArrayType> (array: ArrayType[]): ArrayType | undefined {
    return array[-1]
}

const pilots = ["Luke", "Biggs", "Wedge", "Han", "Lando"]

const firstPilot = first(pilots)
const lastPilot = last(pilots)

interface Ship {
    name: string
    pilot: string
}

interface EnemyShip {
    name: string
    pilot: string
    flag?: string
}

interface Fighter extends Ship {
    weapons: number
    shields: number
}

interface Transport extends Ship {
    capacity: number
}

interface Speeder extends Ship {
    speed: number
    acceleration: number
}

function cloneShip<ShipType extends Ship> (ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship

    newShip.name = newName
    newShip.pilot = newPilot

    return newShip
}

const falcon: Ship = {
    name: "Millenium Falcon",
    pilot: "Han"
}

const xWing: Fighter = {
    name: "Red Five",
    pilot: "Luke",
    weapons: 4,
    shields: 1
}

const copy1 = cloneShip(falcon, "Milano", "Peter")
const copy2 = cloneShip(xWing, "Black One", "Poe")

const copyEnemy1 = cloneShip(falcon, "Enemy", "Enemy")
const copyEnemy2 = cloneShip<EnemyShip>(falcon, "Enemy", "Enemy")

copyEnemy1.flag = "imperial"
copyEnemy2.flag = "imperial"

class Pilot <ShipType> {
    name: string
    ship: ShipType

    constructor(name: string, ship: ShipType) {
        this.name = name
        this.ship = ship
    }
}

const han = new Pilot('Han Solo', falcon)
const luke = new Pilot<Fighter>('Luke', xWing)
