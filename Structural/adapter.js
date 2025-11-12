/**
    Defination:
        - Adapter Pattern is a structural design pattern in software engineering
        - It allows incompatible interfaces to work together.
        - It acts as a bridge between two incompatible interfaces.
*/


// class Adaptee {
//   specificRequest() {
//     return "Adaptee's specific request";
//   }
// }

// class Target {
//   request() {
//     throw new Error("Abstract method - request() must be overridden");
//   }
// }

// class Adapter extends Target {
//   constructor() {
//     super();
//       this.adaptee = new Adaptee();
//   }

//   request() {
//     const result = this.adaptee.specificRequest();
//     // Additional adaptation or transformation logic if needed
//     return `Adapter: ${result}`;
//   }
// }

// // Usage
// const adapter = new Adapter();
// console.log(adapter.request()); // Output: "Adapter: Adaptee's specific request"



// -------------------------------------------------------------------------------------------------------------------------------------


// --- Old System (Legacy / Third-party) ---
class OldPaymentSystem {
  sendPayment(amountInCents) {
    console.log(`Processing payment of ${amountInCents} cents via OldPaymentSystem`);
  }
}

// --- Target Interface (what the client expects) ---
class Payment {
  pay(amountInDollars) {
    throw new Error(`input: ${amountInDollars} - Error:Method not implemented`);
  }
}

// --- Adapter ---
class PaymentAdapter extends Payment {
  constructor(oldPaymentSystem) {
    super();
    this.oldPaymentSystem = oldPaymentSystem;
  }

  pay(amountInDollars) {
    const amountInCents = amountInDollars * 100;
    this.oldPaymentSystem.sendPayment(amountInCents);
  }
}

// --- Client Code ---
function processPayment(payment, amount) {
  payment.pay(amount);
}

// --- Usage ---
const oldSystem = new OldPaymentSystem();
const adapter = new PaymentAdapter(oldSystem);


processPayment(adapter, 50); // Output: Processing payment of 5000 cents via OldPaymentSystem


// -------------------------------------------------------------------------------------------------------------------------------------
