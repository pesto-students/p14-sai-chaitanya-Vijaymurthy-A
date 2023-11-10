// Inheritance in JavaScript

class Vehicle {
  constructor(make, modal, year, color) {
    this.make = make;
    this.modal = modal;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`Driving ${this.make} - ${this.modal}`);
  }
}

class Car extends Vehicle {
  constructor(make, modal, year, color, numSeats) {
    super(make, modal, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, modal, year, color, numSeats, isAvailable) {
    super(make, modal, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

let ride = new RideShareCar("FORD", "Mustang", 2023, "White", 5, true);
console.log(
  `${ride.make} - ${ride.modal} - ${ride.year} - ${ride.color} - ${ride.numSeats} - ${ride.isAvailable}`
);

// Polymorphism

class Shape {
  calculateArea() {
    console.log("This method is from parent class");
  }
}
class Rectangle extends Shape {
  calculateArea(width, height) {
    console.log(width * height);
  }
}
class Traingle extends Shape {
  calculateArea(base, height) {
    console.log((base * height) / 2);
  }
}
class Circle extends Shape {
  calculateArea(radius) {
    console.log(Math.PI * radius * radius);
  }
}

const cl = new Circle();
const tangle = new Traingle();
const rect = new Rectangle();

cl.calculateArea(5);
tangle.calculateArea(3, 5);
rect.calculateArea(5, 6);

// Abstraction and encpasulation

class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;
  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
    }
  }
  get balanceAmount() {
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  deposit(amount) {
    super.deposit(amount);
  }
  withdraw(amount) {
    super.withdraw(amount);
  }
  getBalance() {
    return super.getBalance();
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  deposit(amount) {
    super.deposit(amount);
  }
  withdraw(amount) {
    if (amount > super.balanceAmount) {
      throw new TypeError(`Not Sufficient Balance to Withdraw ${amount}`);
    }
    super.withdraw(amount);
  }
  getBalance() {
    return super.balanceAmount;
  }
}

try {
  const SAHolder = new SavingsAccount("1001", 25000, "Vijay");
  const CAHolder = new CheckingAccount("1002", 30000, "Murthy");

  console.log(`Initial Balance - ${CAHolder.getBalance()}`);
  CAHolder.deposit(10000);
  console.log(`Balance after Deposting 10K - ${CAHolder.getBalance()}`);
  CAHolder.withdraw(30000);
  console.log(`Balance after Withdrawing 30K - ${CAHolder.getBalance()}`);
  CAHolder.withdraw(30000);
  console.log(`Balance after Withdrawing 30K - ${CAHolder.getBalance()}`);

  console.log(`Initial Balance - ${SAHolder.getBalance()}`);
  SAHolder.deposit(25000);
  console.log(`Balance after Deposting 25K - ${SAHolder.getBalance()}`);
  SAHolder.withdraw(30000);
  console.log(`Balance after Withdrawing 30K - ${SAHolder.getBalance()}`);
  SAHolder.withdraw(30000);
  console.log(`Balance after Withdrawing 30K - ${SAHolder.getBalance()}`);
} catch (err) {
  console.log(`Exception Occured - ${err}`);
}
