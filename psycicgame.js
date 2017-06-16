

var aphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]; 

      document.onkeyup = function(event) {

      	var wins =0;
      	var loses =0;
      	var ties=0;
      	var guessesLeft=9;
      	var guessedLetters=[];
      	var lettersToGuess= null;

        var userGuess = event.key;

        console.log(userGuess);

        var computerChoice =  Math.floor(Math.random() * aphabet.length);

       
       var updateGuessed= function() {
       	  document.querySelector("#lettersToGuess").innerHTML = "Guesses left:" + guessesLeft;
};

		var updateLettersToGuess= function() {
		 this.letterToGuess = this.computerChoices Math.floor(Math.random() * this.computerChoices.length);
};
		var updateLettersGuessedSoFar= function() {
			  document.querySelector("#guessesLeft").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
		}

		var reset= function (){
			totalGuesses= 9;
			guessesLeft = 9;
			guessedLetters= [];

			updateLettersToGuess();
			updateGuessesleft();
			updateLettersGuessedSoFar();

		}


		document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#victories').innerHTML = "victories: " + wins;
                alert("Maybe you are psycho.. i mean psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
        	alert ("haaaaaaaa! wrong! loser!")
           
        }

var html = "<p>Press "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z" to stat playing!</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

         
          document.querySelector("#game").innerHTML = html;

        }
};
