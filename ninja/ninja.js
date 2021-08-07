

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
    drinkShake() {
        this.health += 10
        console.log(this.health)
    }
}

const ninja1 = new Ninja("Hyabusa");

console.log(ninja1)
ninja1.drinkShake()
console.log(ninja1)
ninja1.showStats()
