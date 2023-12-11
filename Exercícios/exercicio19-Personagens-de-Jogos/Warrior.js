const Character = require("./Character.js");

class Warrior extends Character {
    constructor(name, lifePoints, attackPower, defensePoints, shieldPoints) {
        super(name, lifePoints, attackPower, defensePoints)
        this.shieldPoints = shieldPoints
        this.defending = false
    }

    changePosition() {
        if(this.defending) {
            this.defending = false
            this.defensePoints -= this.shieldPoints

        } else {
            this.defending = true
            this.defensePoints += this.shieldPoints
        }
    }

    attack(target) {
        if (this.defending === false) {
            super.attack(target)
        } else {
            console.log(`
Um guerreiro não pode atacar enquanto defende!
`)
        }
    }
}

module.exports = Warrior