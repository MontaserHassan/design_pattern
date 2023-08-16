// Simulated asynchronous action
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// step: Payment
async function handlePayment(order) {
    console.log("Processing payment for order:", order);
    await delay(1000); // Simulate payment processing
    const random = Math.random();
    console.log('payment time: ', random);
    if (random < 0.8) {
        console.log("Payment successful.");
        return true;
    } else {
        console.log("Payment failed.");
        return false;
    }
}

// step: Prepare food
async function prepareFood(order) {
    console.log("Preparing food for order:", order);
    await delay(1500); // Simulate food preparation
    const random = Math.random();
    console.log('prepare time: ', random);
    if (random < 0.9) {
        console.log("Food prepared.");
        return true;
    } else {
        console.log("Food preparation failed.");
        return false;
    }
}

// step: Deliver food
async function deliverFood(order) {
    console.log("Delivering food for order:", order);
    await delay(2000); // Simulate food delivery
    const random = Math.random();
    console.log('delivered time: ', random);
    if (random < 0.95) {
        console.log("Food delivered.");
        return true;
    } else {
        console.log("Food delivery failed.");
        return false;
    }
}

// Saga orchestrator
async function orderSaga(order) {
    const paymentSuccess = await handlePayment(order);
    console.log(paymentSuccess);
    if (paymentSuccess) {
        const foodPrepared = await prepareFood(order);
        if (foodPrepared) {
            const foodDelivered = await deliverFood(order);
            if (!foodDelivered) {
                console.log("Compensating: Refunding payment and undoing food preparation.");
            }
        } else {
            console.log("Compensating: Refunding payment.");
        }
    } else {
        console.log("Saga failed: Payment unsuccessful.");
    }
}

const order = { orderId: "123", items: ["Burger", "Fries"], totalAmount: 20 };
orderSaga(order);