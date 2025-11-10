/**
    Defination:
        - State Pattern is a behavioral design pattern in software engineering
        - It allows an object to change its behavior when its internal state changes.
        - The object will appear to change its class.
*/

// ------------------------------------------------------------------------------------------------------------------------------------



// class OffState {
//     constructor(phone) {
//         this.phone = phone;
//     }

//     turnOn() {
//         console.log("Turning the phone on.");
//         this.phone.setState(new OnState(this.phone));
//     }
// }

// class OnState {
//     constructor(phone) {
//         this.phone = phone;
//     }

//     turnOff() {
//         console.log("Turning the phone off.");
//         this.phone.setState(new OffState(this.phone));
//     }

//     startCharging() {
//         console.log("Starting to charge the phone.");
//         this.phone.setState(new ChargingState(this.phone));
//     }
// }

// class ChargingState {
//     constructor(phone) {
//         this.phone = phone;
//     }

//     stopCharging() {
//         console.log("Stopping the charging.");
//         this.phone.setState(new OnState(this.phone));
//     }
// }

// // Phone class that maintains its state
// class Phone {
//     constructor() {
//         this.state = new OffState(this);
//     }

//     setState(state) {
//         this.state = state;
//     }

//     turnOn() {
//         this.state.turnOn();
//     }

//     turnOff() {
//         this.state.turnOff();
//     }

//     startCharging() {
//         this.state.startCharging();
//     }

//     stopCharging() {
//         this.state.stopCharging();
//     }
// }


// const myPhone = new Phone();
// myPhone.turnOn();
// myPhone.startCharging();
// myPhone.stopCharging();
// myPhone.turnOff();



// ------------------------------------------------------------------------------------------------------------------------------------



// class OffState {
//     constructor(lightSwitch) {
//         this.lightSwitch = lightSwitch;
//     }

//     toggle() {
//         console.log("Turning the light on.");
//         this.lightSwitch.setState(new OnState(this.lightSwitch));
//     }
// }

// class OnState {
//     constructor(lightSwitch) {
//         this.lightSwitch = lightSwitch;
//     }

//     toggle() {
//         console.log("Turning the light off.");
//         this.lightSwitch.setState(new OffState(this.lightSwitch));
//     }
// }

// // LightSwitch class that maintains its state
// class LightSwitch {
//     constructor() {
//         this.state = new OffState(this);
//     }

//     setState(state) {
//         this.state = state;
//     }

//     toggle() {
//         this.state.toggle();
//     }
// }

// const myLightSwitch = new LightSwitch();
// myLightSwitch.toggle(); // switch on light
// myLightSwitch.toggle(); // switch off light



// ------------------------------------------------------------------------------------------------------------------------------------
class DocumentState {
    constructor(document) {
        this.document = document;
    }

    publish() {
        console.log("Publishing the document.");
        this.document.setState(new PublishedState(this.document));
    }
}

class PublishedState {
    constructor(document) {
        this.document = document;
    }

    archive() {
        console.log("Archiving the document.");
        this.document.setState(new ArchivedState(this.document));
    }
}

class ArchivedState {
    constructor(document) {
        this.document = document;
    }

    restore() {
        console.log("Restoring the document to draft state.");
        this.document.setState(new DocumentState(this.document));
    }
}

// Document class that maintains its state
class Document {
    constructor() {
        this.state = new DocumentState(this);
    }

    setState(state) {
        this.state = state;
    }

    publish() {
        this.state.publish();
    }

    archive() {
        this.state.archive();
    }

    restore() {
        this.state.restore();
    }
}

const myDocument = new Document();
myDocument.publish(); // publish the document
myDocument.archive(); // archive the document
myDocument.restore(); // restore the document to draft state



// ------------------------------------------------------------------------------------------------------------------------------------



class OnState {
    constructor(device) {
        this.device = device;
    }

    pressButton() {
        console.log("Turning device OFF...");
        this.device.setState(this.device.offState);
    }
}

class OffState {
    constructor(device) {
        this.device = device;
    }

    pressButton() {
        console.log("Turning device ON...");
        this.device.setState(this.device.onState);
    }
}

// Context
class Device {
    constructor() {
        this.onState = new OnState(this);
        this.offState = new OffState(this);

        // initial state
        this.state = this.offState;
    }

    setState(state) {
        this.state = state;
    }

    pressButton() {
        this.state.pressButton();
    }
}

const myDevice = new Device();
console.log('myDevice.state: ', myDevice);
myDevice.pressButton(); // Turning device ON...
console.log('myDevice.state: ', myDevice);
myDevice.pressButton(); // Turning device OFF...
console.log('myDevice.state: ', myDevice);
myDevice.pressButton(); // Turning device ON...