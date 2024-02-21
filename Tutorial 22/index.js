// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let userGuess;
let numberOfGuesses = 0;

// Function to get user input and check if it's correct
function guessNumber() {
    userGuess = parseInt(prompt("Guess the number between 1 and 100:"));

    if (isNaN(userGuess)) {
        alert("Please enter a valid number.");
        guessNumber();
        return;
    }

    numberOfGuesses++;

    if (userGuess === randomNumber) {
        alert(`Congratulations! You guessed the correct number in ${numberOfGuesses} attempts. Your score is ${100 - numberOfGuesses}.`);
    } else if (userGuess < randomNumber) {
        alert("Try again. The number is greater.");
        guessNumber();
    } else {
        alert("Try again. The number is lesser.");
        guessNumber();
    }
}

// Start the game
guessNumber();