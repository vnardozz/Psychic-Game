// array  of letters for the computer to chose from 
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w","x", "y", "y"]

var lettersGuessed = []



// variables starting value for tally counter
var wins = 0;
var losses = 0;
var guessesLeft = 6;


var compGuess = letterBank[Math.floor(Math.random() * letterBank.length)];



document.onkeyup = function (event) {
    // var for use of collecting key answers for both user and computer. 

    var userGuess = event.key;

    if (checkguessed(userGuess) === false) {


        // if statements to get a win or loss 
        if (userGuess === compGuess) {
            alert("You won!")
            compGuess = letterBank[Math.floor(Math.random() * letterBank.length)];
            userGuess = "";
            guessesLeft = 7;
            lettersGuessed = [];


            wins++;
        }

        if (userGuess != compGuess) {
            guessesLeft--;
            lettersGuessed.push(userGuess);

        }



        if (guessesLeft === 0) {
            alert("GAME OVER");
            guessesLeft = 6;
            losses++;
            userGuess = "";
            lettersGuessed = [];

            compGuess = letterBank[Math.floor(Math.random() * letterBank.length)];
        }
    }



    // variables to display a win/loss tally and the computer/user guesses    
    var html =
        "<p> wins: " + wins + "</p>" +
        "<p> losses: " + losses + "</p>" +
        "<p> Guesses left: " + guessesLeft + "</p>" +
        "<p> Your Guesses so far:" + lettersGuessed + "</p>";



    function checkguessed(userGuess) {
        if (lettersGuessed.indexOf(userGuess) > -1) {
            alert("Repeat!")
            return true;
        } else {
            return false;
        }
    }

    // sends info collected from html var to the game div
    document.querySelector("#game").innerHTML = html;
};