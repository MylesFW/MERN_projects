class Ninja {
    constructor(name, health=10, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log( this.name, this.strength, this.speed, this.health );
    }
    drinkSake() {
        this.health += 10
        console.log(this.health)
    }
}

class Sensei extends Ninja {
    constructor (name, health=200, speed=10, strength=10, wisdom=10) { // constructor (name, wisdom=10) { 
        super(name, health, speed, strength) // super(name, 200, 10, 10)
        this.wisdom = wisdom
    }
    speakWisdom() {
            super.drinkSake()
        console.log("It's MR. Sensai to you.")
    }
    drinkSake() {
        super.drinkSake()
    }
}

const sensai1 = new Sensei("Master Splinter");
const ninja1 = new Ninja("Hyabusa");

console.log(ninja1)
console.log(sensai1)

sensai1.speakWisdom()
sensai1.drinkSake()