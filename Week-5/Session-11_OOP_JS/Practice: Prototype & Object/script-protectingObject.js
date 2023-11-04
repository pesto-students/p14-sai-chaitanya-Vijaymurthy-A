const person = {};

// Object read only property can be defined using Object.defineProperty
// params for defineProperty takes (objectName, Key,  data descritor / accessor descriptor )
// data descriptor contains properies like value (undefined by Default), configurable, enumerable, writable (All defaults to False)
// accessor descritor contains getter, setter methods

// Object.defineProperty(person, "name", {
//   value: "vijay",
// });

Object.defineProperties(person, {
  name: {
    value: "Vijay",
  },
  email: {
    value: "vijay@gmail.com",
  },
});

Object.defineProperty(person, "age", {
  get() {
    return this.value;
  },
  set(x) {
    this.value = x;
  },
});

// name and email are read-onnly properies
console.log(`Name : ${person.name}`);
console.log(`Email : ${person.email}`);

// trying to change the properties donot take effect as writable is defaults to false. This throws TypeError in Strict mode.
person.name = "Ajith";
person.email = "gmail.com";

// The propereties returns same value defined initially
console.log(`Name : ${person.name}`);
console.log(`Email : ${person.email}`);

// Getting age property using getter method, Initially defaults to undefined
console.log(`Age (Before Setting): ${person.age}`);
person.age = 28;
console.log(`Age (After Setting) : ${person.age}`);
