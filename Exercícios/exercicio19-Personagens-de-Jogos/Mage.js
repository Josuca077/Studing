const Character = require("./Character.js");

class Mage extends Character {
    constructor(name, lifePoints, attackPower, defensePoints, magicPoints) {
        super(name, lifePoints, attackPower, defensePoints)
        this.magicPoints = magicPoints
    }

    attackDamage(target) {
        return ((this.attackPower + this.magicPoints) - target.defensePoints)
    }

    healAlly(ally) {
        ally.lifePointsNow += 2*this.magicPoints
        if (ally.lifePointsNow > ally.lifePointsFull) {
            ally.lifePointsNow = ally.lifePointsFull
        }
        console.log(`
${this.name} curou ${2*this.magicPoints} pontos de vida de ${ally.name}
${ally.name} está com ${ally.lifePointsNow}/${ally.lifePointsFull} de vida!
`)
    }
}

module.exports = Mage