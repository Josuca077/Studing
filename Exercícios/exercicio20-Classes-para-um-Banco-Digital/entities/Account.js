const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

class Account {
    #balance = 0
    #operations = {
        deposits: [],
        transfers: [],
        loans: []
    }

    constructor(owner) {
        this.owner = owner
    }

    get showBalance() {
        return this.#balance
    }

    newDeposit(value) {
        const deposit = new Deposit(value)
        this.#balance += value
        this.#operations.deposits.push(deposit)
    }

    newLoan(value, installments) {
        const loan = new Loan(value, installments)
        this.#balance += value
        this.#operations.loans.push(loan)
    }

    newTransfer(sender, receiver, value) {
        const transfer = new Transfer(sender, receiver, value)
        if (sender.account.showBalance >= value){

            if (sender === this.owner) {

                receiver.account.newTransfer(sender, receiver, value)
                this.#balance -= value

            } else if(receiver === this.owner) {

                this.#balance += value    

            } else if(receiver === sender) {

                return console.log(`Você não pode realizar uma transferência para si mesmo`)

            } else {

                return console.log(`Você não pode executar uma transferência da conta de terceiros`)
                
            }
            this.#operations.transfers.push(transfer)
        } else {

            console.log(`Saldo insuficiente!`)
        }
    }

    payInstallment(value, loanIndex) {
        this.#operations.loans[loanIndex].loanToPay -= value
    }

    get showOperations() {
        return this.#operations
    }
}

module.exports = Account