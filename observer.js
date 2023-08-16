// // Subject (Course)
// class Course {
//     constructor(name) {
//         this.name = name;
//         this.students = [];
//     }

//     enroll(student) {
//         this.students.push(student);
//         this.notify();
//     };

//     cancelEnrollment(student) {
//         const index = this.students.indexOf(student);
//         if (index !== -1) {
//             this.students.splice(index, 1);
//             this.notify();
//         }
//     };

//     notify() {
//         const message = this.isAvailable ? "Course is now available" : "Course is not available";
//         for (const student of this.students) {
//             student.update(this.name, message);
//         }
//     };

//     setAvailability(isAvailable) {
//         this.isAvailable = isAvailable;
//         this.notify();
//     }
// }

// // Observer (Student)
// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     update(courseName, message) {
//         console.log(`${this.name}: Enrollment status changed for ${courseName} to ${message}`);
//     }
// }

// // Usage
// const course = new Course("JavaScript");

// const student1 = new Student("Montaser");
// const student2 = new Student("Monty");
// const student3 = new Student("Mans");

// course.enroll(student1); // John: Enrollment status changed for JavaScript
// console.log("--------------------------------------------------------------------------------");
// course.enroll(student2); // Jane: Enrollment status changed for JavaScript
// console.log("--------------------------------------------------------------------------------");
// course.enroll(student3); // John: Enrollment status changed for JavaScript
// console.log("--------------------------------------------------------------------------------");

// course.cancelEnrollment(student1); // John: Enrollment status changed for JavaScript
// console.log("--------------------------------------------------------------------------------");

// course.setAvailability(false); // John: Enrollment status changed for JavaScript



// --------------------------------------------- other example ---------------------------------------------



// Subject (Observable)
class NewsAgency {
    static Agencies = [];
    constructor(name) {
        this.name = name;
        NewsAgency.Agencies.push(name);
        this.subscribers = [];
    };

    static displayAgencies() { // class function 
        console.log(`Numbers of Agencies: ${NewsAgency.Agencies.length}`);
        console.log('Agencies are: ', NewsAgency.Agencies);
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    };

    displaySubscribers() {
        const subscriberNames = this.subscribers.map(subscriber => subscriber.name);
        console.log(`${this.name} --> it has ${this.subscribers.length} subscribers, they are: ${subscriberNames.join(', ')}`);
    }

    unsubscribe(subscriber) {
        const index = this.subscribers.indexOf(subscriber);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        };
    };

    notify(news) {
        this.subscribers.forEach(subscriber => subscriber.update(news));
    };
};

// Observer
class Subscriber {
    static people = [];
    constructor(name) {
        this.name = name;
        Subscriber.people.push(name);
    };

    static displayPersons() { // class function 
        console.log(`Numbers of People: ${Subscriber.people.length}`);
        console.log('People are: ', Subscriber.people);
    }

    update(news) {
        console.log(`${this.name} received news: ${news}`);
        console.log('########################################################################');
    };
};



const subscriber1 = new Subscriber("montaser");
const subscriber2 = new Subscriber("monty");
const subscriber3 = new Subscriber("mans");

Subscriber.displayPersons();
console.log('------------------------------------------------------------------------\n');

// subscriber1.displayPersons(); // subscriber1.displayPersons is not a function

const newsAgency1 = new NewsAgency("Al-Youm Al-Saba'");
const newsAgency2 = new NewsAgency("Cairo-24");


NewsAgency.displayAgencies();
console.log('------------------------------------------------------------------------\n');

newsAgency1.subscribe(subscriber1);
newsAgency1.subscribe(subscriber2);

newsAgency2.subscribe(subscriber1);
newsAgency2.subscribe(subscriber3);

newsAgency1.displaySubscribers();
console.log('------------------------------------------------------------------------\n');
newsAgency2.displaySubscribers();

console.log('------------------------------------------------------------------------\n');
newsAgency1.notify("Breaking news: New product launched!");
newsAgency1.notify("Sports news: Al-Ahly bought a new Good Striker!");
newsAgency2.notify("Jobs News: FEDIS needs to a new Developer");