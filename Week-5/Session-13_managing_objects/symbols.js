// We can able to incremene the counter using the closure but the fucntion should be an IIFE(Immediately Invoked Function Expression)
// With the help of IIFE we can encapsulate the counter wuth closure in the outer function without using the gloal var
// IIFE is a functions that gets invoked immediately during the function declation phase itself by defining () at the end.
const generateTransactionId = (function () {
  let count = 0;

  // Closure that can able to to access the outer function attribute
  function generateId() {
    count += 1;
    const id = `TRANSACTION_ID_${count}`;
    return Symbol(id);
  }

  return generateId;
})();

const transaction1 = generateTransactionId();
console.log(transaction1); // Symbol(TRANSACTION_ID_1)

const transaction2 = generateTransactionId();
console.log(transaction2); // Symbol(TRANSACTION_ID_2)

const transaction3 = generateTransactionId();
console.log(transaction3); // Symbol(TRANSACTION_ID_3)
