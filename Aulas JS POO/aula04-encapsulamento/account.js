class Account {
    #password
    #balance = 0
    #email

    constructor(user) {
        this.name = user.name
        this.#email = user.email
        this.#password = user.password       
    }
    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }
    #authenticate(email, password) {
        return this.#email === email && this.#password === password
    }

    moreBalance(email, password, value) {
        if (this.#authenticate(email, password)) {
            this.#balance += value
        }
    }
}

const user = {
    name: "Josué Costa",
    email: "josuecosta077@gmail.com",
    password: "123456"
}

const user1 = new Account(user)

//user1.password = "123321"

console.log(user1)
console.log(user1.getBalance("josuecosta077@gmail.com", "123456"))

user1.moreBalance("josuecosta077@gmail.com", "123456", 123563)

console.log(user1.getBalance("josuecosta077@gmail.com", "123456"))
console.log(user1)