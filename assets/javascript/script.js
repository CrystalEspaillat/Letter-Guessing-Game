
// An array of values for the computer to randomly choose from. 
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]                

// Variables are set to track guessed letters, guesses remaining, wins, losses. 
var guesses = 10;
var wins = 0;
var losses = 0;
var guessedLetters = [];

// Computer randomly chooses a value from the array above.
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// For testing purposes, we can see the computer's choice in the console.
console.log(computerChoice);

// When the user presses a key, do the following.... 
document.onkeypress = function(event) {

    // Store the keys pressed as a variable called userGuess.
    var userGuess = event.key;

        // if the key pressed is the same as the value randomly selected from the array... 
        if(userGuess === computerChoice) {
            // Then go up one number on the wins variable.
            wins++;
        }

        // if the key pressed is NOT the same as the value then take away one guess.
        else {
            guesses--;
            
            // Stores the userGuess strokes into the guessedLetters array.
            guessedLetters.push(userGuess);

            //Displays guessedLetters on page.
            document.getElementById("guessedLetters").innerHTML = guessedLetters;
        }

        // When there are no remaining guesses, then increment on the losses variable.
        if(guesses === 0) {
            losses++;
        }

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses").innerHTML = guesses;
}
