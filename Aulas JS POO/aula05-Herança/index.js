class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property { }

const land = new Property(200, 50000)
const someHouse = new House(100, 50000)

console.log(land)
console.log(someHouse)
console.log(land.getPricePerSquareMeter(), someHouse.getPricePerSquareMeter())

console.log(someHouse instanceof Property)

class Apartment extends Property {
    constructor(number, area, price) {
        super(area, price)
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const apt = new Apartment("1601", 150, 20000)

console.log(apt)
console.log(apt.getFloor())
console.log(apt.getPricePerSquareMeter())