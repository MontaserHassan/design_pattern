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



// --------------------------------------------- other example ---------------------------------------------



class OffState {
    constructor(lightSwitch) {
        this.lightSwitch = lightSwitch;
    }

    toggle() {
        console.log("Turning the light on.");
        this.lightSwitch.setState(new OnState(this.lightSwitch));
    }
}

class OnState {
    constructor(lightSwitch) {
        this.lightSwitch = lightSwitch;
    }

    toggle() {
        console.log("Turning the light off.");
        this.lightSwitch.setState(new OffState(this.lightSwitch));
    }
}

// LightSwitch class that maintains its state
class LightSwitch {
    constructor() {
        this.state = new OffState(this);
    }

    setState(state) {
        this.state = state;
    }

    toggle() {
        this.state.toggle();
    }
}

const myLightSwitch = new LightSwitch();
myLightSwitch.toggle(); // switch on light
myLightSwitch.toggle(); // switch off light