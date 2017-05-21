var wins = 0,
	losses = 0,
	randomNumber = 0,
	userNumber = 0,
	crystals = [];

function setupGame() {
	randomNumber= (Math.floor(Math.random() * 100) + 1);
	console.log(randomNumber);
	userNumber = 0;
	$('#randomNumber').html(randomNumber);
	$('#userScore').html('Your Score: 0');
	for(var i= 0; i < 4; i++) {
		crystals[i]= Math.floor(Math.random() * (10-1) + 1);
	};
	console.log(crystals[0]);
	console.log(crystals[1]);
	console.log(crystals[2]);
	console.log(crystals[3]);

}

setupGame();

$('.crys1').on("click", function(){
	userNumber = userNumber + crystals[0];
	$('#userScore').html('Your Score: ' + userNumber)
	checkWin();
});

$('.crys2').on("click", function(){
	userNumber = userNumber + crystals[1];
	$('#userScore').html('Your Score: ' + userNumber)
	checkWin();
});

$('.crys3').on("click", function(){
	userNumber = userNumber + crystals[2];
	$('#userScore').html('Your Score: ' + userNumber)
	checkWin();
});

$('.crys4').on("click", function(){
	userNumber = userNumber + crystals[3];
	$('#userScore').html('Your Score: ' + userNumber)
	checkWin();
});

function checkWin () {
	if (userNumber === randomNumber) {
		wins = wins + 1;
		$('#wins').html('Wins: ' + wins);
		setupGame();
	}
	else if(userNumber >= randomNumber + 1){
		losses = losses + 1;
		$('#losses').html('Losses: '+ losses);
		setupGame();
	}
};
