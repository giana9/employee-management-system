// Employee Base Class
class Employee { // blueprint for employee objects
    constructor(name, department) { // runs for each employee added/created
        this.name = name;
        this.department = department; // store values (name, department) inside object
    }
    describe() {
        return `${this.name} works in the ${this department} department.`;
    } // uses template literals to output a sentence using the stored properties
}