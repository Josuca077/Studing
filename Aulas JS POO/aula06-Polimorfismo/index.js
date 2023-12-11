class Vehicle {
    move(speed) {
        console.log(`O veículo está se movendo a ${speed} km/hr`)
    }
}

class Car extends Vehicle {
    move(speed) {
        console.log(`O carro está se movendo a ${speed} km/hr`)
    }
}

class Bike extends Vehicle {
    move(speed) {
        console.log(`A bike está se movendo a ${speed} km/hr`)
    }
}

const car = new Car()
const bike = new Bike()
const vehicle = new Vehicle()

//car.move()
//vehicle.move()
//bike.move(10)

function start (vehicle, speed) {
    console.log("Iniciando um veículo...")
    vehicle.move(speed)
}

start(car, 50)
start(bike, 15)
start(vehicle, 80)