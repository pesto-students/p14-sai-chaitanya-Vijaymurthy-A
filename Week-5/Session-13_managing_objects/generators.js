// Generator Function is a type of fucntion that yeilds (special type of return) value, pauses the excution and resumes again on next iteration from where it is stopped.
// Generator Fuction are defined using * after the function keyword
// UseCases : Handling larger array as in regular for loop the entire array elements gets loaded in the memory and in generator is not, for igonring infinite loop behaviour and so on.

function* generatorFuction(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield Symbol(arr[i]);
  }
}

const generatorObject = generatorFuction(["hello", "world", "test"]);

// It can be accessed using for..of
for (itr of generatorObject) {
  console.log(itr);
}

// Generator Object can also be accessed using next() iterator
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());
