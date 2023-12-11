const App = require("./App");

App.createUser('Josue', 'josue@email.com', '123456')
App.createUser('Gabi', 'gabi@email.com', '123456')
App.createUser('Josue', 'josue@email.com', '123456')

App.deposit('josue@email.com', 100000)
App.loan('josue@email.com', 200000, 100)

App.payInstallment('josue@email.com', 0)
console.log(App.showOperations('josue@email.com'))
console.log(App.showBalance('josue@email.com'))

App.transfer('josue@email.com', 'gabi@email.com', 10000)

console.log(App.showBalance('josue@email.com'))
console.log(App.showBalance('gabi@email.com'))

App.changeFee(100)

App.loan('gabi@email.com', 100000, 10)

console.log(App.showOperations('gabi@email.com'))
console.log(App.findAccount('josue@email.com'))
console.log(App.findAccount('gabi@email.com'))