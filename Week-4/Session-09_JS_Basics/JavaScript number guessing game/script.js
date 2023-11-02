function numberGuessingGame(numToGuess, toalGuesses = 10) {
  let num = 0;
  for (let i = 0; i < toalGuesses; i++) {
    let promptToUser;
    if (num > numToGuess) {
      promptToUser = num + " is too large, Guess a smaller number";
    } else if (num < numToGuess) {
      promptToUser = num + " is too small, Guess a larger number";
    }
    if (i === 0) {
      promptToUser = "Enter a number beetween 1 to 100";
    }

    // Condition to check if user doesnot input a number or nothing
    if (isNaN(num) || num === "") {
      promptToUser = "Please enter a number.";
    }

    //Condition to check if user cancels the prompt
    if (num === null) {
      return;
    }

    num = prompt(promptToUser);

    if (isNaN(num) || num === "") {
      i -= 1;
    }

    if (num == numToGuess) {
      return i + 1;
    }
  }
}
