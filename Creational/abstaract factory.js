// Abstract Product: Dish
class Dish {
    constructor(name) {
      this.name = name;
    }
  
    getDescription() {
      throw new Error("Abstract method - getDescription() must be overridden");
    }
  }
  
  // Concrete Products: Italian Dishes
  class Pizza extends Dish {
    getDescription() {
      return "Italian Pizza";
    }
  }
  
  class Pasta extends Dish {
    getDescription() {
      return "Italian Pasta";
    }
  }
  
  // Concrete Products: Indian Dishes
  class Curry extends Dish {
    getDescription() {
      return "Indian Curry";
    }
  }
  
  class Biryani extends Dish {
    getDescription() {
      return "Indian Biryani";
    }
  }
  
  // Abstract Product: Beverage
  class Beverage {
    constructor(name) {
      this.name = name;
    }
  
    getDescription() {
      throw new Error("Abstract method - getDescription() must be overridden");
    }
  }
  
  // Concrete Products: Italian Beverages
  class Wine extends Beverage {
    getDescription() {
      return "Italian Wine";
    }
  }
  
  class Coffee extends Beverage {
    getDescription() {
      return "Italian Coffee";
    }
  }
  
  // Concrete Products: Indian Beverages
  class Lassi extends Beverage {
    getDescription() {
      return "Indian Lassi";
    }
  }
  
  class Chai extends Beverage {
    getDescription() {
      return "Indian Chai";
    }
  }
  
  // Abstract Factory
  class CuisineFactory {
    createDish() {
      throw new Error("Abstract method - createDish() must be overridden");
    }
  
    createBeverage() {
      throw new Error("Abstract method - createBeverage() must be overridden");
    }
  }
  
  // Concrete Factories
  class ItalianCuisineFactory extends CuisineFactory {
    createDish() {
      // Return an Italian dish
      return new Pizza();
    }
  
    createBeverage() {
      // Return an Italian beverage
      return new Wine();
    }
  }
  
  class IndianCuisineFactory extends CuisineFactory {
    createDish() {
      // Return an Indian dish
      return new Curry();
    }
  
    createBeverage() {
      // Return an Indian beverage
      return new Lassi();
    }
  }
  
  // Usage
  const italianFactory = new ItalianCuisineFactory();
  const italianDish = italianFactory.createDish();
  const italianBeverage = italianFactory.createBeverage();
  
  console.log(italianDish.getDescription()); // Output: "Italian Pizza"
  console.log(italianBeverage.getDescription()); // Output: "Italian Wine"
  
  const indianFactory = new IndianCuisineFactory();
  const indianDish = indianFactory.createDish();
  const indianBeverage = indianFactory.createBeverage();
  
  console.log(indianDish.getDescription()); // Output: "Indian Curry"
  console.log(indianBeverage.getDescription()); // Output: "Indian Lassi"
  