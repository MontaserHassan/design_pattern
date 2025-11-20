/**
    Definition:
        - Saga is a Distributed Transaction Pattern or Microservices Data Management Pattern in software engineering
        - It is used to manage data consistency across multiple services without using distributed transactions.
        - It is a pattern that coordinates the execution of multiple microservices to ensure data integrity and consistency.
*/



// // Simulated asynchronous action
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // step: Payment
// async function handlePayment(order) {
//     console.log("Processing payment for order:", order);
//     await delay(1000); // Simulate payment processing
//     const random = Math.random();
//     console.log('payment time: ', random);
//     if (random < 0.8) {
//         console.log("Payment successful.");
//         return true;
//     } else {
//         console.log("Payment failed.");
//         return false;
//     }
// }

// // step: Prepare food
// async function prepareFood(order) {
//     console.log("Preparing food for order:", order);
//     await delay(1500); // Simulate food preparation
//     const random = Math.random();
//     console.log('prepare time: ', random);
//     if (random < 0.9) {
//         console.log("Food prepared.");
//         return true;
//     } else {
//         console.log("Food preparation failed.");
//         return false;
//     }
// }

// // step: Deliver food
// async function deliverFood(order) {
//     console.log("Delivering food for order:", order);
//     await delay(2000); // Simulate food delivery
//     const random = Math.random();
//     console.log('delivered time: ', random);
//     if (random < 0.95) {
//         console.log("Food delivered.");
//         return true;
//     } else {
//         console.log("Food delivery failed.");
//         return false;
//     }
// }

// // Saga orchestrator
// async function orderSaga(order) {
//     const paymentSuccess = await handlePayment(order);
//     console.log(paymentSuccess);
//     if (paymentSuccess) {
//         const foodPrepared = await prepareFood(order);
//         if (foodPrepared) {
//             const foodDelivered = await deliverFood(order);
//             if (!foodDelivered) {
//                 console.log("Compensating: Refunding payment and undoing food preparation.");
//             }
//         } else {
//             console.log("Compensating: Refunding payment.");
//         }
//     } else {
//         console.log("Saga failed: Payment unsuccessful.");
//     }
// }

// const order = { orderId: "123", items: ["Burger", "Fries"], totalAmount: 20 };
// orderSaga(order);



// ----------------------------------------------------------------------------------------------------------------------------------



// ---------------- Utility Helper ----------------
function wait(ms) {
    return new Promise(res => setTimeout(res, ms));
}

// ---------------- Step 1: Payment Service ----------------
const PaymentService = {
    async charge(amount) {
        console.log("Charging payment:", amount);
        await wait(200);

        if (amount > 1000) throw new Error("Payment declined"); // simulate failure

        return { transactionId: "tx_123" };
    },

    async refund(transactionId) {
        console.log("Refunding payment:", transactionId);
        await wait(200);
    }
};

// ---------------- Step 2: Order Service ----------------
const OrderService = {
    async updateOrder(orderId) {
        console.log("Updating order:", orderId);
        await wait(200);

        // simulate a random failure
        if (orderId === "fail-order") throw new Error("Order update failed");

        return true;
    },

    async revertOrder(orderId) {
        console.log("Reverting order:", orderId);
        await wait(200);
    }
};

// ---------------- Step 3: Email Service ----------------
const EmailService = {
    async sendConfirmation(email) {
        console.log("Sending confirmation to:", email);
        await wait(200);

        // simulate failure
        if (email === "fail@email.com")
            throw new Error("Email service failed");

        return true;
    }
};

// ------------------------------------------------------
// 🧩 Saga Orchestrator
// ------------------------------------------------------
class PaymentSaga {
    constructor() {
        this.state = {};
    }

    async execute({ amount, orderId, email }) {
        console.log("\n=== Starting Saga ===");

        try {
            // Step 1: Charge Payment
            this.state.payment = await PaymentService.charge(amount);

            // Step 2: Update Order
            await OrderService.updateOrder(orderId);

            // Step 3: Send Email
            await EmailService.sendConfirmation(email);

            console.log("✅ Saga Completed Successfully");
        } catch (err) {
            console.log("\n❌ Saga Failed:", err.message);
            await this.compensate();
        }
    }

    // --------------------------------------------------
    // 🔄 Compensation Logic (Rollback)
    // --------------------------------------------------
    async compensate() {
        console.log("=== Running Compensation ===");
        console.log('this.state: ', this.state);

        if (this.state.payment) {
            await PaymentService.refund(this.state.payment.transactionId);
        }

        // order update compensation
        await OrderService.revertOrder("order-123");

        console.log("🧹 Saga Rollback Complete");
    }
}

// ------------------------------------------------------
// 🚀 Run Sagas
// ------------------------------------------------------

const saga = new PaymentSaga();

// SUCCESS EXAMPLE:
saga.execute({
    amount: 200,
    orderId: "order-123",
    email: "user@email.com"
});

// FAILURE EXAMPLE (email fails after payment and order update):
setTimeout(() => {
    saga.execute({
        amount: 200,
        orderId: "order-123",
        email: "fail@email.com"
    });
}, 5000);

// FAILURE EXAMPLE (payment fails):
setTimeout(() => {
    saga.execute({
        amount: 2000, // high amount triggers payment error
        orderId: "order-123",
        email: "user@email.com"
    });
}, 10000);
