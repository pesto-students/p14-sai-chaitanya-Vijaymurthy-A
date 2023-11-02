class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `Hi, I'm ${this.name}, ${this.age}, years old. My gender is ${this.gender} and I'm  ${this.nationality}`;
  }
}

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }
  study() {
    return "I am Studying " + this.subject;
  }
}
let person1 = new Person("John", 25, "Male", "American");
let person2 = new Person("Vijay", 28, "Male", "Indian");
let person3 = new Person("Raj", 28, "Male", "African");

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

let student1 = new Student("Sarah", 24, "Female", "Latin", "Computer Science");
console.log(student1.introduce() + " " + student1.study());
