const Installment = require("./installment")

class Loan {
    static #fee = 10
    constructor(value, numOfInstallments) {
        this.value = value
        this.date = new Date()
        this.loanToPay = (value + (value*(Loan.#fee/100)))
        this.installments = []
        for (let index = 0; index < numOfInstallments; index++) {
            this.installments.push(new Installment((this.loanToPay/numOfInstallments),this.installments.length+1))            
        }
    }

    static get readFee() {
        return Loan.#fee
    }

    static set changeFee(newFee) {
        Loan.#fee = newFee
    }
}

module.exports = Loan