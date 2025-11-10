/**
  Defination:
    - Abstract Factory Pattern is a creational design pattern in software engineering
    - It provides an interface for creating families of related objects without specifying their concrete classes.
    - It allows a client to create objects from multiple families without being tightly coupled to their specific implementations.
  */

// Abstract Product: Dish
// class Dish {
//   constructor(name) {
//     this.name = name;
//   }

//   getDescription() {
//     throw new Error("Abstract method - getDescription() must be overridden");
//   }
// }

// // Concrete Products: Italian Dishes
// class Pizza extends Dish {
//   getDescription() {
//     return "Italian Pizza";
//   }
// }

// class Pasta extends Dish {
//   getDescription() {
//     return "Italian Pasta";
//   }
// }

// // Concrete Products: Indian Dishes
// class Curry extends Dish {
//   getDescription() {
//     return "Indian Curry";
//   }
// }

// class Biryani extends Dish {
//   getDescription() {
//     return "Indian Biryani";
//   }
// }

// // Abstract Product: Beverage
// class Beverage {
//   constructor(name) {
//     this.name = name;
//   }

//   getDescription() {
//     throw new Error("Abstract method - getDescription() must be overridden");
//   }
// }

// // Concrete Products: Italian Beverages
// class Wine extends Beverage {
//   getDescription() {
//     return "Italian Wine";
//   }
// }

// class Coffee extends Beverage {
//   getDescription() {
//     return "Italian Coffee";
//   }
// }

// // Concrete Products: Indian Beverages
// class Lassi extends Beverage {
//   getDescription() {
//     return "Indian Lassi";
//   }
// }

// class Chai extends Beverage {
//   getDescription() {
//     return "Indian Chai";
//   }
// }

// // Abstract Factory
// class CuisineFactory {
//   createDish() {
//     throw new Error("Abstract method - createDish() must be overridden");
//   }

//   createBeverage() {
//     throw new Error("Abstract method - createBeverage() must be overridden");
//   }
// }

// // Concrete Factories
// class ItalianCuisineFactory extends CuisineFactory {
//   createDish() {
//     // Return an Italian dish
//     return new Pizza();
//   }

//   createBeverage() {
//     // Return an Italian beverage
//     return new Wine();
//   }
// }

// class IndianCuisineFactory extends CuisineFactory {
//   createDish() {
//     // Return an Indian dish
//     return new Curry();
//   }

//   createBeverage() {
//     // Return an Indian beverage
//     return new Lassi();
//   }
// }

// // Usage
// const italianFactory = new ItalianCuisineFactory();
// const italianDish = italianFactory.createDish();
// const italianBeverage = italianFactory.createBeverage();

// console.log(italianDish.getDescription()); // Output: "Italian Pizza"
// console.log(italianBeverage.getDescription()); // Output: "Italian Wine"

// const indianFactory = new IndianCuisineFactory();
// const indianDish = indianFactory.createDish();
// const indianBeverage = indianFactory.createBeverage();

// console.log(indianDish.getDescription()); // Output: "Indian Curry"
// console.log(indianBeverage.getDescription()); // Output: "Indian Lassi"



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Define a factory pattern for creating different types of UI components based on themes (e.g., Dark Theme, Light Theme).


// Button Interface
// class Button {
//   render() {
//     throw new Error('Method not implemented');
//   }
// }

// // ===== Concrete Buttons =====
// class DarkButton extends Button {
//   render() {
//     return '🖤 Dark Button';
//   }
// }

// class LightButton extends Button {
//   render() {
//     return '🤍 Light Button';
//   }
// }

// // ===== ThemeFactory Interface =====
// class ThemeFactory {
//   createButton() {
//     throw new Error('Method not implemented');
//   }
// }

// // ===== Concrete Factories =====
// class DarkThemeFactory extends ThemeFactory {
//   createButton() {
//     return new DarkButton();
//   }
// }

// class LightThemeFactory extends ThemeFactory {
//   createButton() {
//     return new LightButton();
//   }
// }

