const counter = function () {
  let count = 0;
  increamentCounter = function () {
    count++;
    return count;
  };
  return increamentCounter;
};

let fisrtValues = [];
let secondValues = [];
const firstCounter = new counter();
fisrtValues.push(firstCounter());
fisrtValues.push(firstCounter());
fisrtValues.push(firstCounter());
fisrtValues.push(firstCounter());
fisrtValues.push(firstCounter());

const secondCounter = new counter();
secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());

console.log(fisrtValues);
console.log(secondValues);
