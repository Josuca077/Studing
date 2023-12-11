const Account = require("./Account")

class User {
    constructor(fullName, email) {
        this.name = fullName
        this.email = email
        this.account = new Account(this)
    }
}

module.exports = User