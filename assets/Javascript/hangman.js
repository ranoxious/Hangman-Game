//array of words

var wordOptions = ['cat', 'feline', 'dog', 'wholefoods', 'dora', 'rudra', 'muhammad', 'celery', 'Doda', 'water',
      'swimsuit', 'california', 'venice', 'jira', 'Azure', 'chicken', 'organic', 'love', 'photography', 'wings',
      'Amazon', 'Fiji', 'litter', 'lotion', 'food', 'bills', 'Netflix', 'Apple', 'mobster', 'YouTube'];



//variables
var optionWord = "";
var lettersWord = [];
var numbersBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var remainingletters = 0;
var winCount = 0; 
var lossCount = 0; 
var guessesLeft = 15; 


function startGame () 
{	
	optionWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	console.log(optionWord); //I put this line here so you know what word was picked.
	lettersWord = optionWord.split(""); 
	numbersBlanks = lettersWord.length; 
    remainingletters = lettersWord.length; 

	guessesLeft = 15;
	wrongLetters = [];
	blanksAndSuccesses = [];

	//reset the HTML too
      document.querySelector('#wrongletters').innerHTML = wrongLetters;
	  document.querySelector('#guessesleft').innerHTML = guessesLeft;

	//loop through the array

	for (var i = 0; i < numbersBlanks; i++) {
		blanksAndSuccesses.push("_");
	  }
    //get access to your h1 and place it there
	 document.querySelector('#blanks').innerHTML = blanksAndSuccesses;
	  

}

function checkWords(letter) 
{
			var isLetterInWord = false;

			//do a comparison with the guessed word, to see if the letter exists.
			for (var i = 0; i < optionWord.length; i++) {
			  if (optionWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
				document.querySelector('#blanks').innerHTML = blanksAndSuccesses;
					remainingletters--;
				
			  }
			}

			if(remainingletters == 0)
				{
					alert("You won! Please have a cookie.");
						//Your letters match that of the winner, you are a winner
					startGame();
				}
		  
			//No need of this step, I merged it above.
			// if (isLetterInWord) {
			//   for (var i = 0; i < numbersBlanks; i++) {
			// 	if (optionWord[i] == letter) {
			// 	  blanksAndSuccesses[i] = letter;
			// 	}
		  
			//   }
		  
			// }

			//I tried adding ++lossCount and wonCount but I can't get the functions to work. Could you help me?
		  
			//wrong guess = decrease chances by 1
			 if(isLetterInWord == false)
			 {
			  wrongLetters.push(letter);
 			  document.querySelector('#wrongletters').innerHTML = wrongLetters;
			  guessesLeft--;
			  document.querySelector('#guessesleft').innerHTML = guessesLeft;

			  if(guessesLeft == 0)
			  {
			  	alert("You Lost. Better luck next time.");
			  	startGame();
			  }
			}
		  
		  } 
 //start

	
startGame();

// Register keyclicks

document.onkeyup = function(event) {
	
  var wordLetters = String.fromCharCode(event.keyCode).toLowerCase();
  checkWords(wordLetters);
 // roundComplete();

}