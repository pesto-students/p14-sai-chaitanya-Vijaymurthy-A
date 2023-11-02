class Calculator {
  add(val1, val2) {
    return val1 + val2;
  }
  subtract(val1, val2) {
    return val1 - val2;
  }
  multiply(val1, val2) {
    return val1 * val2;
  }
  divide(val1, val2) {
    return val1 / val2;
  }
}

class ScientificCalculator extends Calculator {
  square(val) {
    return val * val;
  }
  cube(val) {
    return val * val * val;
  }
  power(val, power) {
    return Math.pow(val, power);
  }
}

let sciCalcObj = new ScientificCalculator();

//Add method calling using ScientificCalculator class object by call
console.log(sciCalcObj.add.call(sciCalcObj, 5, 2));

//Add method calling using ScientificCalculator class object by apply
console.log(sciCalcObj.subtract.apply(sciCalcObj, [5, 2]));

//Add multiplyBy2 method in ScientificCalculator using bind
sciCalcObj.multiplyBy2 = function (val) {
  return val * 2;
}.bind(sciCalcObj);

console.log(sciCalcObj.multiplyBy2(4));

//Add powerOfThree method in ScientificCalculator using bind
sciCalcObj.powerOfThree = function (val) {
  return Math.pow(val, 3);
}.bind(sciCalcObj);

console.log(sciCalcObj.powerOfThree(6));
