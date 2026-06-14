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

// Sample Employees + Managers
const em1 = new Employee("Gerald", "Finance");
const em2 = new Employee ("Gio", "Technology");

const mg1 = new Manager("Leonardo", "Marketing", 10);
const mg2 = new Manager("James", "Accounting", 8);

// Company Class
class Company {
    constructor() {
        this.employees = []; // holds manager + employee objects (inheritance)
    }
    addEmployee(employee) {
        this.employees.push(employee); // takes an object (employee/manager) and pushes it to the employees array
    }
    listEmployees() {
        console.log("---------- Company Employees ----------");
        this.employees.forEach(em => { // loops through all employees in the array
            console.log(em.describe()); // calls each object's describe method
        });
    }
}

// Instantiates
const myCompany = new Company(); // runs company constructor (empty company that can store employees)

myCompany.addEmployee(em1);
myCompany.addEmployee(em2);
myCompany.addEmployee(mg1);
myCompany.addEmployee(mg2); // addEmployee(x) pushes objects into the array

myCompany.listEmployees();