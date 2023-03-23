// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

// Done with objects
const animal = {};
const cat = {};
animal.move = "run";
Object.setPrototypeOf(cat, animal);

console.log('Show animal -', animal);
console.log('Show cat - ', cat);
console.log('Show moves by cat - ', cat.move);
console.log('Show inherited property - ', Object.getPrototypeOf(cat));
console.log('Is animal the prototype of cat?', animal.isPrototypeOf(cat));

// Done with classes
class Animals {
    constructor (type, move, home) {
        this.type = type;
        this.move = move;
        this.home = home;
    }
    showData() {
        console.log(`The animal ${this.type}, lives at ${this.home}, can ${this.move}.`);
    }
}

class Cats extends Animals {
    constructor (type, move, home, nickname) {
        super (type, move, home);
        this.nickname = nickname;
    }
    sayWow() {
        console.log(`What a pretty little ${this.nickname}!`)
    }
    showData() {
        super.showData();
        console.log('I love cats')
    }
}

const wolf = new Animals ("wolf", "run", "forest");
wolf.showData();

const persian = new Cats ("cat", "jump", "house", "Puffy");
persian.sayWow();
persian.showData();