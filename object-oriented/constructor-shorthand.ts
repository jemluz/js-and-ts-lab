class Employee {
  // Longhand way
  // name: string;
  // salary: number;

  // constructor(name: string, salary: number) {
  //   this.name = name;
  //   this.salary = salary;
  // }

  // Shorthand way (parameter properties)
  constructor(public name: string, private salary: number) {}

  getSalary() {
    return this.salary;
  }
}

const emp = new Employee("Bob", 50000);
console.log(emp.name); // Accesses the public 'name' property
// console.log(emp.salary); // Error: 'salary' is private
console.log(emp.getSalary());