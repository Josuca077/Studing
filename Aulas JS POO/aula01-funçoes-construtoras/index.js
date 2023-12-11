/* const register = {
    name: "Josué",
    age: 19,
    registered: true,
    birthDay: {
        day: 9,
        month: "november",
        year: 2003
    },
    universities: ["CEUB", "Estácio"],
    getOlder(){
        this.age += 1
    },
    save: function(){
        //salvar no banco de dados
    }
}*/

function Register(name, age, birthDay, universities){
    this.name = name
    this.age = age
    this.registered = false
    this.birthDay = birthDay
    this.universities = universities
    this.getOlder = function(){
        this.age += 1
    }
    this.save = function save(){
        // blablabla
    }
}

const birthDay = {
    day: 9,
    month: "november",
    year: 2003
}
const universities = ["CEUB", "Estácio"]

const josue = new Register("Josué", 19, birthDay, universities)

console.log(josue)

josue.getOlder()

console.log(josue)