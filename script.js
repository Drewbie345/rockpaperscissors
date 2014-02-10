$(document).ready(function(){
	var playerChoice;

	$('#start').click(function(){
	
		$('#rules').show();

		$('#rock').click(function(event) {
			playerChoice = "rock"
			var computer = computerInput();

			$('#rock1-p').addClass('border-p');
			$('#paper1-p').removeClass('border-p');
			$('#scissors1-p').removeClass('border-p');

			$('#start').hide();
			$('#play-again').show();

			var result = compareChoices(playerChoice, computer);
			playARound(result);
			event.preventDefault();
		});

		$('#paper').click(function(event) {
			playerChoice = "paper"
			var computer = computerInput();
			
			$('#paper1-p').addClass('border-p');
			$('#rock1-p').removeClass('border-p');
			$('#scissors1-p').removeClass('border-p');

			$('#start').hide();
			$('#play-again').show();

			var result = compareChoices(playerChoice, computer);
			playARound(result);
			event.preventDefault();
		});

		$('#scissors').click(function(event) {
			playerChoice = "scissors"
			var computer = computerInput();
			
			$('#scissors1-p').addClass('border-p');
			$('#paper1-p').removeClass('border-p');
			$('#rock1-p').removeClass('border-p');

			$('#start').hide();
			$('#play-again').show();

			var result = compareChoices(playerChoice, computer);
			playARound(result);
			event.preventDefault();
		});	
	});
	
	$('#play-again').click(function() {
		//alert("test");
		resetGame();
	});	
});

// reset game 
var resetGame = function() {
	location.reload(true);
}

// play game
var playARound = function(result) {
	var r = result
	if (r === "computer") {
		$('#display-winner').text("The " + r + " wins!");
		$('#dare').hide();
		$('#display-winner').show();
	} else if (r === "player") {
		$('#display-winner').text("You win!");
		$('#dare').hide();
		$('#display-winner').show();
	} else if (r === "tie") {
		$('#display-winner').text("Oh no! A " + r);
		$('#dare').hide();
		$('#display-winner').show();
	}
}

// returns a random number
function randInt(minVal, maxVal) {
	var rInt = minVal + (Math.random() * (maxVal - minVal));
	return Math.round(rInt);	
}

// get Computer's choice
var computerInput = function() {
	var computerChoice;
	var randomNumber = randInt(1, 3);
	if (randomNumber === 1) {
		computerChoice = "rock"

		$('#rock1-c').addClass('border-c');
		$('#scissors1-c').removeClass('border-p');
		$('#paper1-c').removeClass('border-p');

	} else if (randomNumber === 2) {
		computerChoice = "paper"

		$('#paper1-c').addClass('border-c');
		$('#scissors1-c').removeClass('border-p');
		$('#rock1-c').removeClass('border-p');

	} else if (randomNumber === 3) {
		computerChoice = "scissors"

		$('#scissors1-c').addClass('border-c');
		$('#paper1-c').removeClass('border-p');
		$('#rock1-c').removeClass('border-p');

	} else {
		return "Error";
	}
	return computerChoice;
}

// compare Player 1's input to Computer's choice
var compareChoices = function(pChoice, computer) {
	var player = pChoice;
	var winner;
	var c = computer;

	if (c === player) {
		winner = "tie";
	} else {
		if (c === "rock" && player === "paper") {
			winner = "player";
		} else if (c === "rock" && player === "scissors") {
			winner = "computer";
		} else if (c === "paper" && player === "rock") {
			winner = "computer";
		} else if (c === "paper" && player === "scissors") {
			winner = "player";
		} else if (c === "scissors" && player === "rock") {
			winner = "player";
		} else if (c === "scissors" && player === "paper") {
			winner = "computer";
		} else {
			return "Error";
		}
	}
	return winner;
}


// display score

// offer to play again

// restart game

