// Value Object
class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
}

// Entity
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price; // Money value object
    }

    // Other methods specific to Product behavior
}

// Repository
class ProductRepository {
    constructor() {
        this.products = new Map();
    }

    add(product) {
        this.products.set(product.id, product);
    }

    getById(id) {
        return this.products.get(id);
    }
}

// Creating a new product
const productRepository = new ProductRepository();

const product = new Product(1, "Example Product", new Money(29.99, "USD"));
productRepository.add(product);

// Retrieving a product
const retrievedProduct = productRepository.getById(1);
console.log(retrievedProduct);


// --------------------------------------------- other example ---------------------------------------------


// Value Object
// class Money {
//     constructor(amount, currency) {
//         this.amount = amount;
//         this.currency = currency;
//     }

//     add(money) {
//         if (this.currency !== money.currency) {
//             throw new Error("Currency mismatch");
//         }
//         return new Money(this.amount + money.amount, this.currency);
//     }
// }

// // Entity
// class Account {
//     constructor(accountNumber, holderName, balance) {
//         this.accountNumber = accountNumber;
//         this.holderName = holderName;
//         this.balance = balance; // Money value object
//     }

//     // Methods for account operations
//     deposit(amount) {
//         this.balance = this.balance.add(new Money(amount, this.balance.currency));
//     }

//     withdraw(amount) {
//         if (this.balance.amount < amount) {
//             throw new Error("Insufficient balance");
//         }
//         this.balance = this.balance.add(new Money(-amount, this.balance.currency));
//     }
// }

// // Repository
// class AccountRepository {
//     constructor() {
//         this.accounts = new Map();
//     }

//     add(account) {
//         this.accounts.set(account.accountNumber, account);
//     }

//     getByAccountNumber(accountNumber) {
//         return this.accounts.get(accountNumber);
//     }
// }

// // Creating and using accounts
// const accountRepository = new AccountRepository();

// const account1 = new Account("12345", "Alice", new Money(1000, "USD"));
// const account2 = new Account("54321", "Bob", new Money(500, "USD"));

// accountRepository.add(account1);
// accountRepository.add(account2);

// console.log("Initial Account 1 Balance:", account1.balance.amount);
// console.log("Initial Account 2 Balance:", account2.balance.amount);

// account1.deposit(500);
// account2.withdraw(200);

// console.log("Updated Account 1 Balance:", account1.balance.amount);
// console.log("Updated Account 2 Balance:", account2.balance.amount);


// --------------------------------------------- other example ---------------------------------------------


// Entity: User
// class User {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
// }

// // Entity: Comment
// class Comment {
//     constructor(id, text, author) {
//         this.id = id;
//         this.text = text;
//         this.author = author; // User entity
//     }
// }

// // Entity: Post
// class Post {
//     constructor(id, title, content, author) {
//         this.id = id;
//         this.title = title;
//         this.content = content;
//         this.author = author; // User entity
//         this.comments = []; // Array of Comment entities
//     }

//     addComment(comment) {
//         this.comments.push(comment);
//     }
// }

// // Repository: PostRepository
// class PostRepository {
//     constructor() {
//         this.posts = new Map();
//     }

//     add(post) {
//         this.posts.set(post.id, post);
//     }

//     getById(id) {
//         return this.posts.get(id);
//     }
// }

// // Creating users
// const user1 = new User(1, "Alice");
// const user2 = new User(2, "Bob");

// // Creating a post
// const postRepository = new PostRepository();
// const post1 = new Post(101, "First Post", "This is the content of the first post.", user1);

// // Adding comments to the post
// const comment1 = new Comment(1001, "Great post!", user2);
// post1.addComment(comment1);

// // Storing the post in the repository
// postRepository.add(post1);

// // Retrieving the post and printing it
// const retrievedPost = postRepository.getById(101);
// console.log("Post Title:", retrievedPost.title);
// console.log("Post Content:", retrievedPost.content);
// console.log("Author:", retrievedPost.author.name);
// console.log("Comments:");
// retrievedPost.comments.forEach((comment) => {
//     console.log("- " + comment.text + " (by " + comment.author.name + ")");
// });
