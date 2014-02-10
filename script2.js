$(document).ready(function(){
	$('#start').click(function(event){
		event.preventDefault();
		$('.rules').show();
		playGame();
	});

	$('#play-again').click(function(event){
		event.preventDefault();
		
		$('#rock1-p').removeClass('border-p');
		$('#paper1-p').removeClass('border-p');
		$('#scissors1-p').removeClass('border-p');

		$('#rock1-c').removeClass('border-c');
		$('#paper1-c').removeClass('border-c');
		$('#scissors1-c').removeClass('border-c');

		playGame();
	})
});

var player = "";
var computer = "";

var playGame = function() {
	$('#rock').click(function(event){
		$('#rock1-p').addClass('border-p');
		event.preventDefault();
		$('#start').hide();
		$('#dare').hide();
		rockScenario();
	});

	$('#paper').click(function(event) {
		$('#paper1-p').addClass('border-p');
		event.preventDefault();
		$('#start').hide();
		$('#dare').hide();
		paperScenario();
	});

	$('#scissors').click(function(event){
		$('#scissors1-p').addClass('border-p');
		event.preventDefault();
		$('#start').hide();
		$('#dare').hide();
		scissorsScenario();
	});
}

var rockScenario = function() {
	player = "rock";
	if (computer === "") {
		computer = computerInput();
	} else {
		computer = "";
		computer = computerInput();
	}
	var winner = determineWinner(player, computer);
	displayWinner(winner);
}

var paperScenario = function() {
	player = "paper";
	computer = "";
	computer = computerInput();
	var winner = determineWinner(player, computer);
	displayWinner(winner);
}

var scissorsScenario = function() {
	player = "scissors";
	computer = "";
	computer = computerInput();
	var winner = determineWinner(player, computer);
	displayWinner(winner);
}

var determineWinner = function(p, c) {
	var play = p;
	var comp = c;
	var winner;

	if (play === comp) {
		winner = "tie";
		//alert(winner);
	} else {
		if (comp === "rock" && play === "paper") {
			winner = "player";
			//alert(winner);
		} else if (comp === "rock" && play === "scissors") {
			winner = "computer";
			//alert(winner);
		} else if (comp === "paper" && play === "rock") {
			winner = "computer";
			//alert(winner);
		} else if (comp === "paper" && play === "scissors") {
			winner = "player";
			//alert(winner);
		} else if (comp === "scissors" && play === "rock") {
			winner = "player";
			//alert(winner);
		} else if (comp === "scissors" && play === "paper") {
			winner = "computer";
			//alert(winner);
		} else {
			return "Error!";
			//alert("error")
		}
	}
	return winner;
}

var displayWinner = function(winner) {
	var won = winner;

	if (won === "computer" || won === "player") {
		//alert("test");
		$('#start').hide();
		$('#who-won').text("The " + won + " wins!");
		$('#display-winner').show();
	} else if (won === "tie") {
		//alert("test");
		$('#start').hide();
		$('#who-won').text("A Tie!");
		$('#display-winner').show();
	}
}

var computerInput = function() {
	var randomNumber = randInt(1, 3);
	var computerChoice = "";

	switch(randomNumber) {
		case 1:
			$('#rock1-c').removeClass('border-c')
			computerChoice = "rock";
			$('#rock1-c').addClass('border-c')
			break;
		case 2:
			$('#paper1-c').removeClass('border-c')
			computerChoice = "paper";
			$('#paper1-c').addClass('border-c')
			break;
		case 3:
			$('#scissors1-c').removeClass('border-c')
			computerChoice = "scissors";
			$('#scissors1-c').addClass('border-c')
			break;
	}
	return computerChoice;
}

function randInt(minVal, maxVal) {
	var rInt = minVal + (Math.random() * (maxVal - minVal));
	return Math.round(rInt);	
}







