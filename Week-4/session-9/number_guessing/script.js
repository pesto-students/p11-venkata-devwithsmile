function playGuessingGame() {
    let numToGuess = Math.floor((Math.random() * 100) + 1);
    console.log(numToGuess);

    for (let chance = 1; chance <= 10; chance++) {
        let triedNum = Number(prompt("Guess a number between 1 and 100 (guess #" + chance + "):"));

        if (triedNum === numToGuess) {
            alert("You guessed it in " + chance + " tries!");
            return;
        } else {
            prompt("Incorrect guess. Try again.");
        }
    }

    prompt("Sorry, you did not guess the number. The correct number was " + numToGuess + ".");
}

playGuessingGame();
