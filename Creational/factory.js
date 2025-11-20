/**
  Definition:
    - Factory Pattern is a creational design pattern in software engineering.
    - It used to create objects without specifying their exact class.
    - It provides a way to create objects without having to know their concrete classes.
  */


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Define a factory pattern for creating different types of dishes in a restaurant application.

// Dish interface
// class Dish {
//   constructor(name) {
//     this.name = name;
//   }

//   prepare() {
//     throw new Error("Abstract method - prepare() must be overridden");
//   }

//   cook() {
//     throw new Error("Abstract method - cook() must be overridden");
//   }

//   serve() {
//     throw new Error("Abstract method - serve() must be overridden");
//   }
// }

// // Concrete dishes
// class Pizza extends Dish {
//   prepare() {
//     console.log("Preparing pizza...");
//   }

//   cook() {
//     console.log("Cooking pizza...");
//   }

//   serve() {
//     console.log("Serving pizza!");
//   }
// }

// class Pasta extends Dish {
//   prepare() {
//     console.log("Preparing pasta...");
//   }

//   cook() {
//     console.log("Cooking pasta...");
//   }

//   serve() {
//     console.log("Serving pasta!");
//   }
// }

// class Salad extends Dish {
//   prepare() {
//     console.log("Preparing salad...");
//   }

//   cook() {
//     console.log("No cooking required for salad.");
//   }

//   serve() {
//     console.log("Serving salad!");
//   }
// }

// // Dish Factory
// class DishFactory {
//   createDish(dishType) {
//     switch (dishType) {
//       case "Pizza":
//         return new Pizza("Pizza");
//       case "Pasta":
//         return new Pasta("Pasta");
//       case "Salad":
//         return new Salad("Salad");
//       default:
//         throw new Error("Invalid dish type.");
//     }
//   }
// }

// // Usage
// const dishFactory = new DishFactory();

// const pizza = dishFactory.createDish("Pizza");
// pizza.prepare(); // Preparing pizza...
// pizza.cook(); // Cooking pizza...
// pizza.serve(); // Serving pizza!

// const pasta = dishFactory.createDish("Pasta");
// pasta.prepare(); // Preparing pasta...
// pasta.cook(); // Cooking pasta...
// pasta.serve(); // Serving pasta!

// const salad = dishFactory.createDish("Salad");
// salad.prepare(); // Preparing salad...
// salad.cook(); // No cooking required for salad.
// salad.serve(); // Serving salad!




// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Define a factory pattern for creating different payment method objects in a payment processing application.


// ===== Concrete Payment Classes =====
class PayPalPayment {
  pay(amount) {
    return `💳 Processed $${amount} through PayPal`;
  }
}

class StripePayment {
  pay(amount) {
    return `💰 Processed $${amount} through Stripe`;
  }
}

// ===== Factory Class =====
class PaymentFactory {
  static createPayment(method) {
    switch (method) {
      case 'paypal':
        return new PayPalPayment();
      case 'stripe':
        return new StripePayment();
      default:
        throw new Error('Invalid payment method');
    }
  }
}

// ===== Usage =====
const payment1 = PaymentFactory.createPayment('stripe');
console.log(payment1.pay(100)); // 💰 Processed $100 through Stripe

const payment2 = PaymentFactory.createPayment('paypal');
console.log(payment2.pay(250)); // 💳 Processed $250 through PayPal
