class Adaptee {
  specificRequest() {
    return "Adaptee's specific request";
  }
}

class Target {
  request() {
    throw new Error("Abstract method - request() must be overridden");
  }
}

class Adapter extends Target {
  constructor() {
    super();
    // this.adaptee = new Adaptee();
  }

  request() {
    const result = this.adaptee.specificRequest();
    // Additional adaptation or transformation logic if needed
    return `Adapter: ${result}`;
  }
}

// Usage
const adapter = new Adapter();
console.log(adapter.request());
// Output: "Adapter: Adaptee's specific request"
