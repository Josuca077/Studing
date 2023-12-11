const User = require("./entities/User")
const Loan = require("./entities/Loan")

class App {
    static #userList = []

    static findAccount(email) {
        for (let index = 0; index < App.#userList.length; index++) {
            if (App.#userList[index].email === email) {
                return App.#userList[index]
            }
        }
        return
    }

    static userExists(email) {
        const findEmail = App.findAccount(email)
        return findEmail?.email === email
    }

    static createUser(name, email, password) {
        if(!App.userExists(email)) {
            const user = new User(name, email, password)
            App.#userList.push(user)
            return user
        } else {
            console.log(`Já existe um usuário com o email: ${email}!`)
        }
    }
    
    static deposit(email, value) {
        const userFound = App.findAccount(email)
        if(userFound) {
            userFound.account.newDeposit(value)
        } else {
            console.log(`Não existe em nosso banco de dados uma conta com o email: ${email}`)
        }
    }

    static transfer(senderEmail, receiverEmail, value) {
        const senderFound = App.findAccount(senderEmail)
        const receiverFound = App.findAccount(receiverEmail)
        if(senderFound && receiverFound) {
            senderFound.account.newTransfer(senderFound, receiverFound, value)
        } else {
            console.log(`Alguma das contas escritas não está presente em nosso banco de dados`)
        }
    }

    static loan(email, value, installments) {
        const userFound = App.findAccount(email)
        if(userFound) {
            userFound.account.newLoan(value, installments)
        } else {
            console.log(`Não existe em nosso banco de dados uma conta com o email: ${email}`)
        }
    }

    static changeFee(newFee) {
            Loan.changeFee = newFee
    }

    static payInstallment(email, loanIndex) {
        const userFound = App.findAccount(email)
        if(userFound) {
            const loanInstallments = userFound.account.showOperations.loans[loanIndex].installments
            if(userFound.account.showBalance >= loanInstallments[0].value) {
                for (let index = 0; index < loanInstallments.length; index++) {
                    if(!(loanInstallments[index].paid)) {
                        loanInstallments[index].paid = true
                        userFound.account.newDeposit(-loanInstallments[index].value)
                        userFound.account.payInstallment(loanInstallments[index].value, index)
                        return
                    }
                }
            } else {
                console.log(`Saldo insuficiente!`)
                return
            }
            console.log(`Esse empréstimo já foi pago!`)
        } else {
            console.log(`Não existe em nosso banco de dados uma conta com o email: ${email}`)
        }
    }

    static showBalance(email){
        const userFound = App.findAccount(email)
        if(userFound) {
            return userFound.account.showBalance
        } else {
            console.log(`Não existe em nosso banco de dados uma conta com o email: ${email}`)
        }
    }

    static showOperations(email){
        const userFound = App.findAccount(email)
        if(userFound) {
            return userFound.account.showOperations
        } else {
            console.log(`Não existe em nosso banco de dados uma conta com o email: ${email}`)
        }
    }

    static get showUsers() {
        return App.#userList
    }
}

module.exports = App