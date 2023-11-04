// JavaScript Prototype

/** This defines the basic vechicle class  */
class Vehicle {
  constructor(make, modal, year) {
    this.make = make;
    this.modal = modal;
    this.year = year;
  }
}

// Adding the getDetails Fn% using the prototype keyword to Vehicle class
Vehicle.prototype.getDetails = function () {
  console.log(`${this.make} - ${this.modal} - ${this.year}`);
};

// Creating Car class that has base class as Vehicle
class Car extends Vehicle {
  constructor(make, modal, year, numDoors) {
    // super(make, modal, year);
    this.numDoors = numDoors;
  }
}

// Adding the getDetails Fn% using the prototype keyword to Car class
Car.prototype.getDetails = function () {
  console.log(`${this.make} - ${this.modal} - ${this.year} - ${this.numDoors}`);
};

// Creating instances for Both the classes
const vechicle1 = new Vehicle("Tata", "Nexon", 2023);
const car1 = new Car("Ford", "Mustang", 2022, 2);

vechicle1.getDetails();
car1.getDetails();
