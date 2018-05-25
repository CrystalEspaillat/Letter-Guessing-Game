
// An array of values for the computer to randomly choose from. 
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]                

// Variables are set to track guessed letters, guesses remaining, wins, losses. 
var guessedLetters = [];
var guesses = 5;
var wins = 0;
var losses = 0;

// Computer randomly chooses a value from the array above.
var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
// For testing purposes, we can see the computer's choice in the console.
console.log(answer);

//Display the scores
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;

// when the user hits a key ....
document.onkeypress = function(event) {
    var userGuess = event.key;

    // if the key pressed is the same as the value.....
    if (answer === userGuess) {

        // Go up one number on the wins variable.                    
        wins++;

        //reset the array
        guessedLetters = [];

        //reset the guess counter
        guesses = 5;

        //Display the new number of wins on page.
        document.getElementById("wins").innerHTML = wins;
    }

    // if the key pressed is NOT the same as the value.....
    else {

        // reduce value of remaining guesses by 1.
        guesses--;

        //Display the new number of guesses on page.
        document.getElementById("guesses").innerHTML = guesses;
        
        // Store the guess into the guessedLetters array.
        guessedLetters.push(userGuess);

        //Displays guessedLetters on page.
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
    
    
    // When there are no remaining guesses, then increment on the losses variable.
    if (guesses === 0) {

        //reset the array
        guessedLetters = [];

        //reset the guess counter
        guesses = 5;

        // increments losses
        losses++;

        // displays the score
        document.getElementById("losses").innerHTML = losses;

    }

}