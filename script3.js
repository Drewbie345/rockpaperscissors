$(document).ready(function() {
	$('#rock').click(function(event){
		updatePlayer("rock");
		$('#rock1-p').addClass('border-p');
		disableButtons();
		updateComputer();
		determineWinner();
		event.preventDefault();
	});

	$('#paper').click(function(event){
		updatePlayer("paper");
		$('#paper1-p').addClass('border-p');
		disableButtons();
		updateComputer();
		determineWinner();
		event.preventDefault();
	});

	$('#scissors').click(function(event){
		updatePlayer("scissors");
		$('#scissors1-p').addClass('border-p');
		disableButtons();
		updateComputer();
		determineWinner();
		event.preventDefault();
	});

	$('#play-again').click(function(event) {
		clearButtons();
		enableButtons();
		$('#who-won').addClass('again').text("Pick Again!");
		event.preventDefault();
	});
});

var player = new Object();
player.pick = "";
player.changePick = function(choice) {
	player.pick = choice;
}


var computer = new Object();
computer.pick = "";
computer.changePick = function(choice) {
	computer.pick = choice;
}

function updateComputer() {
	var ai = computerInput();
	computer.changePick(ai);
}

function updatePlayer(c) {
	player.changePick(c);
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

var determineWinner = function() {
	var play = player.pick;
	var comp = computer.pick;
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

	if (winner === "player" || winner === "computer") {
		$('#who-won').removeClass('again');
		$('#who-won').text("The " + winner + " wins!");
		$('#display-winner').show();
	} else {
		$('#who-won').removeClass('again');
		$('#who-won').text("A Tie!");
		$('#display-winner').show();
	}

}

function disableButtons() {
	$('#rock, #paper, #scissors').addClass('pick-choice');
	$('#dare').hide();
}

function enableButtons() {
	$('#rock, #paper, #scissors').removeClass('pick-choice');
}

function clearButtons() {
	$('#rock1-p, #paper1-p, #scissors1-p').removeClass('border-p');
	$('#rock1-c, #paper1-c, #scissors1-c').removeClass('border-c');
}

function randInt(minVal, maxVal) {
	var rInt = minVal + (Math.random() * (maxVal - minVal));
	return Math.round(rInt);	
}
