class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  
    sayHello() {
      console.log("Hello, I am the Singleton instance!");
    }
  }
  
  // Usage
  const instance1 = new Singleton();
  instance1.sayHello(); // Output: "Hello, I am the Singleton instance!"
  
  const instance2 = new Singleton();
  instance2.sayHello(); // Output: "Hello, I am the Singleton instance!"
  
  console.log(instance1 === instance2); // Output: true


//////////////////////////// other example ////////////////////////////


class Restaurant {
    constructor(name) {
        this.name = name;
        this.reservations = [];
    }

    addReservation(reservation) {
        this.reservations.push(reservation);
    }

    getReservations() {
        return this.reservations;   
    }
}

// Singleton ReservationManager
class ReservationManager {
    constructor() {
        if (!ReservationManager.instance) {
        ReservationManager.instance = this;
        }
        this.restaurant = new Restaurant("Sample Restaurant");
        return ReservationManager.instance;
    }

    bookReservation(customerName, tableNumber, date) {
        const reservation = { customerName, tableNumber, date };
        this.restaurant.addReservation(reservation);
        console.log(`Reservation booked for ${customerName} at table ${tableNumber} on ${date}`);
    }

    getReservations() {
        return this.restaurant.getReservations();
    }

}

// Usage
const manager1 = new ReservationManager();
manager1.bookReservation("John", 5, "2023-06-25");

const manager2 = new ReservationManager();
manager2.bookReservation("Jane", 2, "2023-06-28");

console.log(manager1 === manager2); // Output: true
console.log(manager1.getReservations()); // Output: [{ customerName: 'John', tableNumber: 5, date: '2023-06-25' }, { customerName: 'Jane', tableNumber: 2, date: '2023-06-28' }]