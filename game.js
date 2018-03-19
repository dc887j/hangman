var listNames = ["einstien", "freud", "jobs", "hawking", "carver"];

var guessesNum = 10;

var cpuSelect;

var wordLetters = [];

var triesCount = 0;

var myDashesArray = [];

var myGuessDisplay = "";

var myDivChosen = document.getElementById("chosenDiv");

var myDivGuesses = document.getElementById("guesses_div");

var myDivAlready = document.getElementById("already_guess");

function createUnderscores () {

    for (var i = 0; i < listNames.length; i++) {
        myDashesArray.push(" __ ");
        // myGuessDisplay = myGuessDisplay + " __ ";
        document.getElementById("chosenDiv").textContent = myDashesArray.join("");
    };

}


myDivChosen.textContent = myGuessDisplay;

console.log(myDashesArray);





    // Game begins with 9 tries for user

    function gameBegin() {

        triesCount = 9;

        cpuSelect = listNames[Math.floor(Math.random() * listNames.length)];

        wordLetters = cpuSelect.split("");
        console.log(cpuSelect);
        console.log(wordLetters);
            
        
    };

// CPU records user guess

document.onkeyup = function (event) {
    var letterGuess = event.key.toLowerCase();

}

function chooseLetter() {

}

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
};

