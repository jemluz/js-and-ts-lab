// Method Overriding: A child class can provide its own implementation for a method that already exists in the parent class. This is called method overriding.
// You can still access the parent's method implementation within the child's overridden method using super.methodName().

class Vehicle {
  start() {
    console.log('Vehicle started.');
  }
}

class Car extends Vehicle {
  start() {
    super.start(); // Call the parent's start method
    console.log('Car engine ignited.');
  }
}