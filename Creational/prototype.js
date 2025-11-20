/**
    Definition:
        - Prototype Pattern is a creational design pattern in software engineering.
        -It used to create new objects by copying the prototype of an existing object.
*/


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




// ------------------------------------------------------------------------------------------------------------------------------------------



class AppConfig {
    constructor(dbHost, dbPort, jwtSecret) {
        this.dbHost = dbHost;
        this.dbPort = dbPort;
        this.jwtSecret = jwtSecret;
    }

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this); // Shallow copy is sufficient here as all properties are primitives (string, number, boolean).
    }
}

// ===== Usage =====
const baseConfig = new AppConfig('localhost', 27017, 'secret123');
const stagingConfig = baseConfig.clone();

stagingConfig.dbHost = 'staging-db.server.com';

console.log('baseConfig.dbHost: ', baseConfig.dbHost);   // baseConfig.dbHost: localhost
console.log('stagingConfig.dbHost: ', stagingConfig.dbHost); // stagingConfig.dbHost: staging-db.server.com