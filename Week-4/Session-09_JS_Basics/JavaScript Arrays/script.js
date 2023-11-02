function divideArrays(nums) {
  let evenNums = [];
  let oddNums = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evenNums.push(num);
    } else {
      oddNums.push(num);
    }
  }
  evenNums.length > 0 ? console.log(evenNums) : console.log("None");
  oddNums.length > 0 ? console.log(oddNums) : console.log("None");
}

numbers = [1, 2, 4];
divideArrays(numbers);
