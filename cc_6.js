// Employee Base Class
class Employee { // blueprint for employee objects
    constructor(name, department) { // runs for each employee added/created
        this.name = name;
        this.department = department; // store values (name, department) inside employee object
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    } // uses template literals to output a sentence using the stored properties
}

// Manager Subclass
class Manager extends Employee { // automatically inherits everything from Employee
    constructor(name, department, teamSize) {
        super(name, department); // calls the parent class (name, department)
        this.teamSize = teamSize; // adding a new property
    }
    describe() {
        return `${this.name} is the manager of the ${this.department} department and leads a team of ${this.teamSize}.`;
    } // overriding the employee describe() method
}