// // ===== Usage =====
// const DarkTheme = new DarkThemeFactory();
// const button = DarkTheme.createButton();

// console.log(button.render()); // 🖤 Dark Button

// const lightTheme = new LightThemeFactory();
// console.log(lightTheme.createButton().render()); // 🤍 Light Button


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Define a factory pattern for creating different types of vehicles (e.g., Car, Bike) based on fuel types (e.g., Petrol, Electric).

// Vehicle Interface
class Vehicle {
  drive() {
    throw new Error('Method not implemented');
  }
}

// ===== Concrete Vehicles =====
class PetrolCar extends Vehicle {
  drive() {
    return 'Driving a petrol car';
  }
}

class ElectricCar extends Vehicle {
  drive() {
    return 'Driving an electric car';
  }
}

class PetrolBike extends Vehicle {
  drive() {
    return 'Riding a petrol bike';
  }
}

class ElectricBike extends Vehicle {
  drive() {
    return 'Riding an electric bike';
  }
}

// ===== VehicleFactory Interface =====
class VehicleFactory {
  createCar() {
    throw new Error('Method not implemented');
  }

  createBike() {
    throw new Error('Method not implemented');
  }
}

// ===== Concrete Factories =====
class PetrolVehicleFactory extends VehicleFactory {
  createCar() {
    return new PetrolCar();
  }

  createBike() {
    return new PetrolBike();
  }
}

class ElectricVehicleFactory extends VehicleFactory {
  createCar() {
    return new ElectricCar();
  }

  createBike() {
    return new ElectricBike();
  }
}

// ===== Usage =====
const petrolFactory = new PetrolVehicleFactory();
const petrolCar = petrolFactory.createCar();
const petrolBike = petrolFactory.createBike();

console.log(petrolCar.drive()); // Driving a petrol car
console.log(petrolBike.drive()); // Riding a petrol bike

const electricFactory = new ElectricVehicleFactory();
const electricCar = electricFactory.createCar();
const electricBike = electricFactory.createBike();

console.log(electricCar.drive()); // Driving an electric car
console.log(electricBike.drive()); // Riding an electric bike




// --------------------------------------------------------------------------------------------------------------------------------------------------------------------




// ===== Products =====
class Chair {
  sit() { throw new Error('Not implemented'); }
}
class Sofa {
  lie() { throw new Error('Not implemented'); }
}
class Table {
  use() { throw new Error('Not implemented'); }
}

// ===== Modern Furniture =====
class ModernChair extends Chair { sit() { return 'Sitting on Modern Chair'; } }
class ModernSofa extends Sofa { lie() { return 'Lying on Modern Sofa'; } }
class ModernTable extends Table { use() { return 'Using Modern Table'; } }

// ===== Victorian Furniture =====
class VictorianChair extends Chair { sit() { return 'Sitting on Victorian Chair'; } }
class VictorianSofa extends Sofa { lie() { return 'Lying on Victorian Sofa'; } }
class VictorianTable extends Table { use() { return 'Using Victorian Table'; } }

// ===== Abstract Factory =====
class FurnitureFactory {
  createChair() { throw new Error('Not implemented'); }
  createSofa() { throw new Error('Not implemented'); }
  createTable() { throw new Error('Not implemented'); }
}

// ===== Concrete Factories =====
class ModernFurnitureFactory extends FurnitureFactory {
  createChair() { return new ModernChair(); }
  createSofa() { return new ModernSofa(); }
  createTable() { return new ModernTable(); }
}

class VictorianFurnitureFactory extends FurnitureFactory {
  createChair() { return new VictorianChair(); }
  createSofa() { return new VictorianSofa(); }
  createTable() { return new VictorianTable(); }
}

// ===== Usage =====
function client(factory) {
  console.log(factory.createChair().sit());
  console.log(factory.createSofa().lie());
  console.log(factory.createTable().use());
}

console.log('--- Modern Furniture ---');
client(new ModernFurnitureFactory());

console.log('--- Victorian Furniture ---');
client(new VictorianFurnitureFactory());
