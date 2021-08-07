


class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor (name, cost, power, resilience) {
        super(name, cost)
        this.power = power
        this.resilience = resilience
    }
    attack(target) {
        target.resilience -= this.power // target.res = target.res - this.power
    }
}

class Effect extends Card {
    constructor (name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this. magnitude = magnitude
    }
    play( target ) {
        if( target instanceof Unit ) {
            target[this.stat] += this.magnitude
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


const unit_red_belt = new Unit("Red Belt Ninja: Steven ", 3, 3, 4)
const unit_black_belt = new Unit("Black Belt Ninja: Master Tim", 4, 5, 4)

const effect_hard_algorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2)


console.log(unit_red_belt, unit_black_belt)
console.log("***************************************") 

effect_hard_algorithm.play(unit_red_belt) // unit_red_belt increases their resilience +3

console.log(unit_red_belt, unit_black_belt)
console.log("***************************************")

unhandledPromiseRejection.play(unit_black_belt) // unit_black_belt reduces the resilience -2

console.log(unit_red_belt, unit_black_belt)
console.log("***************************************")

pairProgramming.play(unit_red_belt) // unit_red_belt increases their power +2

console.log(unit_red_belt, unit_black_belt)
console.log("***************************************")

unit_red_belt.attack(unit_black_belt) // unit_red_belt deals +5 damage to unit_black_belt

console.log(unit_red_belt, unit_black_belt)
console.log("***************************************")



// console.log(unit_red_belt)
// console.log(unit_black_belt)

// console.log(effect_hard_algorithm)
// console.log(unhandledPromiseRejection)
// console.log(pairProgramming)
