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
//     // this.adaptee = new Adaptee();
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



// stateAdapter.js
class StateAdapter {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = [];
  }

  // Get current state
  getState() {
    return { ...this.state };
  }

  // Update state
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  // Subscribe to state changes
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Notify all subscribers
  notify() {
    this.listeners.forEach(listener => listener(this.getState()));
  }
}

// Usage example
const appState = new StateAdapter({ counter: 0 });

// Subscribe to changes
const unsubscribe = appState.subscribe(state => {
  console.log('State updated:', state);
});

// Update state
appState.setState({ counter: appState.getState().counter + 1 });
appState.setState({ counter: appState.getState().counter + 1 });

// Stop listening
unsubscribe();

// Another update (no log because unsubscribed)
appState.setState({ counter: 100 });
