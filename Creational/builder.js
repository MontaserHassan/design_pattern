/**
    Definition:
        - Builder Pattern is a creational design pattern in software engineering.
        - It allows for the step-by-step construction of complex objects.
        It provides a flexible way to create objects by composing them step by step, allowing for various configurations and customization.
*/


class User {
    constructor(username, email, age, address) {
        this.username = username;
        this.email = email;
        this.age = age;
        this.address = address;
    }
}

class UserBuilder {
    setUsername(username) {
        this.username = username;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    build() {
        return new User(this.username, this.email, this.age, this.address);
    }
}

// Example usage:
const user = new UserBuilder()
    .setUsername('john_doe')
    .setEmail('john@example.com')
    .setAge(25)
    .setAddress('New York')
    .build();

console.log("user: ", user); // user: { username: 'john_doe', email: 'john@example.com', age: 25, address: 'New York' }



// ------------------------------------------------------------------------------------------------------------------------------------------




class Order {
    constructor(builder) {
        this.items = builder.items;
        this.total = builder.total;
        this.address = builder.address;
        this.isPaid = builder.isPaid;
    }
}

class OrderBuilder {
    constructor() {
        this.items = [];
        this.total = 0;
        this.address = '';
        this.isPaid = false;
    }

    addItem(item, price) {
        this.items.push(item);
        this.total += price;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    pay() {
        this.isPaid = true;
        return this;
    }

    build() {
        return new Order(this);
    }
}

// ===== Usage =====
const order = new OrderBuilder()
    .addItem('Burger', 10)
    .addItem('Fries', 5)
    .setAddress('123 Cairo St')
    .pay()
    .build();

console.log('order: ', order); // order: { items: [ 'Burger', 'Fries' ], total: 15, address: '123 Cairo St', isPaid: true }
