class User {
    constructor(name, surname, email, password){
        this.fullname = `${name} ${surname}`
        this.email = email
        this.password = password
    }
    login(email, password){
        if (email === this.email && password === this.password) {
            console.log("Login efetuado com sucesso!")
        } else {
            if (email !== this.email) {
                console.log("Email incorreto!")
            } else {
                console.log("Senha incorreta!")
            }
        }
    }
}

const josue = new User("Josué", "Costa", "josuecosta077@gmail.com", "Feyj2003")

console.log(josue)

josue.login("josuecosta777@gmail.com", "Feyj2003")
josue.login("josuecosta077@gmail.com", "Fey2003")
josue.login("josuecosta077@gmail.com", "Feyj2003")
