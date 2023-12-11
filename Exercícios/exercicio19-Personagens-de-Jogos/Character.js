class Character {
    constructor(name, lifePoints, attackPower, defensePoints) {
        this.name = name
        this.lifePointsFull = lifePoints
        this.lifePointsNow = lifePoints
        this.attackPower = attackPower
        this.defensePoints = defensePoints
        this.alive = true
    }
    attack(target) {
        if (target instanceof Character) {
            this.isDead(target)

            if (target.alive === false){

                this.isDead(target)

            } else {

                const damage = this.attackDamage(target)
                if (damage <= 0) {
                    console.log(`
O alvo não recebeu dano!
`)
                } else {
                    target.lifePointsNow -= damage
                }
                target.lifePointsNow = target.lifePointsNow <= 0 ? 0 : target.lifePointsNow
                console.log(`
${this.name} causou ${damage} pontos de dano em ${target.name}
${target.name} está com ${target.lifePointsNow}/${target.lifePointsFull} de vida!
`)
                this.isDead(target)
            }
        } else {

            console.log(`
Ataque um alvo válido!
`)

        }
    }

    isDead(target) {
        if (target.lifePointsNow <= 0) {
            target.alive = false
            target.lifePointsNow = 0
            console.log(`
Esse alvo está morto!
`)
        }
    }

    attackDamage(target) {
        return (this.attackPower - target.defensePoints)
    }
}

module.exports = Character