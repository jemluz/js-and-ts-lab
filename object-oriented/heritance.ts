class Person {
  constructor(public firstName: string, public lastName: string) {}
}

// super() keyword: If the child class has its own constructor, it must call the parent class's constructor using super(). This ensures that the parent class's initialization logic is executed.
// If the parent constructor takes parameters, super() must be called with those parameters.
class Trainee extends Person {
  constructor(firstName: string, lastName: string, public jobTitle: string) {
    super(firstName, lastName); // Call the parent constructor
  }
}