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
    // .setAge(25)
    .setAddress('New York')
    .build();

console.log(user);