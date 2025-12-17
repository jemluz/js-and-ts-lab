// getters and setters are special methods that provide controlled access to the properties of a class. 
// They enhance encapsulation by allowing you to define custom logic when a property is read (getter) or written to (setter).

// Getters:
// A getter is a method defined with the get keyword before its name.
// It allows you to retrieve the value of a property, often with some additional logic, computation, or formatting.
// Getters are accessed like properties, without using parentheses.
// If a getter exists without a corresponding setter, the property becomes effectively read-only.

// Setters:
// A setter is a method defined with the set keyword before its name.
// It allows you to assign a value to a property, often including validation, transformation, or side effects.
// Setters take a single parameter, which is the value being assigned.
// Setters do not have a return type annotation, not even void.

class Person {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter for fullName
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter for firstName with validation
  set firstName(newFirstName: string) {
    if (!newFirstName) {
      throw new Error("First name cannot be empty.");
    }
    this._firstName = newFirstName;
  }

  // Getter and Setter for lastName
  get lastName(): string {
    return this._lastName;
  }

  set lastName(newLastName: string) {
    this._lastName = newLastName;
  }
}

const person = new Person("John", "Doe");
console.log(person.fullName); // Accessing getter like a property: "John Doe"

person.firstName = "Jane"; // Using the setter
console.log(person.fullName); // "Jane Doe"

try {
  person.firstName = ""; // This will throw an error due to setter validation
} catch (error: any) {
  console.error(error.message); // "First name cannot be empty."
}