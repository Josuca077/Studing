class Transfer {
    constructor(sender, receiver, value) {
        this.sender = sender
        this.receiver = receiver
        this.value = value
        this.date = new Date()
    }
}

module.exports = Transfer