alert("connected");

var listArray = ["einstein", "jobs", "gates", "hawking", "carver"];
var wordChosen = "";
var numberGuesses = 9;
var wrongGuesses = "";
var lettersGuessed = "";
var winCount = 0;
var lossCount = 0;
var lettersChosen = [];
var blanks = [];

// Start Game, CPU chooses random word from Array
// Split the chosen word into separate letters
$(function() {
  function gamestart() {
    var rand = Math.floor(Math.random() * listArray.length);
    console.log("rand: ", rand);
    wordChosen = listArray[rand];
    $("#chosenDiv").text(wordChosen);
    console.log(wordChosen);
    lettersChosen = wordChosen.split("");
    console.log(lettersChosen);
    $("#guessesDiv").text(numberGuesses);
    makeBlanks();
    console.log(blanks);
  }

  // Corresponding number of links are printed to screen

  $("body").on("keydown",function(e){
      console.log(e.originalEvent);
      if (e.originalEvent.keyCode === 13){
        gamestart(); 
      }
  })

  function makeBlanks() {
    for (i = 0; i < lettersChosen.length; i++) {
      blanks.push("_");
    }
    // close of makeBlanks
  }

  document.getElementById("chosenDiv").textContent = blanks.join;

  document.getElementById("guessesDiv").textContent = lettersGuessed.join;

 
  // See if user selected letters are correct vs the CPU selected letters
  // function checkLetters (){
  //     var lettersInWord =
  // if()
  // }

  // Win count set to 0, Loss count set to 0

  // User inputs random letter on Keyboard
  // CPU compares selected letter to CPU selected letter
  // If letter selected is true, letter is placed in corresponding blank space
  // If letter is false, letter is printed to already guessed div
  // Repeat until guess count reaches 0 or all blanks filled with correct letters
  // If guesses equal 0 then loss count +1
  // If all blanks are filled then win tally goes up by one.
  // Restart function resets game when selected on screen
});
