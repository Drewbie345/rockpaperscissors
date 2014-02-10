$(document).ready(function(){
	$('#start').click(function(){
		startGame();
	});
});

var computer = "";
var score;
var highScore;


var paper = $('#paper').data('internal-id');
var scissors = $('#scissors').data('internal-id');

var startGame = function(firstTime) {
	if(firstTime) {
		highScore = 0
	} else {
		highScore += score;
	}

	var player = "";
	
	var whatButtonClicked = function(){
		var clicked = "";
		var p = "";
		var rock = $('#rock').data('internal-id');

		var playerRock = document.getElementById('rock');
		playerRock.onclick = function() {
			$('#rock1-p').addClass('border-p');
			event.preventDefault();
			clicked = rock;
		}

		var playerPaper = document.getElementById('paper');
		playerPaper.onclick = function() {
			$('#paper1-p').addClass('border-p');
			event.preventDefault();
		}

		var playerScissors = document.getElementById('scissors');
		playerScissors.onclick = function() {
			$('#scissors1-p').addClass('border-p');
			event.preventDefault();
		}

		if (clicked === "rock") {
			alert(clicked);
		}
	}

	whatButtonClicked();
	//if (player === "rock" || player === "paper" || player === "scissors" ) {
	//	computer = computerInput();
	//}
}

var computerInput = function() {
	var computerChoice;
	var randomNumber = randInt(1, 3);

	switch(randomNumber) {
		case 1:
			computerChoice = "rock";
			$('#rock1-c').addClass('border-c')
			break;
		case 2:
			computerChoice = "paper";
			$('#paper1-c').addClass('border-c')
			break;
		case 3:
			computerChoice = "scissors";
			$('#scissors1-c').addClass('border-c')
			break;
	}

	return computerChoice;
}

var playGame = function() {
	var winner = "";

	if (player == computer) {
		winner = "tie!";
		alert("Tie!");
	} else {
		if (computer === "rock" && player === "paper") {
			winner = "player";
		} else if (computer === "rock" && player === "scissors") {
			winner = "computer";
		} else if (computer === "paper" && player === "rock") {
			winner = "computer";
		} else if (computer === "paper" && player === "scissors") {
			winner = "player";
		} else if (computer === "scissors" && player === "rock") {
			winner = "player";
		} else if (computer === "scissors" && player === "paper") {
			winner = "computer";
		} else {
			return "Error!";
		}
	}

	return winner;
	onGameOver();
}

// var playerInput = function(){
// 	var playerChoice;
// 	var button = whatButtonClicked();

// 	if (button === "rock") {
// 		playerChoice = "rock";
// 	} else if (button === "paper") {
// 		playerChoice = "paper";
// 	} else if (button === "scissors") {
// 		playerChoice = "scissors";
// 	} else {
// 		alert("Error");
// 	}

// 	return playerChoice;
// }

function randInt(minVal, maxVal) {
	var rInt = minVal + (Math.random() * (maxVal - minVal));
	return Math.round(rInt);	
}

var checkButton = function() {
	$('#play-again').click(function(){
		return true;
	})
}

var onGameOver = function() {
	$('#play-again').show();

	if (score > highScore) {
		highScore = score;
	}
	if (checkButton) {
		startGame();
	}
}