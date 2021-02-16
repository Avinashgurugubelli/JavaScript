// Initialize constructor functions


function Person(name, level) {
    this.name = name;
    this.level = level;

    Person.prototype.getInfo = () => {
        return {
            name: this.name,
            level: this.level
        }
    }
}


function Hero(name, level) {

    // Static variable
    Hero.idCounter = ++Hero.idCounter || 1;

    Person.call(this, name, level);

    this.name = name;
    this.level = level;
    this.id = Hero.idCounter;

     // methods overriding
    Hero.prototype.getInfo = () => {
        return {
            id: this.id,
            name: this.name,
            level: this.level
        }
    }
}

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);

    this.weapon = weapon;

    // methods overriding
    Warrior.prototype.getInfo = () => {
        return {
            id: this.id,
            name: this.name,
            level: this.level,
            weapon: this.weapon,
        }
    }
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);

    this.spell = spell;

    // methods overriding
    Healer.prototype.getInfo = () => {
        return {
            id: this.id,
            name: this.name,
            level: this.level,
            spell: this.spell
        }
    }
}

/**
 *  Link prototypes and add prototype methods
 * 
 * Prototype properties and methods are not automatically linked when you use call() to chain constructors. 
 * We will use Object.create() to link the prototypes, making sure to put it before any additional methods are created and added to the prototype.
 */
Hero.prototype = Object.create(Person.prototype);
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

console.log(hero1.getInfo());


console.log(hero2.getInfo());