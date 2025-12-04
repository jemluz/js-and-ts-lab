// TypeScript offers three primary access modifiers for controlling the visibility and accessibility of class members (properties and methods): public, private, and protected.
// These modifiers are a key feature for implementing encapsulation in object-oriented programming.

// public:
// This is the default access modifier for class members if none is explicitly specified.
// public members are accessible from anywhere: inside the class, from instances of the class, and from subclasses.

// private:
// private members are only accessible within the class where they are defined.
// They cannot be accessed from outside the class or from subclasses.
// This modifier is used to encapsulate internal implementation details, preventing external code from directly manipulating them.

// protected:
// protected members are accessible within the class where they are defined and within any derived (sub)classes.
// They cannot be accessed from outside the class hierarchy.
// This modifier allows subclasses to access and potentially modify members of their parent class, while still maintaining some level of encapsulation from external code.

class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getInfo(): string {
    return `${this.name} is a ${this.species}.`;
  }

  // A public method to access the private 'age'
  public getAge(): number {
    return this.age;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Dog');
  }

  public getDetails(): string {
    // 'name' is public, 'species' is protected (accessible in subclass)
    return `${this.name} is a ${this.species} and is ${this.getAge()} years old.`;
  }
}

const myDog = new Dog('Buddy', 3);
console.log(myDog.name); // Accessible (public)
// console.log(myDog.age); // Error: Property 'age' is private
// console.log(myDog.species); // Error: Property 'species' is protected
console.log(myDog.getAge()); // Accessible through public method