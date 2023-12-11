const person1 = {
    name: 'Pedro',
    job: 'Programador',
    age: 19,
    city: 'Brasília',
    parents: ['Pedro', 'Julia']
}
const person2 = {
    name: 'Lucas',
    job: 'Dev',
    age: 20,
    city: 'São Paulo',
    parents: ['Jonas', 'Maria']
}

const name1 = person1.name
const { name } = person2

console.log(name1, name)

const { job, age, parents } = person2

console.log(job, age)

const [ father, mother ] = parents

console.log(father, mother)

function createUser (person) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name: person.name,
        job: person.job,
        age: person.age,
        city: person.city,
        parents: person.parents
    }
}
console.log(createUser(person1))

function createUser ({ name, job, age, city, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        age,
        city,
        parents
    }
}
console.log(createUser(person2))