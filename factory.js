// Dish interface
class Dish {
    constructor(name) {
      this.name = name;
    }
  
    prepare() {
      throw new Error("Abstract method - prepare() must be overridden");
    }
  
    cook() {
      throw new Error("Abstract method - cook() must be overridden");
    }
  
    serve() {
      throw new Error("Abstract method - serve() must be overridden");
    }
  }
  
  // Concrete dishes
  class Pizza extends Dish {
    prepare() {
      console.log("Preparing pizza...");
    }
  
    cook() {
      console.log("Cooking pizza...");
    }
  
    serve() {
      console.log("Serving pizza!");
    }
  }
  
  class Pasta extends Dish {
    prepare() {
      console.log("Preparing pasta...");
    }
  
    cook() {
      console.log("Cooking pasta...");
    }
  
    serve() {
      console.log("Serving pasta!");
    }
  }
  
  class Salad extends Dish {
    prepare() {
      console.log("Preparing salad...");
    }
  
    cook() {
      console.log("No cooking required for salad.");
    }
  
    serve() {
      console.log("Serving salad!");
    }
  }
  
  // Dish Factory
  class DishFactory {
    createDish(dishType) {
      switch (dishType) {
        case "Pizza":
          return new Pizza("Pizza");
        case "Pasta":
          return new Pasta("Pasta");
        case "Salad":
          return new Salad("Salad");
        default:
          throw new Error("Invalid dish type.");
      }
    }
  }
  
  // Usage
  const dishFactory = new DishFactory();
  
  const pizza = dishFactory.createDish("Pizza");
  pizza.prepare();
  pizza.cook();
  pizza.serve();
  // Output:
  // Preparing pizza...
  // Cooking pizza...
  // Serving pizza!
  
  const pasta = dishFactory.createDish("Pasta");
  pasta.prepare();
  pasta.cook();
  pasta.serve();
  // Output:
  // Preparing pasta...
  // Cooking pasta...
  // Serving pasta!
  
  const salad = dishFactory.createDish("Salad");
  salad.prepare();
  salad.cook();
  salad.serve();
  // Output:
  // Preparing salad...
  // No cooking required for salad.
  // Serving salad!
  