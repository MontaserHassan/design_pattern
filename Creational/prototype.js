class GameCharacter {
    constructor(name, health, skills) {
        this.name = name;
        this.health = health;
        this.skills = skills;
    }

    clone() {
        return Object.assign(
            Object.create(Object.getPrototypeOf(this)),
            JSON.parse(JSON.stringify(this))
        );
    };
};

// Example usage:
const original = new GameCharacter('Archer', 100, ['Bow', 'Stealth']);
const clone = original.clone();

clone.name = 'Shadow Archer';
clone.skills.push('Poison Arrow');

console.log('Original:', original);
console.log('Clone:', clone);
console.log('original == clone: ', original == clone);
console.log('original === clone: ', original === clone);