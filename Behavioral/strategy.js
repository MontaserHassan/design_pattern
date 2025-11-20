/**
    Definition :
        - Strategy Pattern is a behavioral design pattern in software engineering.
        - It enables selecting an algorithm's behavior at runtime.
        - The strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.
        - This pattern lets the algorithm vary independently from clients that use it.
*/



// --- Strategy Interfaces (different algorithms) ---

class PayPalStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

class CreditCardStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

class CashStrategy {
    pay(amount) {
        console.log(`Paid $${amount} in cash.`);
    }
}

// --- Context Class ---
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    // Switch payment strategy at runtime
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    pay(amount) {
        if (!this.strategy) {
            throw new Error("Payment strategy not set!");
        }
        this.strategy.pay(amount);
    }
}

// --- Usage ---

const payment = new PaymentContext();

// choose PayPal
payment.setStrategy(new PayPalStrategy());
payment.pay(100); // Paid $100 using PayPal.

// switch to Credit Card
payment.setStrategy(new CreditCardStrategy());
payment.pay(200); // Paid $200 using Credit Card.

// switch to Cash
payment.setStrategy(new CashStrategy());
payment.pay(50); // Paid $50 in cash.
