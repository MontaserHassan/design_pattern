// Subject (Course)
class Course {
    constructor(name) {
        this.name = name;
        this.students = [];
    }
  
    enroll(student) {
        this.students.push(student);
        this.notify();
    };
  
    cancelEnrollment(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
            this.notify();
        }
    };
  
    notify() {
        const message = this.isAvailable ? "Course is now available" : "Course is not available";
        for (const student of this.students) {
            student.update(this.name, message);
        }
    };

    setAvailability(isAvailable) {
        this.isAvailable = isAvailable;
        this.notify();
    }
}
  
// Observer (Student)
class Student {
    constructor(name) {
        this.name = name;
    }

    update(courseName, message) {
        console.log(`${this.name}: Enrollment status changed for ${courseName} to ${message}`);
    }
}

// Usage
const course = new Course("JavaScript");

const student1 = new Student("Montaser");
const student2 = new Student("Monty");
const student3 = new Student("Mans");

course.enroll(student1); // John: Enrollment status changed for JavaScript
console.log("--------------------------------------------------------------------------------");
course.enroll(student2); // Jane: Enrollment status changed for JavaScript
console.log("--------------------------------------------------------------------------------");
course.enroll(student3); // John: Enrollment status changed for JavaScript
console.log("--------------------------------------------------------------------------------");

course.cancelEnrollment(student1); // John: Enrollment status changed for JavaScript
console.log("--------------------------------------------------------------------------------");

course.setAvailability(false); // John: Enrollment status changed for JavaScript
