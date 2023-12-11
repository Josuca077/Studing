const Character = require("./Character.js");

class Thief extends Character {
    constructor (name, lifePoints, attackPower, defensePoints) {
        super(name, lifePoints, attackPower, defensePoints)
    }
    attackDamage (target) {
        return 2*this.attackPower - target.defensePoints
    }
}

module.exports = Thief