/**
    Defination:
        - Circuit Breaker is a microservices resilience pattern in software engineering
        - It is used to detect failures and encapsulate the logic of preventing a failure from constantly recurring during maintenance, temporary external system failure, or unexpected system difficulties.
*/


// ------------------------------
// Circuit Breaker Implementation
// ------------------------------
class CircuitBreaker {
    constructor(action, { failureThreshold = 3, successThreshold = 1, timeout = 5000 }) {
        this.action = action;
        this.failureThreshold = failureThreshold;
        this.successThreshold = successThreshold;
        this.timeout = timeout;

        this.state = "CLOSED";
        this.failures = 0;
        this.successes = 0;
        this.nextRetry = Date.now();
    }

    async call(...args) {
        // If breaker is OPEN → reject immediately
        if (this.state === "OPEN") {
            if (Date.now() > this.nextRetry) {
                console.log("🔄 CircuitBreaker: Moving to HALF_OPEN");
                this.state = "HALF_OPEN";
            } else {
                throw new Error("⚠️ CircuitBreaker: OPEN — Payment blocked");
            }
        }

        try {
            const result = await this.action(...args);
            this._onSuccess();
            return result;

        } catch (err) {
            this._onFailure();
            throw err;
        }
    }

    _onSuccess() {
        if (this.state === "HALF_OPEN") {
            this.successes++;
            if (this.successes >= this.successThreshold) {
                console.log("✅ CircuitBreaker: CLOSED — System recovered");
                this._close();
            }
        } else {
            this._close();
        }
    }

    _onFailure() {
        this.failures++;
        console.log(`❌ Failure count: ${this.failures}`);

        if (this.failures >= this.failureThreshold) {
            this._open();
        }
    }

    _open() {
        console.log("🔌 CircuitBreaker: OPEN — Too many failures");
        this.state = "OPEN";
        this.nextRetry = Date.now() + this.timeout;
        console.log(`⏳ Next retry at: ${new Date(this.nextRetry).toLocaleTimeString()}`);
    }

    _close() {
        console.log("🔒 CircuitBreaker: CLOSED — Resetting counters");
        this.state = "CLOSED";
        this.failures = 0;
        this.successes = 0;
    }
}



// ------------------------------
// Fake Payment API (simulating failing gateway)
// ------------------------------
class PaymentService {
    async processPayment(amount) {
        // Random failures to simulate real-world external API issues
        if (Math.random() > 0.7) {
            return `💳 Payment of $${amount} processed successfully`;
        } else {
            throw new Error("❌ Payment Gateway Error");
        }
    }
}



// ------------------------------
// Using Circuit Breaker with Payment Service
// ------------------------------
const paymentService = new PaymentService();

// Wrap payment service with Circuit Breaker
const breaker = new CircuitBreaker(
    paymentService.processPayment.bind(paymentService),
    {
        failureThreshold: 3,
        timeout: 6000, // Retry after 6 seconds
    }
);



// ------------------------------
// Simulate Payment Attempts
// ------------------------------
async function attemptPayment(amount) {
    try {
        const res = await breaker.call(amount);
        console.log(res);
    } catch (err) {
        console.log(err.message);
    }
}



// Try a payment every second
setInterval(() => {
    console.log(`\n➡️ Trying $50 payment (state: ${breaker.state})`);
    attemptPayment(50);
}, 1000);
