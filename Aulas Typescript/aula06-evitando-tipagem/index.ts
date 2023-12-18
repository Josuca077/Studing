function sendShip (spaceship: { pilot: string, copilot: string}) {

}
function sendShip2 (spaceship: { pilot: string, copilot?: string}) {

}

sendShip({ pilot: 'josue', copilot: 'costa' })

sendShip({ pilot: 'josue' })

sendShip2({ pilot: 'josue' })

let text: string

let input: unknown

input = 'a'
input = 1
input = true

text = input

let input2: any

input2 = 'a'
input2 = 1
input2 = true

text = input2

function verification(test: boolean) {

    if(test) {

    } else {
        let _check: never = '' //o tipo never indica um bloco de código que nunca deve ser atingido, no caso desse test deve ser sempre true
        return _check
    }

}